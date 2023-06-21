'use client';

import useControlledInput from '@/hooks/useControlledInput';
import styles from './UIInput.module.css';
import { FunctionComponent, InputHTMLAttributes } from 'react';

type UIInputProps = InputHTMLAttributes<HTMLInputElement> & {
	title: string;
};

export const UIInput: FunctionComponent<UIInputProps> = ({ title, ...props }) => {
	const { value, onChange } = useControlledInput('');
	return (
		<div className={styles.wrap}>
			<span className={styles.title}>{title}</span>
			<input className={styles.input} value={value} onChange={onChange} {...props} />
		</div>
	);
};
