'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import GameFilter from '@/components/GameFilter';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';
import { games, type Game } from '@/lib/games';

export default function HomePage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all available tags
  const availableTags = useMemo(() => {
    const allTags = games.flatMap(game => game.tags);
    return Array.from(new Set(allTags)).sort();
  }, []);

  // Filter games based on search and filters
  const filteredGames = useMemo(() => {
    let filtered = games;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(game => game.category === selectedCategory);
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(game =>
        selectedTags.every(tag => game.tags.includes(tag))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTags]);

  // Section games with filters applied
  const mostPlayedGames = filteredGames.filter(game => game.popular).slice(0, 8);
  const recommendedGames = filteredGames.filter(game => game.featured).slice(0, 8);
  const trendingGames = filteredGames.filter(game => game.trending).slice(0, 8);
  const ioGames = filteredGames.filter(game => game.category === 'io').slice(0, 8);
  const casualGames = filteredGames.filter(game => game.category === 'casual').slice(0, 8);
  const actionGames = filteredGames.filter(game => game.category === 'action').slice(0, 8);
  const carGames = filteredGames.filter(game => game.category === 'car' || game.tags.includes('car')).slice(0, 8);
  const puzzleGames = filteredGames.filter(game => game.category === 'puzzle').slice(0, 8);
  const sportsGames = filteredGames.filter(game => game.category === 'sports').slice(0, 8);
  const kidsGames = filteredGames.filter(game => game.category === 'kids').slice(0, 8);

  // Event handlers
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Search */}
        <section className="hero-gradient py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Free HTML5 Mini Games Aggregator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              TapTheGame Web is your gateway to the best <strong>HTML5 mini games</strong>, offering instant access to 200+ games. No downloads, no installs—just pick a game and play instantly on any device, anywhere!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search games, categories, or tags..."
                className="mb-4"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`btn-secondary flex items-center space-x-2 ${showFilters ? 'bg-secondary/20' : ''}`}
              >
                <span>🔍</span>
                <span>Filter</span>
                {hasActiveFilters && <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full text-xs">!</span>}
              </button>
              <a href="#most-played" className="btn-primary">
                🔥 Most Popular Games
              </a>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        {showFilters && (
          <section className="py-8 bg-muted/20 border-b border-border">
            <div className="container-custom">
              <GameFilter
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                availableTags={availableTags}
              />
            </div>
          </section>
        )}

        {/* Search Results */}
        {hasActiveFilters && (
          <section className="py-8 bg-background">
            <div className="container-custom">
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title">
                  🔍 Search Results
                  <span className="text-lg text-muted-foreground ml-2">
                    (Found {filteredGames.length} games)
                  </span>
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedTags([]);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredGames.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.id}`}
                    className="game-card group cursor-pointer animate-fade-in"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="game-card-image"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cyber-glow">
                          View Details
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {game.title}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {game.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="game-tag">
                            {tag}
                          </span>
                        ))}
                        {game.tags.length > 3 && (
                          <span className="game-tag">
                            +{game.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {game.popular && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md transition-all duration-200"
                                  style={{
                                    background: 'rgba(255, 159, 28, 0.15)',
                                    color: 'hsl(35, 100%, 55%)',
                                    border: '1px solid rgba(255, 159, 28, 0.3)'
                                  }}>
                              🔥 Popular
                            </span>
                          )}
                          {game.trending && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md transition-all duration-200"
                                  style={{
                                    background: 'rgba(91, 88, 255, 0.15)',
                                    color: 'hsl(242, 100%, 67%)',
                                    border: '1px solid rgba(91, 88, 255, 0.3)'
                                  }}>
                              📈 Trending
                            </span>
                          )}
                          {game.featured && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md transition-all duration-200"
                                  style={{
                                    background: 'rgba(200, 100, 255, 0.15)',
                                    color: 'hsl(290, 100%, 70%)',
                                    border: '1px solid rgba(200, 100, 255, 0.3)'
                                  }}>
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredGames.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    No games found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedTags([]);
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Game Sections - only show if no active filters */}
        {!hasActiveFilters && (
          <>
            {/* Most Played Games */}
            <GameSection
              title="🔥 Most Popular Games"
              games={mostPlayedGames}
              showViewMore={true}
              viewMoreHref="/most-played"
              className="bg-background"
            />

            {/* Recommended Games */}
            <GameSection
              title="⭐ Recommended Games"
              games={recommendedGames}
              showViewMore={true}
              viewMoreHref="/recommended"
              className="bg-muted/20"
            />

            {/* Trending Games */}
            <GameSection
              title="📈 Trending Games"
              games={trendingGames}
              showViewMore={true}
              viewMoreHref="/trending"
              className="bg-background"
            />

            {/* IO Games */}
            <GameSection
              title="🌐 IO Games"
              games={ioGames}
              showViewMore={true}
              viewMoreHref="/category/io"
              className="bg-muted/20"
            />

            {/* Casual Games */}
            <GameSection
              title="🎲 Casual Games"
              games={casualGames}
              showViewMore={true}
              viewMoreHref="/category/casual"
              className="bg-background"
            />

            {/* Action Games */}
            <GameSection
              title="⚔️ Action Games"
              games={actionGames}
              showViewMore={true}
              viewMoreHref="/category/action"
              className="bg-muted/20"
            />

            {/* Car Games */}
            <GameSection
              title="🚗 Car Games"
              games={carGames}
              showViewMore={true}
              viewMoreHref="/category/car"
              className="bg-background"
            />

            {/* Puzzle Games */}
            <GameSection
              title="🧩 Puzzle Games"
              games={puzzleGames}
              showViewMore={true}
              viewMoreHref="/category/puzzle"
              className="bg-muted/20"
            />

            {/* Sports Games */}
            <GameSection
              title="⚽ Sports Games"
              games={sportsGames}
              showViewMore={true}
              viewMoreHref="/category/sports"
              className="bg-background"
            />


            {/* Game Selection Description */}
            <section className="py-16 bg-card">
              <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Game Selection</h2>
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Discover amazing HTML5 games that run instantly in your browser. Experience popular multiplayer games like
                        <a href="/game/shell-shockers" className="text-primary hover:underline mx-1">Shell Shockers</a>,
                        <a href="/game/smash-karts" className="text-primary hover:underline mx-1">Smash Karts</a>, and
                        <a href="/game/krunker" className="text-primary hover:underline mx-1">Krunker</a>,
                        or enjoy casual games like
                        <a href="/game/dogeminer" className="text-primary hover:underline mx-1">Dogeminer</a> and
                        <a href="/game/drift-boss" className="text-primary hover:underline mx-1">Drift Boss</a>.
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Our collection covers everything from
                        <a href="/category/io" className="text-primary hover:underline mx-1">IO Games</a> and
                        <a href="/category/racing" className="text-primary hover:underline mx-1">Racing Games</a> to
                        <a href="/category/clicker" className="text-primary hover:underline mx-1">Clicker Games</a> and
                        <a href="/category/car" className="text-primary hover:underline mx-1">Car Games</a>,
                        ensuring that every player can find their perfect game.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
