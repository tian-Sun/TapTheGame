import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import GameSection from '@/components/GameSection';
import GameRating from '@/components/GameRating';
// import SocialShare from '@/components/SocialShare'; // 暂时隐藏分享功能
import Footer from '@/components/Footer';
import { games, type Game } from '@/lib/games';
import GamePlayer from './GamePlayer';

interface GamePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;
  const game = games.find(g => g.id === id);

  if (!game) {
    notFound();
  }

  // 游戏URL映射
  const gameUrls: Record<string, string> = {
    'shell-shockers': 'https://shellshock.io/',
    'smash-karts': 'https://smashkarts.io/',
    'dogeminer': 'https://dogeminer.se/',
    'drift-boss': 'https://driftboss.net/',
    'hole-io': 'https://hole-io.com/',
    'paper-io-2': 'https://paper-io.com/',
    'krunker': 'https://krunker.io/',
    '10x10': 'https://10x10.plus/',
    'default': `https://www.gamepix.com${game.href}`
  };

  const gameUrl = gameUrls[game.id] || gameUrls.default;

  // 获取同类型游戏推荐
  const relatedGames = games
    .filter(g => g.id !== game.id && (
      g.category === game.category ||
      g.tags.some(tag => game.tags.includes(tag))
    ))
    .slice(0, 8);

  // 游戏描述数据
  const gameDescriptions: Record<string, {
    description: string;
    howToPlay: string[];
    controls: string[];
    tips: string[];
  }> = {
    'shell-shockers': {
      description: 'Shell Shockers is a multiplayer FPS game featuring egg characters armed with weapons. Battle in various game modes including team battles, free-for-all, and capture the spatula.',
      howToPlay: [
        'Choose your weapon and character skin',
        'Join a server or create your own',
        'Battle other players in real-time',
        'Collect upgrades and power-ups',
        'Aim for headshots to deal maximum damage'
      ],
      controls: [
        'WASD - Movement',
        'Mouse - Aim and shoot',
        'R - Reload',
        'Shift - Sprint',
        'Space - Jump'
      ],
      tips: [
        'Keep moving to avoid being hit',
        'Use cover effectively',
        'Practice aiming in training mode',
        'Learn the maps for strategic advantage'
      ]
    },
    'smash-karts': {
      description: 'Smash Karts is a 3D multiplayer kart battle game. Battle other players in chaotic battle royale, using various power-ups and weapons!',
      howToPlay: [
        'Drive your kart around the arena',
        'Collect weapons and power-ups',
        'Attack other players to eliminate them',
        'Be the last kart standing to win',
        'Use environmental advantages'
      ],
      controls: [
        'Arrow keys or WASD - Drive',
        'Space - Use weapon/power-up',
        'Mouse - Control camera',
        'Enter - Chat'
      ],
      tips: [
        'Quickly collect power-ups',
        'Use boost pads for speed',
        'Keep moving to avoid attacks',
        'Learn weapon timing'
      ]
    }
  };

  const gameInfo = gameDescriptions[game.id] || {
    description: `${game.title} is an exciting ${game.category} game featuring ${game.tags.join(', ')} gameplay. Experience thrilling action and entertainment in this popular online game.`,
    howToPlay: [
      'Follow the on-screen instructions',
      'Use mouse and keyboard to control',
      'Complete objectives to progress',
      'Enjoy the game experience!'
    ],
    controls: [
      'Mouse - Navigate and interact',
      'Keyboard - Various controls',
      'Follow in-game prompts'
    ],
    tips: [
      'Take time to learn the game',
      'Practice makes perfect',
      'Try different strategies',
      'Enjoy the gaming experience!'
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Navigation Bar */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="p-2 bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Game List</span>
              </Link>

              <div className="flex items-center space-x-3">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-xl font-bold text-foreground">{game.title}</h1>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="capitalize">{game.category}</span>
                    <span>•</span>
                    <span>{game.tags.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* <SocialShare game={game} /> */}
              {/* 分享功能暂时隐藏，待完全开发后再启用 */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        {/* Game Player */}
        <div className="mb-8">
          <GamePlayer game={game} gameUrl={gameUrl} />
        </div>

        {/* Game Information Area */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Game Tags */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-primary mr-2">🏷️</span>
                Game Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-accent mr-2">⌨️</span>
                Controls
              </h2>
              <div className="space-y-2">
                {gameInfo.controls.map((control, index) => (
                  <div key={`control-${index}-${control.slice(0, 10)}`} className="bg-muted/30 p-2 rounded-md">
                    <span className="text-xs text-muted-foreground">{control}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle and Right Columns: Game Introduction and Gameplay */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game Description */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-primary mr-2">📖</span>
                Game Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {gameInfo.description}
              </p>
            </div>

            {/* How to Play */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-secondary mr-2">🎯</span>
                How to Play
              </h2>
              <ul className="space-y-3">
                {gameInfo.howToPlay.map((step, index) => (
                  <li key={`step-${index}-${step.slice(0, 10)}`} className="flex items-start space-x-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-secondary mr-2">💡</span>
                Tips
              </h2>
              <div className="space-y-2">
                {gameInfo.tips.map((tip, index) => (
                  <div key={`tip-${index}-${tip.slice(0, 10)}`} className="flex items-start space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Game Rating and Reviews */}
        <div className="mb-12">
          <GameRating game={game} />
        </div>

        {/* Related Games Recommendation */}
        {relatedGames.length > 0 && (
          <GameSection
            title={`🎮 More ${game.category} Games`}
            games={relatedGames}
            showViewMore={false}
            className="bg-background"
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
