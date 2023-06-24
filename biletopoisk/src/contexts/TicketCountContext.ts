import { createContext } from 'react';

type TicketCountContextType = {
	filmMap: Map<string, number>;
	setFilmMap: React.Dispatch<React.SetStateAction<Map<string, number>>>;
};

export const TicketCountContext = createContext<TicketCountContextType>({
	filmMap: new Map<string, number>(),
	setFilmMap: () => {},
});
