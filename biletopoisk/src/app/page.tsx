import { Filter } from '@/components/Filter';
import styles from './page.module.css';
import { FilmsList } from '@/components/FilmsList';

export default function Home() {
	return (
		<div className={styles.home}>
			<Filter />
			<FilmsList />
		</div>
	);
}
