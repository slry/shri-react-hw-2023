import { UIDropdownSelect } from '../ui/UIDropdownSelect';
import { UIInput } from '../ui/UIInput/UIInput';
import styles from './Filter.module.css';

export const Filter = () => {
	return (
		<div className={styles.filter}>
			<h4>Фильтр поиска</h4>
			<div className={styles.filterGroup}>
				<UIInput placeholder={'Введите название'} title={'Название'} />
				<UIDropdownSelect placeholder={'Выберите жанр'} title={'Жанр'} />
				<UIDropdownSelect placeholder={'Выберите кинотеатр'} title={'Кинотеатр'} />
			</div>
		</div>
	);
};
