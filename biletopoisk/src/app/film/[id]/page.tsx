import { FilmInformation } from '@/components/FilmInformation';
import styles from './page.module.css';
import { ReviewList } from '@/components/ReviewList';

type FilmProps = {
	id: string;
};

export default function Film({ params }: { params: FilmProps }) {
	return (
		<div className={styles.film}>
			<FilmInformation id={params.id} />
			<ReviewList id={params.id} />
		</div>
	);
}
