import { Film } from '@/contexts/FilmsContext';
import { translateGenre } from './translateGenre';

export const fetchFilm = async (id: string) => {
	const film: Film = await fetch(`http://localhost:3001/api/movie?movieId=${id}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		if (res.status !== 200) {
			throw new Error('Error fetching film');
		}
		return res.json();
	});

	const translatedFilm = {
		...film,
		genre: translateGenre(film.genre),
	};

	return translatedFilm;
};
