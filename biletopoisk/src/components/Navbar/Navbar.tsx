import Image from 'next/image';
import basket from '../../../public/basket.svg';
import styles from './Navbar.module.css';

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<p className={styles.logo}>Билетопоиск</p>
			<Image src={basket} alt="basket" />
		</nav>
	);
};
