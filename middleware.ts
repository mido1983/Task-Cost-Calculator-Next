import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Если это OPTIONS запрос, пропускаем его
  if (request.method === 'OPTIONS') {
    return NextResponse.next();
  }

  // Ваша существующая логика middleware
  // ...
}

export const config = {
  matcher: '/api/:path*',
} 