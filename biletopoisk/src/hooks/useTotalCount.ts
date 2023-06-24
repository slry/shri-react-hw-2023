'use client';
import { TicketCountContext } from '@/contexts/TicketCountContext';
import { useContext, useMemo } from 'react';

export const useTotalCount = () => {
	const { filmMap } = useContext(TicketCountContext);

	const count = useMemo(() => {
		let c = 0;
		filmMap.forEach((value) => {
			c += value;
		});
		return c;
	}, [filmMap]);

	return count;
};
