export function GameFeatures() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么大家都在谈论这个Shadow Milk游戏？
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            这个游戏在 <em>TikTok</em> 上爆红，因为人们喜欢制作 <em>Shadow Milk</em> 疯狂反应的短视频。
            它可爱、黑暗且不可预测——正是这种混乱让它如此有趣，值得与朋友分享。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              病毒式传播的魅力
            </h3>
            <p className="text-gray-600 mb-6">
              它的吸引力在于可爱美学与诡异、恶作剧底调的混合，
              反映了 <strong>Shadow Milk Cookie</strong> 的欺骗性人格。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🔥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">TikTok爆红</h4>
                  <p className="text-sm text-gray-600">短视频平台上的病毒式传播</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🎭</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">双重性格</h4>
                  <p className="text-sm text-gray-600">可爱外表下的黑暗幽默</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">创意自由</h4>
                  <p className="text-sm text-gray-600">没有规则限制的无限可能</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              玩家评价亮点
            </h3>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "早期玩家称赞游戏的古怪魅力和轻松氛围。许多人发现定制功能'可爱得上瘾'..."
                </p>
                <footer className="text-sm text-gray-500">— 游戏评论家</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "提供了养育和异想天开游戏玩法的迷人混合...你可以养育甚至戏弄这个可爱的角色。"
                </p>
                <footer className="text-sm text-gray-500">— 玩家体验</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "一个独特的小项目...角色...乍一看非常可爱...它拥抱了令人不安的二元性。"
                </p>
                <footer className="text-sm text-gray-500">— 游戏分析</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* 游戏特色展示 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">简单易上手</h4>
            <p className="text-gray-600">
              无需复杂操作，拖拽即可游戏，适合所有年龄段的玩家
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">创意无限</h4>
            <p className="text-gray-600">
              没有规则限制，你可以创造任何你想要的游戏体验
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">社交分享</h4>
            <p className="text-gray-600">
              在TikTok等平台上分享你的创意，获得更多关注
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 