'use client';
import Image from 'next/image';
import styles from './UICounter.module.css';
import { FunctionComponent, useContext, useState } from 'react';
import classNames from 'classnames';
import minus from '../../../../public/minus.svg';
import plus from '../../../../public/plus.svg';
import { TicketCountContext } from '@/contexts/TicketCountContext';
import { useRemoveTicketHandler } from '@/hooks/useRemoveTicketHandler';

type UICounterProps = {
	filmId: string;
	inBasket?: boolean;
};

export const UICounter: FunctionComponent<UICounterProps> = ({ filmId, inBasket = false }) => {
	const { filmMap } = useContext(TicketCountContext);
	const [count, setCount] = useState(filmMap.get(filmId) || 0);

	const { handler, portal, openModal } = useRemoveTicketHandler();

	const handleMinus = () => {
		handler(filmId, count - 1, inBasket);
		if (count > 1) setCount(count - 1);
	};

	const handlePlus = () => {
		handler(filmId, count + 1, inBasket);
		if (count < 30) setCount(count + 1);
	};

	return (
		<div className={styles.counter}>
			<button
				className={classNames(styles.btn, count <= 0 ? styles.disabled : '')}
				onClick={handleMinus}
			>
				<Image src={minus} alt={'minus'} width={9} height={9} />
			</button>
			<span className={styles.count}>{count}</span>
			<button
				className={classNames(styles.btn, count >= 30 ? styles.disabled : '')}
				onClick={handlePlus}
			>
				<Image src={plus} alt={'plus'} width={9} height={9} />
			</button>
			{openModal && portal}
		</div>
	);
};
