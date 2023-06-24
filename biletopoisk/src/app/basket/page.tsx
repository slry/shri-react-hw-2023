'use client';
import { useBasket } from '@/hooks/useBasket';
import styles from './page.module.css';
import { FilmTicket } from '@/components/FilmTicket';

export default function Basket() {
	const { filmsInBasket } = useBasket();

	return (
		<div className={styles.basket}>
			{filmsInBasket.map((film) => (
				<FilmTicket key={film.id} film={film} inBasket />
			))}
		</div>
	);
}
