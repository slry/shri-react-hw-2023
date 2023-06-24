import { createContext } from 'react';

export type Cinema = {
	id: number;
	name: string;
	movieIds: string[];
};

export const CinemasContext = createContext<Cinema[]>([]);
