import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<button className={styles.qna}>Вопросы и Ответы</button>
			<button className={styles.aboutUs}>О нас</button>
		</footer>
	);
};
