'use client';
import { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './UIDropdownSelect.module.css';
import dropdownIcon from '../../../../public/dropdown.svg';
import Image from 'next/image';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

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

type DropdownListProps = {
	setOpen: (open: boolean) => void;
	buttonRef: React.RefObject<HTMLButtonElement>;
};

export const UIDropdownSelect: FunctionComponent<UIDropdownSelectProps> = ({
	placeholder,
	title,
}) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(placeholder);

	const buttonRef = useRef<HTMLButtonElement>(null);

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
				ref={buttonRef}
			>
				<span className={styles.dropdownPlaceholder}>{selected}</span>
				<Image src={dropdownIcon} alt="dropdown" />
				{open &&
					createPortal(
						<DropdownList setOpen={setOpen} buttonRef={buttonRef}>
							{categories}
						</DropdownList>,
						document.getElementById('modal-root') as HTMLElement
					)}
			</button>
		</div>
	);
};

const DropdownList: FunctionComponent<PropsWithChildren<DropdownListProps>> = ({
	children,
	setOpen,
	buttonRef,
}) => {
	const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

	useEffect(() => {
		const { top, left } = buttonRef.current?.getBoundingClientRect() as DOMRect;
		const buttonWidth = buttonRef.current?.offsetWidth as number;
		const buttonHeight = buttonRef.current?.offsetHeight as number;
		setPosition({ top: top + buttonHeight + 4, left, width: buttonWidth });
	}, [buttonRef]);

	return (
		<div className={styles.dropdownListWrapper} onClick={(_) => setOpen(false)}>
			{position.width !== 0 && (
				<ul
					className={styles.dropdownList}
					onClick={(e) => e.stopPropagation()}
					style={{ top: position.top, left: position.left, width: position.width }}
				>
					{children}
				</ul>
			)}
		</div>
	);
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
