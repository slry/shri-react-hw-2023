import styles from './FilmInformation.module.css';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { fetchFilm } from '@/utils/fetchFilm';
import { UICounter } from '../ui/UICounter';

type FilmInformationProps = {
	id: string;
};

export const FilmInformation: FunctionComponent<FilmInformationProps> = async ({ id }) => {
	const film = await fetchFilm(id);

	const filmDetails = [
		{ label: 'Жанр:', value: film.genre },
		{ label: 'Год выпуска:', value: film.releaseYear },
		{ label: 'Рейтинг:', value: film.rating },
		{ label: 'Режиссер:', value: film.director },
	];

	return (
		<div className={styles.filmInfoCard}>
			<Image
				src={film.posterUrl}
				alt="film poster"
				width={400}
				height={500}
				className={styles.filmPoster}
			/>
			<div className={styles.filmInfo}>
				<div className={styles.filmDetailsWrapper}>
					<div className={styles.filmTitleWrapper}>
						<h1 className={styles.filmTitle}>{film.title}</h1>
						<UICounter filmId={id} />
					</div>

					<div className={styles.filmDetails}>
						{filmDetails.map((item, index) => (
							<div key={index} className={styles.filmDetailsItem}>
								<span className={styles.filmDetailsLabel}>{item.label}</span>
								<span className={styles.filmDetailsValue}>{item.value}</span>
							</div>
						))}
					</div>
				</div>
				<div className={styles.filmDescription}>
					<h3 className={styles.filmDescriptionTitle}>Описание</h3>
					<p className={styles.filmDescriptionText}>{film.description}</p>
				</div>
			</div>
		</div>
	);
};
