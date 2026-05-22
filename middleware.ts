import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },

        set(name: string, value: string) {
          request.cookies.set({
            name,
            value,
          })

          response = NextResponse.next()

          response.cookies.set({
            name,
            value,
          })
        },

        remove(name: string) {
          request.cookies.set({
            name,
            value: '',
          })

          response = NextResponse.next()

          response.cookies.set({
            name,
            value: '',
          })
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  const protectedRoutes = ['/dashboard', '/profile']

  const adminRoutes = ['/admin']

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route))

  // Not logged in
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Admin protection
  if (isAdminRoute) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/admin/:path*'],
}
