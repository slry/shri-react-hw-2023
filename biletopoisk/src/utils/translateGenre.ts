export const translateGenre = (key: string) => {
	switch (key) {
		case 'action':
			return 'Экшн';
		case 'comedy':
			return 'Комедия';
		case 'horror':
			return 'Ужасы';
		case 'fantasy':
			return 'Фэнтези';

		default:
			return 'Жанр не найден';
	}
};
