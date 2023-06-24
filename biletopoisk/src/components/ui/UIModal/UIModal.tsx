import { FunctionComponent } from 'react';
import styles from './UIModal.module.css';
import { UIDeleteButton } from '../UIDeleteButton';
import { UIYesButton } from '../UIYesButton';
import { UINoButton } from '../UINoButton';

type UIModalProps = {
	onClickYes: () => void;
	onClickNo: () => void;
};

export const UIModal: FunctionComponent<UIModalProps> = ({ onClickYes, onClickNo }) => {
	return (
		<div className={styles.modalWrapper} onClick={onClickNo}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.modalContent}>
					<div className={styles.modalHeader}>
						<h3>Удаление билета</h3>
						<UIDeleteButton onClick={onClickNo} />
					</div>
					<p>Вы действительно хотите удалить билет?</p>
				</div>
				<div className={styles.buttons}>
					<UIYesButton onClick={onClickYes} />
					<UINoButton onClick={onClickNo} />
				</div>
			</div>
		</div>
	);
};
