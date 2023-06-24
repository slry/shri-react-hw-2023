import { FunctionComponent } from 'react';
import styles from './TotalTickets.module.css';

type TotalTicketsProps = {
	totalTickets: number;
};

export const TotalTickets: FunctionComponent<TotalTicketsProps> = ({ totalTickets }) => {
	return (
		<div className={styles.totalTickets}>
			<h3>Итого билетов:</h3>
			<h3>{totalTickets}</h3>
		</div>
	);
};
