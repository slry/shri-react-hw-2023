'use client';
import { FunctionComponent, useState } from 'react';
import styles from './UIAccordion.module.css';
import dropdownIcon from '../../../../public/dropdown.svg';
import Image from 'next/image';
import classNames from 'classnames';

type UIAccordionProps = {
	title: string;
	text: string;
};

export const UIAccordion: FunctionComponent<UIAccordionProps> = ({ title, text }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles.accordion}>
			<div className={styles.header} onClick={() => setOpen(!open)}>
				<h2>{title}</h2>
				<Image
					src={dropdownIcon}
					alt={'dropdown'}
					width={32}
					height={32}
					className={open ? styles.rotated : ''}
				/>
			</div>
			<p className={classNames(styles.desc, open ? '' : styles.disabled)}>{text}</p>
		</div>
	);
};
