export function GameSummary() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            什么是 Take Care of Shadow Milk 游戏？
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Take Care of Shadow Milk</strong> 也被称为 <em>Take Care of Your Own Shadow Milk</em>，
            是一个在 <em>Scratch平台</em> 上开发的虚拟宠物风格游戏。它简单但超级上瘾。
            在这个由 <strong>GPE_sb3</strong> 制作的粉丝自制 <em>Scratch游戏</em> 中，
            你可以与来自 <strong>Cookie Run: Kingdom</strong> 的 <strong>Shadow Milk Cookie</strong> 一起玩耍。
            有趣的是？你负责决定他的命运...而且没有任何规则。
          </p>
        </div>

        {/* 游戏特色表格 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            游戏特色一览
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">特色</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">详情</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">游戏类型</td>
                  <td className="py-3 px-4 text-gray-600">Scratch上的沙盒"宠物模拟"风格</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">创作者</td>
                  <td className="py-3 px-4 text-gray-600"><strong>GPE_sb3</strong></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">主要角色</td>
                  <td className="py-3 px-4 text-gray-600">
                    来自 <strong><em>Cookie Run: Kingdom</em></strong> 的 <strong>Shadow Milk Cookie</strong>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">游戏玩法</td>
                  <td className="py-3 px-4 text-gray-600">
                    基于房间的互动：喂食、洗澡、玩耍或恶作剧角色
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">状态指标</td>
                  <td className="py-3 px-4 text-gray-600">能量、健康、饥饿、卫生图标</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">为什么流行</td>
                  <td className="py-3 px-4 text-gray-600">没有规则 + 混乱 = 病毒式TikTok迷因素材！</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 游戏玩法概述 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              游戏玩法概述
            </h3>
            <p className="text-gray-600 mb-6">
              <strong>Take Care of Shadow Milk游戏</strong> 允许玩家以各种方式与
              <strong>Your Own Shadow Milk Cookie</strong> 互动，
              融合了养育和恶作剧元素。你可以使用不同的工具喂食、照顾甚至"折磨"角色，
              没有严格的规则或后果，提供了黑暗幽默和创意自由的混合。
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                想要喂食 <strong>你自己的Shadow Milk</strong>，照顾他，让他开心？去做吧。
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                想要恶作剧、捉弄他，或者制造一点混乱？这也行。
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                有趣的是，你决定故事如何发展。
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">如何游戏？</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🏠</span>
                在卧室、厨房或浴室等不同房间之间移动。
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                拖放食物、物品或随机工具，看看 <strong>Your Own Shadow Milk Cookie</strong> 如何反应。
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📊</span>
                密切关注他的饥饿、能量、健康和卫生条。
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🗑️</span>
                将不需要的东西拖到垃圾桶里扔掉。
              </li>
            </ul>
            <p className="text-gray-600 mt-4 font-medium">
              就是这样！没有任务，没有游戏结束画面——只有无尽的实验。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 