import Image from 'next/image';
import styles from './FilmTicket.module.css';
import { FunctionComponent } from 'react';
import { UICounter } from '../ui/UICounter';
import { Film } from '@/contexts/FilmsContext';
import Link from 'next/link';
import { UIDeleteButton } from '../ui/UIDeleteButton/UIDeleteButton';
import { useRemoveTicketHandler } from '@/hooks/useRemoveTicketHandler';

type FilmTicketProps = {
	film: Film;
	inBasket?: boolean;
};

export const FilmTicket: FunctionComponent<FilmTicketProps> = ({ film, inBasket }) => {
	const { posterUrl, title, genre, id } = film;

	const { handler, openModal, portal } = useRemoveTicketHandler();

	return (
		<div className={styles.ticket}>
			<Link className={styles.ticketCard} href={`/film/${id}`}>
				<Image
					src={posterUrl}
					alt={'poster'}
					width={100}
					height={120}
					style={{ borderRadius: '8px', objectFit: 'cover' }}
				/>
				<div className={styles.ticketInfo}>
					<h3>{title}</h3>
					<span className={styles.category}>{genre}</span>
				</div>
			</Link>
			<div className={styles.ticketBtns}>
				<UICounter filmId={id} inBasket={inBasket} />
				{inBasket && <UIDeleteButton onClick={() => handler(id, 0, inBasket)} />}
				{openModal && portal}
			</div>
		</div>
	);
};
