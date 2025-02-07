import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
	const response = NextResponse.next();

	response.headers.set('c-url', req.url);
	return response;
};

export const config = {
	matcher: '/((?!api|_next/static|_next/image).*)',
};
