# Take Care of Shadow Milk

一个基于React和Next.js的现代化"Take Care of Shadow Milk"游戏网站，完全复制了原网站的功能和设计。

## 🎮 游戏特色

- **虚拟宠物模拟**: 照顾来自Cookie Run: Kingdom的Shadow Milk Cookie
- **房间系统**: 卧室、厨房、浴室、游戏室等不同场景
- **物品系统**: 食物、玩具、工具、家具等各类物品
- **状态管理**: 能量、健康、饥饿、卫生等属性系统
- **实时游戏**: 状态值会随时间自动变化

## 🚀 技术栈

- **前端框架**: Next.js 14 + React 18
- **开发语言**: TypeScript
- **样式系统**: Tailwind CSS
- **状态管理**: React Hooks + useReducer
- **动画效果**: Framer Motion
- **代码质量**: ESLint + Prettier

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── game/              # 游戏页面
│       └── page.tsx
├── components/            # React组件
│   ├── GameHero.tsx       # 游戏英雄区
│   ├── GameSummary.tsx    # 游戏摘要
│   ├── GameFeatures.tsx   # 游戏特色
│   ├── FeaturedGames.tsx  # 特色游戏
│   ├── GameInterface.tsx  # 游戏界面
│   ├── GameStats.tsx      # 游戏状态
│   ├── RoomSelector.tsx   # 房间选择器
│   └── Inventory.tsx      # 物品栏
├── hooks/                 # 自定义Hooks
│   └── useGameState.ts    # 游戏状态管理
├── types/                 # TypeScript类型定义
│   └── game.ts
├── data/                  # 游戏数据
│   └── gameData.ts
└── lib/                   # 工具函数
    └── utils.ts
```

## 🛠️ 安装和运行

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产版本

```bash
npm start
# 或
yarn start
```

## 🎯 游戏玩法

1. **开始游戏**: 点击"开始游戏"按钮
2. **选择房间**: 在左侧选择不同的房间
3. **使用物品**: 点击房间中的物品来使用
4. **管理状态**: 关注Shadow Milk的各项属性
5. **收集物品**: 在不同房间中收集各种物品

## 🎨 设计特色

- **响应式设计**: 支持各种设备尺寸
- **现代化UI**: 使用Tailwind CSS构建的美观界面
- **流畅动画**: Framer Motion提供的平滑动画效果
- **直观交互**: 简单易懂的游戏操作
- **中文界面**: 完全中文化的游戏体验

## 🔧 自定义配置

### 添加新物品

在 `src/data/gameData.ts` 中的 `GAME_ITEMS` 数组添加新物品：

```typescript
{
  id: 'new-item',
  name: '新物品',
  type: 'food', // food, toy, tool, furniture
  icon: '🍕',
  effect: { hunger: 25, energy: 10 },
  description: '新物品的描述'
}
```

### 添加新房间

在 `src/data/gameData.ts` 中的 `ROOMS` 数组添加新房间：

```typescript
{
  id: 'new-room',
  name: '新房间',
  description: '新房间的描述',
  background: 'bg-gradient-to-br from-red-100 to-pink-100',
  items: [/* 房间中的物品 */]
}
```

## 📱 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

本项目仅用于学习和演示目的。

## 🙏 致谢

- 原游戏创作者: GPE_sb3
- Cookie Run: Kingdom 开发团队
- Scratch 平台

---

**注意**: 这是一个粉丝制作的非官方网站，与任何官方组织都没有关联。