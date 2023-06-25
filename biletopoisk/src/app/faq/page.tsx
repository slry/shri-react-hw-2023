import { UIAccordion } from '@/components/ui/UIAccordion';
import styles from './page.module.css';

export default function Faq() {
	return (
		<div className={styles.faq}>
			<div className={styles.header}>
				<h1>Вопросы-ответы</h1>
			</div>
			<div className={styles.content}>
				<UIAccordion
					title="Что такое Билетопоиск?"
					text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
				/>
				<UIAccordion title="Какой компании принадлежит Билетопоиск?" text="Моей)" />
				<UIAccordion
					title="Как купить билет на Билетопоиск?"
					text="На кнопку тыкаешь и покупаешь"
				/>
				<UIAccordion title="Как оставить отзыв на Билетопоиск?" text="Никак)" />
			</div>
		</div>
	);
}
