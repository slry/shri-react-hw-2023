'use client';
import {
	FunctionComponent,
	PropsWithChildren,
	createRef,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
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

	let menuRef = useRef<HTMLUListElement>(null);
	let buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		let handler = (e: MouseEvent) => {
			if (
				!menuRef.current?.contains(e.target as Node) &&
				!buttonRef.current?.contains(e.target as Node)
			)
				setOpen(false);
		};

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, []);

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
				{open && <DropdownList ref={menuRef}>{categories}</DropdownList>}
			</button>
		</div>
	);
};

const DropdownList = forwardRef<HTMLUListElement, PropsWithChildren>(({ children }, ref) => (
	<ul className={styles.dropdownList} ref={ref}>
		{children}
	</ul>
));

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
