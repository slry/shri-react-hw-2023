import { CinemasContext } from '@/contexts/CinemasContext';
import { FilmsContext } from '@/contexts/FilmsContext';
import { useContext, useMemo } from 'react';

export const useOptions = () => {
	const cinemas = useContext(CinemasContext);
	const { initialFilms: currentFilms } = useContext(FilmsContext);

	const cinemasOptions = useMemo(() => cinemas.map((cinema) => cinema.name), [cinemas]);
	const genresOptions = useMemo(() => {
		const genres = currentFilms.map((film) => film.genre);
		return Array.from(new Set(genres));
	}, [currentFilms]);

	return { cinemasOptions, genresOptions };
};
