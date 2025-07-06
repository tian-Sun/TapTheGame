'use client';

import { type Game } from '@/lib/games';

interface GamePlayerProps {
  game: Game;
  gameUrl: string;
}

// Define browser-specific fullscreen API interfaces
interface WebkitHTMLElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void> | void;
}

interface MozHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => Promise<void> | void;
}

interface MSHTMLElement extends HTMLElement {
  msRequestFullscreen?: () => Promise<void> | void;
}

export default function GamePlayer({ game, gameUrl }: GamePlayerProps) {
  const handleOpenInNewTab = () => {
    window.open(gameUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFullscreen = async () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (!iframe) {
      console.log('Iframe not found, opening in new tab');
      handleOpenInNewTab();
      return;
    }

    try {
      // Modern browsers
      if (iframe.requestFullscreen) {
        await iframe.requestFullscreen();
      } 
      // Safari
      else if ((iframe as WebkitHTMLElement).webkitRequestFullscreen) {
        const fn = (iframe as WebkitHTMLElement).webkitRequestFullscreen;
        if (fn) await fn();
      } 
      // Firefox
      else if ((iframe as MozHTMLElement).mozRequestFullScreen) {
        const fn = (iframe as MozHTMLElement).mozRequestFullScreen;
        if (fn) await fn();
      } 
      // IE/Edge
      else if ((iframe as MSHTMLElement).msRequestFullscreen) {
        const fn = (iframe as MSHTMLElement).msRequestFullscreen;
        if (fn) await fn();
      } 
      // Fallback
      else {
        throw new Error('Fullscreen not supported');
      }
    } catch (error) {
      console.log('Fullscreen failed:', error);
      // If fullscreen fails, open game in new tab
      handleOpenInNewTab();
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden cyber-glow">
      <div className="relative bg-black" style={{ aspectRatio: '16/9', minHeight: '500px', maxHeight: '70vh' }}>
        <iframe
          id="game-iframe"
          src={gameUrl}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          allowFullScreen
          allow="fullscreen"
          title={`Play ${game.title}`}
        />

        {/* Game loading status */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="flex items-center space-x-2 text-white text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Game Loaded</span>
          </div>
        </div>

        {/* Control buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleOpenInNewTab}
            className="p-2 bg-black/70 hover:bg-black/90 text-white rounded-lg transition-all duration-200 cyber-glow"
            title="Open in New Tab"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
          <button
            onClick={handleFullscreen}
            className="p-2 bg-black/70 hover:bg-black/90 text-white rounded-lg transition-all duration-200 cyber-glow"
            title="Fullscreen Game"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Game info overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-2 flex-wrap">
                {game.popular && (
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                    🔥 Popular
                  </span>
                )}
                {game.trending && (
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                    📈 Trending
                  </span>
                )}
                {game.featured && (
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleFullscreen}
                  className="btn-primary text-sm px-4 py-2 flex items-center space-x-2"
                >
                  <span>⛶</span>
                  <span>Fullscreen</span>
                </button>
                <button
                  onClick={handleOpenInNewTab}
                  className="btn-secondary text-sm px-4 py-2 flex items-center space-x-2"
                >
                  <span>🚀</span>
                  <span>New Tab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
