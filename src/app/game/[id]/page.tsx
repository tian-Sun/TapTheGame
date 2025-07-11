import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import GameSection from '@/components/GameSection';
import GameRating from '@/components/GameRating';
// import SocialShare from '@/components/SocialShare'; // Temporarily hide share functionality
import Footer from '@/components/Footer';
import { games, type Game } from '@/lib/games';
import GamePlayer from './GamePlayer';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return games.map((game) => ({
    id: game.id,
  }));
}

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

  // Use html5Url from game object first, fallback to default GamePix URL
  const gameUrl = game.html5Url || `https://www.gamepix.com${game.href}`;

  // Get related games recommendation
  const relatedGames = games
    .filter(g => g.id !== game.id && (
      g.category === game.category ||
      g.tags.some(tag => game.tags.includes(tag))
    ))
    .slice(0, 8);

  // Game description data
  const gameDescriptions: Record<string, {
    description: string;
    howToPlay: string[];
    controls: string[];
    tips: string[];
    videos?: Array<{
      id: string;
      title: string;
      description: string;
    }>;
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
    },
    'ooo-demo': {
      description: 'Öoo Demo is a charming bomb caterpillar puzzle platformer where you control a cute caterpillar that uses bombs to solve puzzles and navigate through levels. Think strategically about bomb placement and timing to create paths, destroy obstacles, and reach your goals. This demo offers 2-3 hours of brain-teasing gameplay that emphasizes puzzle-solving over action.',
      howToPlay: [
        'Control the caterpillar character through various levels',
        'Place bombs strategically to create new paths',
        'Use bomb explosions to push the caterpillar to new locations',
        'Think carefully about timing and positioning',
        'Solve environmental puzzles to progress',
        'Discover hidden paths and secret areas'
      ],
      controls: [
        'Arrow Keys or WASD - Move caterpillar',
        'Space - Place bomb',
        'Mouse - Navigate menus',
        'R - Restart level',
        'ESC - Pause menu'
      ],
      tips: [
        'Plan your bomb placement before acting',
        'Experiment with different bomb positions',
        'Use explosions to reach higher platforms',
        'Look for hidden passages and secrets',
        'Take your time - this is a thinking game',
        'Try multiple approaches to each puzzle'
      ]
    },
    'peggys-post': {
      description: "Peggy's Post is a cozy lighthouse post office simulation game where you take on the role of lightkeeper and postmaster. Sort mail, assign postage, and load parcels onto delivery vehicles in this relaxing management experience. Often described as a 'chill version of Papers Please', it offers the same rule-checking satisfaction without the time pressure stress.",
      howToPlay: [
        'Start with 7-Day mode to learn mechanics gradually',
        'Sort incoming mail and packages by destination',
        'Weigh parcels and assign correct postage stamps',
        'Check shipping rules and regulations carefully',
        'Load packages onto the appropriate delivery vehicles',
        'Manage your lighthouse post office efficiently'
      ],
      controls: [
        'Left Click - Hold and move items',
        'Right Click or R - Rotate/use held item',
        'Tab - Toggle shipping inventory/mistake preview',
        'Left Shift - Preserve item layering',
        'Left Ctrl - Push item to back layer',
        'W/E - Flip through shipping blueprints',
        'Q - Toggle storage (when unlocked)',
        'D - Next customer',
        'A - End day'
      ],
      tips: [
        'Take your time - there are no strict time limits',
        'Read the rulebook carefully for shipping guidelines',
        'Use the mistake preview to check your work',
        'Explore hidden features by clicking around',
        'Try Endless mode after mastering 7-Day mode',
        'Pay attention to package weights and destinations',
        'Use storage efficiently to manage workflow'
      ]
    },
    'work-life-balance': {
      description: "Work-Life Balance is a fast-paced multitasking game where you juggle two jobs and daily life tasks simultaneously. In just 60 seconds per day, you must complete both work tasks (Accountant and Editor roles) and life tasks (Dancing Class and Lawn Mowing) across 4 demanding days. This lightweight casual game collection offers quick, easy-to-learn gameplay perfect for short breaks and relaxing challenges.",
      howToPlay: [
        'Complete 4 days of multitasking challenges',
        'Each day lasts 60 seconds - manage your time wisely',
        'Handle one work task and one life task simultaneously',
        'Work as an Accountant: calculate total assets from given numbers',
        'Work as an Editor: spot typos among four words',
        'Attend Dancing Class: follow teacher\'s hand movements',
        'Do Lawn Mowing: steer the mower to cut as much grass as possible',
        'Maximize your score by balancing both task types'
      ],
      controls: [
        'Mouse - Click to interact with all elements',
        'Touch - Tap to interact (mobile friendly)',
        'Left/Right Hand - Follow dance instructions',
        'Steering - Control lawn mower direction',
        'Multiple Choice - Select correct answers'
      ],
      tips: [
        'Life tasks earn you base points',
        'Work tasks provide score multipliers',
        'Balance focus between both task types',
        'Practice makes perfect - games are quick to restart',
        'Aim for the developer\'s high score of 30,599',
        'Don\'t panic - stay calm under the 60-second pressure',
        'Each day gets progressively more challenging'
      ]
    },
    'morse': {
      description: "MORSE is a minimalist yet highly creative strategy game inspired by WWI telegraph communication systems. You'll use just two buttons—simulating Morse code dots and dashes—to send artillery commands and repel the German fleet's midnight assault. Navigate letter-based coordinate grids using the lost language of Morse Code to illuminate enemy positions and rain down artillery shells. Can you change the world with the push of a button?",
      howToPlay: [
        'Identify enemy ships hidden under letter coordinates on the grid',
        'Input target coordinates using Morse code (dots and dashes)',
        'Use short taps for dots (.) and long holds for dashes (-)',
        'Fire artillery shells to illuminate and damage enemy vessels',
        'Manage your ammunition wisely - shells auto-replenish slowly',
        'Deploy sea mines to block advancing enemy ships',
        'Choose upgrades between waves to enhance your arsenal',
        'Survive until dawn by controlling the battlefield strategically'
      ],
      controls: [
        'Click/Tap - Input Morse code (short for dot, long for dash)',
        'Spacebar - Alternative Morse input button',
        'Second Button - Confirm letter and fire artillery',
        'Help Sheet - View Morse code reference table',
        'Mouse - Navigate menus and interface',
        'ESC - Pause game (if available)'
      ],
      tips: [
        'Start with basic letters: E (.), T (-), A (.-), then expand gradually',
        'Prioritize center area attacks for maximum damage and reconnaissance',
        'Hit ship centers to permanently reveal them in the darkness',
        'Use mines effectively to conserve artillery ammunition',
        'Balance reconnaissance upgrades vs. offensive firepower',
        'Don\'t waste shots - wait for key tactical moments',
        'Learn the rhythm: each wave uses isogram words for coordinates',
        'Practice Morse patterns - muscle memory is crucial for survival'
      ],
      videos: [
        {
          id: 'H49PBxdMlLY',
          title: 'MORSE Gameplay Trailer',
          description: 'Watch the official gameplay trailer showcasing the unique Morse code mechanics and WWI naval warfare.'
        },
        {
          id: 'ZfP5D6UTV48',
          title: 'Build Your Own Telegraph Controller',
          description: 'Learn how to create a custom telegraph controller for an authentic MORSE gaming experience.'
        },
        {
          id: 'zDgqka4rjJE',
          title: 'MORSE Expo Trailer',
          description: 'See MORSE in action at gaming exhibitions with custom hardware controllers and live gameplay.'
        }
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
              {/* Share functionality temporarily hidden, will be enabled after full development */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        {/* Game Player */}
        <div className="mb-8">
          <GamePlayer game={game} gameUrl={gameUrl} />
        </div>

        {/* Game Information Area - Enhanced Design for MORSE */}
        {game.id === 'morse' ? (
          // Special enhanced layout for MORSE game
          <div className="space-y-8 mb-12">
            {/* Hero Quote Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-8 text-center">
              <blockquote className="text-2xl font-bold text-foreground mb-2">
                "Change the world with the push of a button."
              </blockquote>
              <p className="text-muted-foreground">
                Experience the lost art of telegraphy in this WWI-inspired strategy game
              </p>
            </div>

            {/* Game Overview */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🧭</span>
                <h2 className="text-2xl font-bold text-foreground">Game Overview</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    MORSE is a minimalist yet highly creative strategy game inspired by WWI telegraph communication systems. 
                    You'll use just two buttons—simulating Morse code dots and dashes—to send artillery commands and repel 
                    the German fleet's midnight assault.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">HTML5 / Steam Platform</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">Keyboard, mouse, gamepad compatible</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">Supports cooperative play</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">Custom USB telegraph controllers supported</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <span className="text-yellow-500 mr-2">🏆</span>
                      Awards & Recognition
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>🏅 Tokyo Game Show (TGS) Experimental Design Award</div>
                      <div>🏅 Busan BIC Indie Connect Excellence in Innovation</div>
                      <div>🎮 Indiecade Official Selection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls & Core Gameplay */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">🕹️</span>
                  <h2 className="text-xl font-bold text-foreground">Controls</h2>
                </div>
                <div className="space-y-4">
                  {gameInfo.controls.map((control, index) => (
                    <div key={`control-${index}`} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{control}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    ⚠️ <strong>Beginner Tip:</strong> Start with basic letters like E (.), T (-), A (.-), then gradually master more characters.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">📦</span>
                  <h2 className="text-xl font-bold text-foreground">Core Gameplay</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">🔍 Step-by-Step Process:</h3>
                    <ol className="text-sm text-muted-foreground space-y-2">
                      <li>1. <strong>Identify target position:</strong> Enemy ships hide under letter coordinates</li>
                      <li>2. <strong>Input Morse code:</strong> Use dots and dashes to spell coordinates</li>
                      <li>3. <strong>Fire artillery:</strong> Illuminate and damage enemy vessels</li>
                      <li>4. <strong>Manage ammunition:</strong> Shells auto-replenish slowly</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Play */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🎯</span>
                <h2 className="text-2xl font-bold text-foreground">How to Play</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {gameInfo.howToPlay.slice(0, 4).map((step, index) => (
                    <div key={`step-${index}`} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {gameInfo.howToPlay.slice(4).map((step, index) => (
                    <div key={`step-${index + 4}`} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg">
                      <span className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 5}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactical Essentials */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🔥</span>
                <h2 className="text-2xl font-bold text-foreground">Tactical Essentials</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="text-lg mr-2">🌘</span>
                    Darkness Strategy
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Ships start hidden in darkness</li>
                    <li>• First strike illuminates area</li>
                    <li>• Center hits reveal permanently</li>
                  </ul>
                </div>
                <div className="bg-muted/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="text-lg mr-2">🚢</span>
                    Enemy Patterns
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Waves use isogram words</li>
                    <li>• Difficulty increases gradually</li>
                    <li>• New ship types appear</li>
                  </ul>
                </div>
                <div className="bg-muted/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="text-lg mr-2">💣</span>
                    Mine System
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Deploy strategic blockades</li>
                    <li>• Upgrade for timed detonators</li>
                    <li>• Early warning capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">💡</span>
                <h2 className="text-2xl font-bold text-foreground">Pro Tips & Strategy Guide</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">🎯 Combat Strategy</h3>
                  <div className="space-y-3">
                    {gameInfo.tips.slice(0, 4).map((tip, index) => (
                      <div key={`tip-${index}`} className="flex items-start space-x-3 p-3 bg-blue-500/10 rounded-lg">
                        <span className="text-blue-500 flex-shrink-0">•</span>
                        <span className="text-sm text-muted-foreground">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">🧠 Advanced Techniques</h3>
                  <div className="space-y-3">
                    {gameInfo.tips.slice(4).map((tip, index) => (
                      <div key={`tip-${index + 4}`} className="flex items-start space-x-3 p-3 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 flex-shrink-0">•</span>
                        <span className="text-sm text-muted-foreground">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Player Reviews */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">💬</span>
                <h2 className="text-2xl font-bold text-foreground">Player Experience Reviews</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🎧</span>
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Simple yet tension-filled, minimalist graphics paired with subtle music create an atmosphere of both anxiety and calm."
                  </p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">💡</span>
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Truly makes 'control scheme' the core of gameplay."
                  </p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🥰</span>
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Had zero interest in this theme initially, but couldn't stop playing once I started."
                  </p>
                </div>
              </div>
            </div>

            {/* Game Tags */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <span className="text-primary mr-2">🏷️</span>
                Game Tags
              </h2>
              <div className="flex flex-wrap gap-3">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary border border-primary/30 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Original layout for other games
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
        )}

        {/* Game Videos - Only show for games that have videos */}
        {gameInfo.videos && gameInfo.videos.length > 0 && (
          <div className="mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-2">🎥</span>
                Game Videos
              </h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {gameInfo.videos.map((video, index) => (
                  <div key={video.id} className="space-y-3">
                    <div className="relative w-full pt-[56.25%] bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-sm">{video.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
