import useControlledInput from '@/hooks/useControlledInput';
import styles from './UIInput.module.css';
import { FunctionComponent, InputHTMLAttributes } from 'react';

type UIInputProps = InputHTMLAttributes<HTMLInputElement> & {
	title: string;
	onCustomChange?: (title: string) => void;
};

export const UIInput: FunctionComponent<UIInputProps> = ({ title, onCustomChange, ...props }) => {
	const { value, onChange } = useControlledInput('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onCustomChange) onCustomChange(e.target.value);
		onChange(e);
	};

	return (
		<div className={styles.wrap}>
			<span className={styles.title}>{title}</span>
			<input className={styles.input} value={value} onChange={handleChange} {...props} />
		</div>
	);
};
