import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	matcher: [
		{
			source: '/((?!_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
	images: {
		disableStaticImages: true,
		dangerouslyAllowSVG: true,
		minimumCacheTTL: 120,
		remotePatterns: [
			{
				hostname: 's3.isp.evroopt.by',
			},
			{
				hostname: 's3-alpha-sig.figma.com',
			},
			{
				hostname: 'smartapp.evroopt.by',
			},
			{
				hostname: 'img.e-dostavka.by',
			},
		],
	},
	eslint: {
		dirs: ['app', 'utils', 'src'],
	},
};

export default nextConfig;
