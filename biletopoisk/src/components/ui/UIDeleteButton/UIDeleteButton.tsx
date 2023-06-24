import { FunctionComponent } from 'react';
import deleteIcon from '../../../../public/delete.svg';
import styles from './UIDeleteButton.module.css';
import Image from 'next/image';

type UIDeleteButtonProps = {
	onClick: () => void;
};

export const UIDeleteButton: FunctionComponent<UIDeleteButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.deleteBtn} onClick={onClick}>
			<Image src={deleteIcon} alt={'delete'} width={12.5} height={12.5} />
		</button>
	);
};
