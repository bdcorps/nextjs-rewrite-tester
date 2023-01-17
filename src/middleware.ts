import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log(pathname)
  if (pathname.startsWith('/services')) {
    return NextResponse.rewrite(new URL('https://betterlegal.com/services', request.url))
  }

  // if (pathname.startsWith("/_next")) {
  //   console.log(pathname)
  //   return NextResponse.rewrite(new URL(`https://betterlegal.com/services/${pathname}`, request.url))
  // }
  return NextResponse.next()
}
