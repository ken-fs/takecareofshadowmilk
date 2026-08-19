# Take Care of Shadow Milk

面向欧美用户的免费网页游戏站，围绕 Cookie Run: Kingdom 的 Shadow Milk Cookie 角色。首页内嵌 Scratch 上的原版游戏，配套攻略、分类和相关游戏页面，做 SEO 流量。

> 粉丝制作的非官方网站，与任何官方组织无关联。

## 🎮 站点内容

- **在线试玩**: 首页内嵌 [Scratch](https://scratch.mit.edu) 原版项目（project `1206876997`），无需下载
- **多语言**: 6 种语言 i18n（英语为主，另含中/德/法/西/葡），客户端 `navigator.language` 自动检测 + localStorage 记忆
- **内容页面**: 首页 / 关于 / 联系 / 游戏列表 / 分类 / 单游戏详情，服务端渲染利于收录
- **SEO**: Metadata + JSON-LD（WebSite / Organization）结构化数据、Open Graph / Twitter Card、动态 OG 图、sitemap / robots
- **变现与分析**: Adsterra 广告（侧栏 300x250）、Google Analytics、Microsoft Clarity

## 🚀 技术栈

- **框架**: Next.js 14（App Router）+ React 18
- **语言**: TypeScript（strict）
- **样式**: Tailwind CSS + 自定义 CSS 动画（无 Framer Motion）
- **状态**: React Hooks + Context（i18n）；游戏状态用 `useReducer`
- **构建**: `output: 'standalone'`，SWC 压缩
- **代码质量**: ESLint + Prettier

## 📁 项目结构

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # 根布局（字体 / SEO / 分析脚本）
│   ├── page.tsx             # 首页（游戏嵌入 + 侧栏）
│   ├── about/ contact/      # 关于 / 联系
│   ├── games/               # 游戏列表（含 games/popular）
│   ├── game/[slug]/         # 单游戏详情
│   ├── category/[category]/ # 分类页
│   ├── sitemap.ts robots.ts opengraph-image.tsx
│   └── globals.css
├── components/              # Header / Sidebar / GameHero / FeaturedGames …
│   ├── AdsterraBanner.tsx   # Adsterra 广告组件（iframe 隔离）
│   └── LanguageSwitcher.tsx
├── contexts/                # LanguageContext（i18n 状态）
├── hooks/                   # useGameState（游戏状态 reducer）
├── i18n/                    # config + locales/（6 语言）
├── data/                    # gamesData / gameDetails / scratchStats …
├── lib/                     # seo.ts / ads.ts / utils.ts / ogImage.tsx
└── types/                   # game.ts
```

## 🛠️ 本地开发

前置：Node.js 18+，pnpm（或 npm / yarn）

```bash
pnpm install      # 安装依赖
pnpm dev          # 开发服务器 http://localhost:3000
pnpm build        # 构建生产版本（产物在 .next/standalone/）
pnpm start        # 启动生产版本
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

## 💰 广告配置

广告 key 集中在 `src/lib/ads.ts`。在 [Adsterra](https://adsterra.com) 后台建 Banner 广告位，GET CODE 里复制 `atOptions.key` 填入对应 slot 即可；key 为空则不渲染。

## 🌐 添加/修改翻译

1. 在 `src/i18n/locales/*.ts` 各语言文件中补上同名 key
2. 组件里 `const { t } = useLanguage()`，用 `t('your.key')` 引用（缺失 key 回退为原始字符串）

## 📱 浏览器支持

Chrome 90+ / Firefox 88+ / Safari 14+ / Edge 90+

## 🙏 致谢

- 原游戏创作者：GPE_sb3
- Cookie Run: Kingdom 开发团队
- Scratch 平台
