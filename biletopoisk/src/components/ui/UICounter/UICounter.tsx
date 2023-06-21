import Image from 'next/image';
import styles from './UICounter.module.css';
import { FunctionComponent } from 'react';
import classNames from 'classnames';
import minus from '../../../../public/minus.svg';
import plus from '../../../../public/plus.svg';

type UICounterProps = {
	count: number;
	setCount: (count: number) => void;
};

export const UICounter: FunctionComponent<UICounterProps> = ({ count, setCount }) => {
	const handleMinus = () => {
		if (count > 0) setCount(count - 1);
	};

	const handlePlus = () => {
		setCount(count + 1);
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
			<button className={styles.btn} onClick={handlePlus}>
				<Image src={plus} alt={'plus'} width={9} height={9} />
			</button>
		</div>
	);
};
