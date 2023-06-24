'use client';
import Image from 'next/image';
import basket from '../../../public/basket.svg';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useTotalCount } from '@/hooks/useTotalCount';
import classNames from 'classnames';

export const Navbar = () => {
	const count = useTotalCount();

	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<p className={styles.logo}>Билетопоиск</p>
			</Link>
			<Link className={styles.ticketsGroup} href="/basket">
				<span className={classNames(styles.basketCount, count > 0 ? '' : styles.removed)}>
					{count}
				</span>
				<Image src={basket} alt="basket" />
			</Link>
		</nav>
	);
};
