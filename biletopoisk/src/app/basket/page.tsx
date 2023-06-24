'use client';
import { useBasket } from '@/hooks/useBasket';
import styles from './page.module.css';
import { FilmTicket } from '@/components/FilmTicket';
import { TotalTickets } from '@/components/TotalTickets';

export default function Basket() {
	const { filmsInBasket, totalTickets } = useBasket();

	return (
		<div className={styles.basket}>
			<div className={styles.basketList}>
				{filmsInBasket.map((film) => (
					<FilmTicket key={film.id} film={film} inBasket />
				))}
			</div>
			<TotalTickets totalTickets={totalTickets} />
		</div>
	);
}
