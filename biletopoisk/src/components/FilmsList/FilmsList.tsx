import { FilmTicket } from '../FilmTicket';
import styles from './FilmsList.module.css';

export const FilmsList = () => {
	const films = Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
		<FilmTicket key={`film-${i}`} filmName={`Фильм ${i}`} categoryName={`Категория ${i}`} />
	));
	return <div className={styles.films}>{films}</div>;
};
