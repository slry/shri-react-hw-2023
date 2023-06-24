import { Film } from '@/contexts/FilmsContext';
import { translateGenre } from '@/utils/translateGenre';
import { useEffect, useState } from 'react';

export const useFilms = () => {
	const [initialFilms, setInitialFilms] = useState<Film[]>([]);

	const fetchFilms = async () => {
		const films: Film[] = await fetch('/api/movies', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}).then((res) => {
			if (res.status !== 200) {
				throw new Error('Error fetching films');
			}
			return res.json();
		});

		console.log(films);
		return films;
	};

	useEffect(() => {
		fetchFilms().then((films) => {
			setInitialFilms(
				films.map((film) => {
					const translatedFilm = {
						...film,
						genre: translateGenre(film.genre),
					};

					return translatedFilm;
				})
			);
		});
	}, []);

	return { initialFilms };
};
