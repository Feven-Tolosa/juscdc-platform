import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vcrftihvpsuindrbtshm.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      { protocol: 'https', hostname: '**' },
    ],
  },
}

export default nextConfig
