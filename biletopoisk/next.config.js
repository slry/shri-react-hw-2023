/** @type {import('next').NextConfig} */

module.exports = {
	rewrites: async () => [
		{
			source: '/api/:path*',
			destination: 'http://localhost:3001/api/:path*',
		},
	],

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
				port: '',
			},
		],
	},
};
