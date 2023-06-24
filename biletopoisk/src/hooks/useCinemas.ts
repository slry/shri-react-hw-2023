import { Cinema } from '@/contexts/CinemasContext';
import { useEffect, useState } from 'react';

export const useCinemas = () => {
	const [cinemas, setCinemas] = useState<Cinema[]>([]);

	const fetchCinemas = async () => {
		const cinemas: Cinema[] = await fetch('/api/cinemas').then((res) => res.json());
		return cinemas;
	};

	useEffect(() => {
		fetchCinemas().then((cinemas) => setCinemas(cinemas));
	}, []);

	return { cinemas };
};
