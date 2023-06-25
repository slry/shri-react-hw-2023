'use client';
import { UIModal } from '@/components/ui/UIModal';
import { TicketCountContext } from '@/contexts/TicketCountContext';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

export const useRemoveTicketHandler = () => {
	const { setFilmMap } = useContext(TicketCountContext);
	const [openModal, setOpenModal] = useState(false);
	const [modalState, setModalState] = useState<React.ReactNode>(null);

	const handler = (id: string, count: number, inBasket: boolean) => {
		const onClickYes = () => {
			setOpenModal(false);
			setFilmMap((prev) => {
				const newMap = new Map(prev);
				newMap.set(id, 0);
				return newMap;
			});
		};

		const onClickNo = () => {
			setOpenModal(false);
			setFilmMap((prev) => {
				const newMap = new Map(prev);
				newMap.set(id, 1);
				return newMap;
			});
		};

		if (count === 0 && inBasket) {
			setModalState(<UIModal onClickYes={onClickYes} onClickNo={onClickNo} />);
			setOpenModal(true);
		} else {
			setModalState(null);
			setFilmMap((prev) => {
				const newMap = new Map(prev);
				newMap.set(id, count);
				return newMap;
			});
		}
	};

	return {
		openModal,
		portal: createPortal(modalState, document.querySelector('#modal-root')!),
		handler,
	};
};
