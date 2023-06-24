import { CinemasContext } from '@/contexts/CinemasContext';
import { FilmsContext, SetFilmsContext } from '@/contexts/FilmsContext';
import { useContext, useEffect, useState } from 'react';

export const useFilter = () => {
	const [filter, setFilter] = useState({ title: '', genre: '', cinema: '' });

	const setFilterTitle = (title: string) => {
		setFilter({ ...filter, title });
	};

	const setFilterGenre = (genre: string) => {
		setFilter({ ...filter, genre });
	};

	const setFilterCinema = (cinema: string) => {
		setFilter({ ...filter, cinema });
	};

	const { title, genre, cinema } = filter;

	const { initialFilms: currentFilms } = useContext(FilmsContext);
	const setFilteredFilms = useContext(SetFilmsContext);
	const cinemas = useContext(CinemasContext);

	useEffect(() => {
		const filteredFilms = currentFilms.filter((film) => {
			const titleMatch = film.title.toLowerCase().includes(title.toLowerCase());
			const genreMatch = film.genre.toLowerCase() === genre.toLowerCase() || genre === '';
			const cinemaMatch =
				cinemas.find((c) => c.name === cinema)?.movieIds.includes(film.id) || cinema === '';

			return titleMatch && genreMatch && cinemaMatch;
		});

		setFilteredFilms(filteredFilms);
	}, [title, genre, cinema, cinemas, currentFilms]);

	return { setFilterTitle, setFilterGenre, setFilterCinema };
};
