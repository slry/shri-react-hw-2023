type Review = {
	id: string;
	text: string;
	rating: number;
	name: string;
};

export const fetchReviews = async (id: string) => {
	const reviews: Review[] = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		if (res.status !== 200) {
			throw new Error('Error fetching reviews');
		}
		return res.json();
	});

	return reviews;
};
