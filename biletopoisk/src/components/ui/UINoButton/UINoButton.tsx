import { FunctionComponent } from 'react';
import styles from './UINoButton.module.css';

export const UINoButton: FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
	props
) => (
	<button className={styles.noBtn} {...props}>
		Нет
	</button>
);
