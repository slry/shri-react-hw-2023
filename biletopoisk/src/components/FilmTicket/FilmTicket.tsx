import Image from 'next/image';
import styles from './FilmTicket.module.css';
import { FunctionComponent, useContext, useState } from 'react';
import { UICounter } from '../ui/UICounter';
import { Film } from '@/contexts/FilmsContext';
import Link from 'next/link';
import { UIDeleteButton } from '../ui/UIDeleteButton/UIDeleteButton';
import { createPortal } from 'react-dom';
import { UIModal } from '../ui/UIModal';
import { TicketCountContext } from '@/contexts/TicketCountContext';

type FilmTicketProps = {
	film: Film;
	inBasket?: boolean;
};

export const FilmTicket: FunctionComponent<FilmTicketProps> = ({ film, inBasket }) => {
	const { posterUrl, title, genre, id } = film;
	const [openModal, setOpenModal] = useState(false);
	const { setFilmMap } = useContext(TicketCountContext);

	const removeTicket = () => {
		setOpenModal(false);
		setFilmMap((prev) => {
			const newMap = new Map(prev);
			newMap.set(id, 0);
			return newMap;
		});
	};

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
				<UICounter filmId={id} />
				{inBasket && <UIDeleteButton onClick={() => setOpenModal(true)} />}
				{openModal &&
					createPortal(
						<UIModal onClickYes={removeTicket} onClickNo={() => setOpenModal(false)} />,
						document.querySelector('#modal-root') as HTMLElement
					)}
			</div>
		</div>
	);
};
