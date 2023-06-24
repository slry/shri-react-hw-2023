'use client';
import { useContext } from 'react';
import { FilmTicket } from '../FilmTicket';
import styles from './FilmsList.module.css';
import { FilmsContext } from '@/contexts/FilmsContext';

export const FilmsList = () => {
	const { filteredFilms } = useContext(FilmsContext);

	const films = filteredFilms.map((film) => (
		<FilmTicket
			key={film.id}
			filmName={film.title}
			categoryName={film.genre}
			posterUrl={film.posterUrl}
		/>
	));
	return <div className={styles.films}>{films}</div>;
};
