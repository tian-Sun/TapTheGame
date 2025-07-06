import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'Sorry, the page you are looking for does not exist. Return to homepage to continue browsing our free HTML5 games.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="text-8xl mb-8">
            <span className="text-primary">🎮</span>
          </div>
          
          {/* Error Code */}
          <div className="text-6xl font-bold text-primary mb-4">
            404
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Page Not Found
          </h1>
          
          {/* Description */}
          <div className="text-muted-foreground mb-8 space-y-4">
            <p className="text-lg">
              Sorry, the page you are looking for does not exist or has been removed.
            </p>
            <p>
              This might be because:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>The page address was entered incorrectly</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>The page has been moved or deleted</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>The link has expired</span>
              </li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn-primary"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/most-played"
              className="btn-secondary"
            >
              🔥 Popular Games
            </Link>
          </div>
          
          {/* Popular Categories */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Popular Game Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                href="/category/io"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">🌐</span>
                <span className="text-sm font-medium">IO Games</span>
              </Link>
              <Link
                href="/category/action"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">⚔️</span>
                <span className="text-sm font-medium">Action Games</span>
              </Link>
              <Link
                href="/category/puzzle"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">🧩</span>
                <span className="text-sm font-medium">Puzzle Games</span>
              </Link>
              <Link
                href="/category/racing"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">🏎️</span>
                <span className="text-sm font-medium">Racing Games</span>
              </Link>
              <Link
                href="/category/casual"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">🎲</span>
                <span className="text-sm font-medium">Casual Games</span>
              </Link>
              <Link
                href="/category/car"
                className="flex items-center space-x-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xl">🚗</span>
                <span className="text-sm font-medium">Car Games</span>
              </Link>
            </div>
          </div>
          
          {/* Search Suggestion */}
          <div className="mt-8 text-muted-foreground">
            <p className="text-sm">
              If you're looking for a specific game, try using the search function at the top of the page
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 