import { createContext } from 'react';

export type FilmsContextType = {
	initialFilms: Film[];
	filteredFilms: Film[];
};

export type SetFilteredFilms = React.Dispatch<React.SetStateAction<Film[]>>;

export type Film = {
	id: string;
	title: string;
	posterUrl: string;
	genre: string;
	rating: number;
	description: string;
	releaseYear: string;
	reviews: string[];
	director: string;
};

export const FilmsContext = createContext<FilmsContextType>({
	initialFilms: [],
	filteredFilms: [],
});

export const SetFilmsContext = createContext<SetFilteredFilms>(() => {});
