import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vcrftihvpsuindrbtshm.supabase.co',
      },
    ],
  },
}

export default nextConfig
