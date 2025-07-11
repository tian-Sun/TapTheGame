'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import { games, gameCategories, type Game } from '@/lib/games';

export default function TrendingPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get trending games
  const trendingGames = useMemo(() => {
    return games.filter(game => game.trending || game.featured || game.popular)
      .sort((a, b) => {
        // Prioritize trending games, then featured and popular
        const scoreA = (a.trending ? 4 : 0) + (a.featured ? 2 : 0) + (a.popular ? 1 : 0);
        const scoreB = (b.trending ? 4 : 0) + (b.featured ? 2 : 0) + (b.popular ? 1 : 0);
        return scoreB - scoreA;
      });
  }, []);

  // Get all available tags
  const availableTags = useMemo(() => {
    const allTags = trendingGames.flatMap(game => game.tags);
    return Array.from(new Set(allTags)).sort();
  }, [trendingGames]);

  // Filter games based on search and filters
  const filteredGames = useMemo(() => {
    let filtered = trendingGames;

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
  }, [trendingGames, searchQuery, selectedCategory, selectedTags]);

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
        {/* Hero Section */}
        <section className="hero-gradient py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 flex items-center justify-center">
              <span className="text-6xl mr-4">📈</span>
              Trending Games Now
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover the hottest trending games! These games are rapidly gaining popularity and loved by more and more players. Be the first to experience the next hit and become a trendsetter!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search trending games..."
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
            </div>
          </div>
        </section>

        {/* Filters Section */}
        {showFilters && (
          <section className="py-8 bg-muted/20 border-b border-border">
            <div className="container-custom">
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <span className="text-primary mr-2">🎮</span>
                    Game Categories
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {gameCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50'
                        }`}
                        style={{
                          ...(selectedCategory === category.id
                            ? {
                                boxShadow: '0 0 0 1px rgba(91, 88, 255, 0.3), 0 4px 12px rgba(91, 88, 255, 0.2)'
                              }
                            : {
                                boxShadow: '0 0 0 1px rgba(91, 88, 255, 0.1)'
                              }
                          )
                        }}
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <span className="text-secondary mr-2">🏷️</span>
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.slice(0, 12).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 text-sm rounded-md font-medium transition-all duration-200 ${
                          selectedTags.includes(tag)
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-card border border-border text-muted-foreground hover:text-secondary hover:border-secondary/50'
                        }`}
                        style={{
                          ...(selectedTags.includes(tag)
                            ? {
                                boxShadow: '0 0 0 1px rgba(255, 159, 28, 0.3), 0 2px 8px rgba(255, 159, 28, 0.2)'
                              }
                            : {
                                boxShadow: '0 0 0 1px rgba(91, 88, 255, 0.1)'
                              }
                          )
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <span className="text-accent mr-2">🔍</span>
                      Active Filters
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'all' && (
                        <div className="flex items-center bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-md text-sm">
                          <span className="mr-2">
                            {gameCategories.find(c => c.id === selectedCategory)?.name}
                          </span>
                          <button
                            onClick={() => handleCategoryChange('all')}
                            className="hover:text-primary-foreground transition-colors duration-200"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                      {selectedTags.map((tag) => (
                        <div key={tag} className="flex items-center bg-secondary/20 border border-secondary/30 text-secondary px-3 py-1 rounded-md text-sm">
                          <span className="mr-2">{tag}</span>
                          <button
                            onClick={() => handleTagToggle(tag)}
                            className="hover:text-secondary-foreground transition-colors duration-200"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedTags([]);
                          setSearchQuery('');
                        }}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-200"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Games Grid */}
        <section className="py-8 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title">
                {hasActiveFilters ? '🔍 Filter Results' : '📈 Trending Games'}
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
              {filteredGames.map((game, index) => (
                <div key={game.id} className="relative">
                  {/* Trending indicator */}
                  {!hasActiveFilters && game.trending && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        📈 HOT
                      </div>
                    </div>
                  )}
                  <GameCard
                    game={game}
                    className="animate-fade-in"
                  />
                </div>
              ))}
            </div>

            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No games found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting the search term or filter conditions
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

        {/* Trending Categories */}
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Popular Category Trends</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {gameCategories.filter(c => c.id !== 'all').map((category) => {
                  const categoryTrendingGames = trendingGames.filter(g => g.category === category.id);
                  if (categoryTrendingGames.length === 0) return null;

                  return (
                    <div key={category.id} className="bg-muted/20 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-200">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl">{category.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">{categoryTrendingGames.length}</div>
                      <div className="text-sm text-muted-foreground">Trending Games</div>
                    </div>
                  );
                })}
              </div>
              <p className="text-muted-foreground">
                These categories are currently the most popular, with game numbers and player engagement growing rapidly.
                Keep an eye on these trends to discover new game types you might be interested in!
              </p>
            </div>
          </div>
        </section>

        {/* Trending Stats */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Trending Stats</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {trendingGames.filter(g => g.trending).length}
                  </div>
                  <div className="text-muted-foreground">Trending Now</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {trendingGames.filter(g => g.featured).length}
                  </div>
                  <div className="text-muted-foreground">Editor's Choice</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {trendingGames.filter(g => g.popular).length}
                  </div>
                  <div className="text-muted-foreground">Popular Games</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {Math.round((trendingGames.filter(g => g.trending).length / trendingGames.length) * 100)}%
                  </div>
                  <div className="text-muted-foreground">Growth Rate</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Our algorithm continuously analyzes user behavior and game data to update the trend rankings in real-time.
                New games are constantly being added to the trend list, so keep an eye out for any exciting content!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
