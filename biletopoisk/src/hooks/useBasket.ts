import { FilmsContext } from '@/contexts/FilmsContext';
import { TicketCountContext } from '@/contexts/TicketCountContext';
import { useContext } from 'react';

export const useBasket = () => {
	const { initialFilms } = useContext(FilmsContext);
	const { filmMap } = useContext(TicketCountContext);

	const filmsInBasket = initialFilms.filter((film) => filmMap.get(film.id)! > 0);

	return { filmsInBasket };
};
