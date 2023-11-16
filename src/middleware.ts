import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { TOKEN_KEY } from '@/constants/token';

const LOGIN_URL = '/login';
const HOME_URL = '/main';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  if (pathname === LOGIN_URL) {
    if (req.cookies.get(TOKEN_KEY)) {
      url.pathname = HOME_URL;
      return NextResponse.redirect(url);
    }
  } else if (!req.cookies.get(TOKEN_KEY)) {
    url.pathname = LOGIN_URL;
    return NextResponse.redirect(url);
  }
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(HOME_URL, req.url));
  }
}

export const config = {
  matcher: ['/main/:path*', '/login', '/'],
};
