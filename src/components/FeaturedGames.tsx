export function FeaturedGames() {
  const featuredGames = [
    {
      id: 'pou-online',
      name: 'Pou Online',
      rating: 5,
      image: '🎮',
      description: '经典的虚拟宠物游戏'
    },
    {
      id: 'my-dogy',
      name: 'My DOGY Virtual Pet',
      rating: 5,
      image: '🐕',
      description: '可爱的狗狗虚拟宠物'
    },
    {
      id: 'pet-salon',
      name: 'Pet Salon',
      rating: 5,
      image: '✂️',
      description: '宠物美容沙龙游戏'
    },
    {
      id: 'pet-salon-2',
      name: 'Pet Salon 2',
      rating: 5,
      image: '🎨',
      description: '宠物美容沙龙续作'
    },
    {
      id: 'my-pet-care',
      name: 'My Pet Care Salon',
      rating: 5,
      image: '🏥',
      description: '宠物护理沙龙'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            特色游戏
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            除了 Take Care of Shadow Milk，我们还提供其他精彩的虚拟宠物和休闲游戏
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">{game.image}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{game.name}</h3>
              <div className="flex justify-center items-center mb-2">
                {[...Array(game.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">{game.description}</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">
                游戏
              </button>
            </div>
          ))}
        </div>

        {/* 新游戏部分 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">新游戏</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredGames.slice(0, 4).map((game) => (
              <div key={`new-${game.id}`} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 text-center border-2 border-green-200">
                <div className="text-3xl mb-2">{game.image}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{game.name}</h4>
                <div className="flex justify-center items-center mb-2">
                  {[...Array(game.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">
                  新游戏
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 开始游戏CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              现在就开始玩 Take Care of Your Own Shadow Milk
            </h3>
            <p className="text-lg mb-6 opacity-90">
              你不需要 <em>Scratch</em> 或 <em>TikTok</em> 来尝试。我们这里有完整的游戏。
              只需点击开始，看看你会成为什么样的 <strong>Shadow Milk</strong> 照顾者——
              甜蜜和关怀，还是完全疯狂。
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              立即开始游戏
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 