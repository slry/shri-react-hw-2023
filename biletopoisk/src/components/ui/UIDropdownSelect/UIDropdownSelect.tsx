'use client';
import { FunctionComponent, PropsWithChildren, useState } from 'react';
import styles from './UIDropdownSelect.module.css';
import dropdownIcon from '../../../../public/dropdown.svg';
import Image from 'next/image';
import classNames from 'classnames';

type UIDropdownSelectProps = {
	placeholder: string;
	title: string;
};

type DropdownListOptionProps = {
	categoryName: string;
	setSelected: (categoryName: string) => void;
	setOpen: (open: boolean) => void;
	isDefault?: boolean;
};

export const UIDropdownSelect: FunctionComponent<UIDropdownSelectProps> = ({
	placeholder,
	title,
}) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(placeholder);

	const categories = Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
		<DropdownListOption
			key={`option-${i}`}
			categoryName={i === 1 ? placeholder : `Категория ${i}`}
			setOpen={setOpen}
			setSelected={setSelected}
			isDefault={i === 1}
		/>
	));
	return (
		<div className={styles.wrap}>
			<span className={styles.title}>{title}</span>
			<button
				className={classNames(
					styles.dropdown,
					open ? styles.opened : '',
					selected !== placeholder ? styles.selected : ''
				)}
				onClick={() => setOpen(!open)}
			>
				<span className={styles.dropdownPlaceholder}>{selected}</span>
				<Image src={dropdownIcon} alt="dropdown" />
				{open && <DropdownList>{categories}</DropdownList>}
			</button>
		</div>
	);
};

const DropdownList: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return <ul className={styles.dropdownList}>{children}</ul>;
};

const DropdownListOption: FunctionComponent<DropdownListOptionProps> = ({
	categoryName,
	setOpen,
	setSelected,
	isDefault,
}) => {
	const handleClick = () => {
		setSelected(categoryName);
		setOpen(false);
	};

	return (
		<li className={styles.dropdownListItem} onClick={handleClick}>
			{isDefault ? 'Не выбран' : categoryName}
		</li>
	);
};
