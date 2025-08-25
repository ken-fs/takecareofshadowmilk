import { useLanguage } from '@/contexts/LanguageContext';

export function FeaturedGames() {
  const { t } = useLanguage();
  
  const featuredGames = [
    {
      id: 'pou-online',
      name: t('footer.pouOnline'),
      rating: 5,
      image: '🎮',
      description: t('home.featuredGames.games.pouOnline.description')
    },
    {
      id: 'my-dogy',
      name: t('footer.myDogy'),
      rating: 5,
      image: '🐕',
      description: t('home.featuredGames.games.myDogy.description')
    },
    {
      id: 'pet-salon',
      name: t('footer.petSalon'),
      rating: 5,
      image: '✂️',
      description: t('home.featuredGames.games.petSalon.description')
    },
    {
      id: 'pet-salon-2',
      name: t('footer.petSalon') + ' 2',
      rating: 5,
      image: '🎨',
      description: t('home.featuredGames.games.petSalon2.description')
    },
    {
      id: 'my-pet-care',
      name: t('footer.myPetCare'),
      rating: 5,
      image: '🏥',
      description: t('home.featuredGames.games.myPetCare.description')
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('home.featuredGames.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.featuredGames.subtitle')}
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
                {t('home.featuredGames.playNow')}
              </button>
            </div>
          ))}
        </div>

        {/* 新游戏部分 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('home.featuredGames.newGames')}</h3>
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
                  {t('home.featuredGames.newGames')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 开始游戏CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('home.featuredGames.startGameCTA')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('home.featuredGames.ctaDescription')}
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              {t('home.featuredGames.startGameButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 