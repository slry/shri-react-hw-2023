'use client';
import { UIDropdownSelect } from '../ui/UIDropdownSelect';
import { UIInput } from '../ui/UIInput/UIInput';
import styles from './Filter.module.css';
import { useFilter } from '@/hooks/useFilter';
import { useOptions } from '@/hooks/useOptions';

export const Filter = () => {
	const { setFilterTitle, setFilterGenre, setFilterCinema } = useFilter();
	const { cinemasOptions, genresOptions } = useOptions();

	return (
		<div className={styles.filter}>
			<h4>Фильтр поиска</h4>
			<div className={styles.filterGroup}>
				<UIInput
					placeholder={'Введите название'}
					title={'Название'}
					onCustomChange={setFilterTitle}
				/>
				<UIDropdownSelect
					placeholder={'Выберите жанр'}
					title={'Жанр'}
					getOption={setFilterGenre}
					options={genresOptions}
				/>
				<UIDropdownSelect
					placeholder={'Выберите кинотеатр'}
					title={'Кинотеатр'}
					getOption={setFilterCinema}
					options={cinemasOptions}
				/>
			</div>
		</div>
	);
};
