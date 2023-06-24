import { FunctionComponent } from 'react';
import styles from './UIYesButton.module.css';

export const UIYesButton: FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
	props
) => (
	<button className={styles.yesBtn} {...props}>
		Да
	</button>
);
