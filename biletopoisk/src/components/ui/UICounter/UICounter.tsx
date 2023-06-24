'use client';
import Image from 'next/image';
import styles from './UICounter.module.css';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import minus from '../../../../public/minus.svg';
import plus from '../../../../public/plus.svg';
import { TicketCountContext } from '@/contexts/TicketCountContext';

type UICounterProps = {
	filmId: string;
};

export const UICounter: FunctionComponent<UICounterProps> = ({ filmId }) => {
	const { setFilmMap, filmMap } = useContext(TicketCountContext);
	const [count, setCount] = useState(filmMap.get(filmId) || 0);
	const handleMinus = () => {
		if (count > 0) setCount(count - 1);
	};

	const handlePlus = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setFilmMap((prev) => {
			const newMap = new Map(prev);
			newMap.set(filmId, count);
			return newMap;
		});
		console.log(filmMap);
	}, [count]);

	return (
		<div className={styles.counter}>
			<button
				className={classNames(styles.btn, count <= 0 ? styles.disabled : '')}
				onClick={handleMinus}
			>
				<Image src={minus} alt={'minus'} width={9} height={9} />
			</button>
			<span className={styles.count}>{count}</span>
			<button className={styles.btn} onClick={handlePlus}>
				<Image src={plus} alt={'plus'} width={9} height={9} />
			</button>
		</div>
	);
};
