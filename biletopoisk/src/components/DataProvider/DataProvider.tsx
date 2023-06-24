'use client';
import { CinemasContext } from '@/contexts/CinemasContext';
import { Film, FilmsContext, SetFilmsContext } from '@/contexts/FilmsContext';
import { useCinemas } from '@/hooks/useCinemas';
import { useFilms } from '@/hooks/useFilms';
import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';

export const DataProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const { initialFilms } = useFilms();
	const { cinemas } = useCinemas();

	const [films, setFilms] = useState<Film[]>([]);

	useEffect(() => {
		setFilms(initialFilms);
	}, [initialFilms]);

	return (
		<FilmsContext.Provider value={{ initialFilms: initialFilms, filteredFilms: films }}>
			<SetFilmsContext.Provider value={setFilms}>
				<CinemasContext.Provider value={cinemas}>{children}</CinemasContext.Provider>
			</SetFilmsContext.Provider>
		</FilmsContext.Provider>
	);
};
