import Image from 'next/image';
import styles from './FilmTicket.module.css';
import { FunctionComponent } from 'react';
import { UICounter } from '../ui/UICounter';
import deleteIcon from '../../../public/delete.svg';
import { Film } from '@/contexts/FilmsContext';
import Link from 'next/link';

type FilmTicketProps = {
	film: Film;
	inBasket?: boolean;
};

type DeleteButtonProps = {
	onClick: () => void;
};

export const FilmTicket: FunctionComponent<FilmTicketProps> = ({ film, inBasket }) => {
	const { posterUrl, title, genre, id } = film;
	return (
		<Link className={styles.ticket} href={`/film/${id}`}>
			<div className={styles.ticketCard}>
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
			</div>
			<div className={styles.ticketBtns} onClick={(e) => e.preventDefault()}>
				<UICounter filmId={id} />
				{inBasket && <DeleteButton onClick={() => {}} />}
			</div>
		</Link>
	);
};

const DeleteButton: FunctionComponent<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.deleteBtn} onClick={onClick}>
			<Image src={deleteIcon} alt={'delete'} width={12.5} height={12.5} />
		</button>
	);
};
