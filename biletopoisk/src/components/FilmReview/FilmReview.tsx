import { FunctionComponent } from 'react';
import styles from './FilmReview.module.css';
import reviewPoster from '/public/review.png';
import Image from 'next/image';

type FilmReviewProps = {
	text: string;
	name: string;
	rating: number;
};

export const FilmReview: FunctionComponent<FilmReviewProps> = ({ text, name, rating }) => {
	return (
		<div className={styles.review}>
			<Image
				src={reviewPoster}
				alt="review poster"
				width={100}
				height={100}
				className={styles.reviewPoster}
			/>
			<div className={styles.reviewInfo}>
				<div className={styles.reviewHeader}>
					<h3>{name}</h3>
					<span className={styles.reviewRating}>{`Оценка: ${rating}`}</span>
				</div>
				<p className={styles.reviewText}>{text}</p>
			</div>
		</div>
	);
};
