import { Filter } from '@/components/Filter';
import styles from './page.module.css';
import { FilmsList } from '@/components/FilmsList';
import { DataProvider } from '@/components/DataProvider';

export default function Home() {
	return (
		<DataProvider>
			<div className={styles.home}>
				<Filter />
				<FilmsList />
			</div>
		</DataProvider>
	);
}
