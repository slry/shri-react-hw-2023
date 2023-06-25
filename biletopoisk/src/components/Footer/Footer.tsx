import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link className={styles.qna} href="/faq">
				Вопросы-ответы
			</Link>
			<Link className={styles.aboutUs} href="/about">
				О нас
			</Link>
		</footer>
	);
};
