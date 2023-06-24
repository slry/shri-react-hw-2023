'use client';
import { CinemasContext } from '@/contexts/CinemasContext';
import { Film, FilmsContext, SetFilmsContext } from '@/contexts/FilmsContext';
import { TicketCountContext } from '@/contexts/TicketCountContext';
import { useCinemas } from '@/hooks/useCinemas';
import { useFilms } from '@/hooks/useFilms';
import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';

export const DataProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const { initialFilms } = useFilms();
	const { cinemas } = useCinemas();

	const [films, setFilms] = useState<Film[]>([]);
	const [filmMap, setFilmMap] = useState<Map<string, number>>(new Map<string, number>());

	useEffect(() => {
		setFilms(initialFilms);
	}, [initialFilms]);

	return (
		<FilmsContext.Provider value={{ initialFilms: initialFilms, filteredFilms: films }}>
			<SetFilmsContext.Provider value={setFilms}>
				<TicketCountContext.Provider value={{ filmMap, setFilmMap }}>
					<CinemasContext.Provider value={cinemas}>{children}</CinemasContext.Provider>
				</TicketCountContext.Provider>
			</SetFilmsContext.Provider>
		</FilmsContext.Provider>
	);
};
