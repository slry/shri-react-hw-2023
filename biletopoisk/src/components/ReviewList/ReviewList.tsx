import { FunctionComponent } from 'react';
import styles from './ReviewList.module.css';
import { fetchReviews } from '@/utils/fetchReviews';
import { FilmReview } from '../FilmReview';

type ReviewListProps = {
	id: string;
};

export const ReviewList: FunctionComponent<ReviewListProps> = async ({ id }) => {
	const reviews = await fetchReviews(id);

	return (
		<div className={styles.reviewList}>
			{reviews.map((review, index) => (
				<FilmReview key={index} text={review.text} name={review.name} rating={review.rating} />
			))}
		</div>
	);
};
