/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    // optimizeCss: true, // 暂时禁用，避免预渲染问题
    optimizePackageImports: ['@shopify/polaris'],
  },

  // 图片优化（静态导出没有图片优化服务器，必须 unoptimized）
  images: {
    unoptimized: true,
    // takecareofshadowmilk.org was removed: it is not our domain and no <img>
    // on the site ever pointed at it. Scratch thumbnails live on
    // cdn2.scratch.mit.edu if they are ever needed.
    domains: ['cdn2.scratch.mit.edu'],
  },

  // 压缩配置
  compress: true,

  // 启用SWC压缩
  swcMinify: true,

  /*
    301 redirects now live in public/_redirects and security headers in
    public/_headers — `output: 'export'` forbids redirects()/headers() here,
    and Cloudflare Workers static assets apply those two files at the edge.
  */

  // 环境变量
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // 静态导出 → ./out，由 wrangler 作为静态资源部署（同 ghostdriver 的模式）
  output: 'export',
  trailingSlash: true,

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
