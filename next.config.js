/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    // optimizeCss: true, // 暂时禁用，避免预渲染问题
    optimizePackageImports: ['@shopify/polaris'],
  },
  
  // 图片优化
  images: {
    domains: ['takecareofshadowmilk.org'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 压缩配置
  compress: true,
  
  // 启用SWC压缩
  swcMinify: true,
  
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/play',
        destination: '/game',
        permanent: true,
      },
    ];
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            // The game is a cross-origin iframe, so frame-src has to allow it.
            // 'unsafe-inline'/'unsafe-eval' are required by Next's inline
            // bootstrap and the Scratch player; tighten with nonces only if you
            // are prepared to test the embed afterwards.
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.clarity.ms",
              "frame-src 'self' https://takecareofshadowmilk.org",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=()',
          },
        ],
      },
      {
        source: '/game',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },
  
  // 环境变量
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 构建输出
  output: 'standalone',
  
  // 启用严格模式
  reactStrictMode: true,
  
  // 启用ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // 启用类型检查
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 