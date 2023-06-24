'use client';
import Image from 'next/image';
import styles from './FilmTicket.module.css';
import { FunctionComponent, useState } from 'react';
import { UICounter } from '../ui/UICounter';
import deleteIcon from '../../../public/delete.svg';

type FilmTicketProps = {
	filmName: string;
	categoryName: string;
	posterUrl: string;
	inBasket?: boolean;
};

type DeleteButtonProps = {
	onClick: () => void;
};

export const FilmTicket: FunctionComponent<FilmTicketProps> = ({
	filmName,
	categoryName,
	posterUrl,
	inBasket,
}) => {
	const [count, setCount] = useState(0);
	return (
		<div className={styles.ticket}>
			<div className={styles.ticketCard}>
				<Image
					src={posterUrl}
					alt={'poster'}
					width={100}
					height={120}
					style={{ borderRadius: '8px', objectFit: 'cover' }}
				/>
				<div className={styles.ticketInfo}>
					<h3>{filmName}</h3>
					<span className={styles.category}>{categoryName}</span>
				</div>
			</div>
			<div className={styles.ticketBtns}>
				<UICounter count={count} setCount={setCount} />
				{inBasket && <DeleteButton onClick={() => {}} />}
			</div>
		</div>
	);
};

const DeleteButton: FunctionComponent<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.deleteBtn} onClick={onClick}>
			<Image src={deleteIcon} alt={'delete'} width={12.5} height={12.5} />
		</button>
	);
};
