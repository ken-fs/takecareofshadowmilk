import Link from 'next/link';

export function GameHero() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Take Care of Shadow Milk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            欢迎来到 <strong>takecareofshadowmilk.org</strong>，在这里你可以免费玩流行的Scratch游戏
            "Take Care of Your Own Shadow Milk"，就在你的浏览器中。无需下载，无需注册——只需点击即可开始游戏！
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/game" className="btn-primary text-lg px-8 py-4">
              立即开始游戏
            </Link>
            <button className="btn-secondary text-lg px-8 py-4">
              了解更多
            </button>
          </div>
        </div>

        {/* 游戏特色标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            ⭐ 4.5 评分
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🎮 Scratch游戏
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            🏠 模拟游戏
          </span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            😊 休闲游戏
          </span>
        </div>

        {/* 游戏预览图片 */}
        <div className="relative animate-fade-in-scale">
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-6xl mb-4">🍪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Shadow Milk Cookie
              </h3>
              <p className="text-gray-600">
                来自 Cookie Run: Kingdom 的可爱角色，现在由你来照顾！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 