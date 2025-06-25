'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import { games, gameCategories, type Game } from '@/lib/games';

export default function RecommendedPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get recommended games (featured games)
  const recommendedGames = useMemo(() => {
    return games.filter(game => game.featured)
      .sort((a, b) => {
        // Prioritize featured games, then popular and trending
        const scoreA = (a.featured ? 4 : 0) + (a.popular ? 2 : 0) + (a.trending ? 1 : 0);
        const scoreB = (b.featured ? 4 : 0) + (b.popular ? 2 : 0) + (b.trending ? 1 : 0);
        return scoreB - scoreA;
      });
  }, []);

  // Get all available tags
  const availableTags = useMemo(() => {
    const allTags = recommendedGames.flatMap(game => game.tags);
    return Array.from(new Set(allTags)).sort();
  }, [recommendedGames]);

  // Filter games based on search and filters
  const filteredGames = useMemo(() => {
    let filtered = recommendedGames;

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
  }, [recommendedGames, searchQuery, selectedCategory, selectedTags]);

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

  // Get category stats
  const categoryStats = useMemo(() => {
    const stats = gameCategories.map(category => {
      const count = recommendedGames.filter(game => game.category === category.id).length;
      return { ...category, count };
    }).filter(category => category.count > 0);
    
    return stats.sort((a, b) => b.count - a.count);
  }, [recommendedGames]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 flex items-center justify-center">
              <span className="text-6xl mr-4">⭐</span>
              Recommended Games
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover our carefully curated collection of recommended games! These are editor's picks and featured games that deliver exceptional gaming experiences and are loved by our community.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search recommended games..."
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
                          <span className="mr-2">Category: {gameCategories.find(c => c.id === selectedCategory)?.name}</span>
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
                          setSearchQuery('');
                          setSelectedCategory('all');
                          setSelectedTags([]);
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
                ⭐ Recommended Games
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
                <GameCard
                  key={game.id}
                  game={game}
                  className="animate-fade-in"
                />
              ))}
            </div>

            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No recommended games found
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

        {/* Popular Category Stats */}
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Popular Recommended Categories</h2>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {categoryStats.slice(0, 5).map((category) => (
                  <div key={category.id} className="bg-muted/20 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-200 min-w-[280px] max-w-[320px]">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{category.count}</div>
                    <div className="text-sm text-muted-foreground">Recommended Games</div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                These categories have the most recommended games, carefully selected by our editors for exceptional gaming experiences!
              </p>
            </div>
          </div>
        </section>

        {/* Recommendation Stats */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Recommendation Stats</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {recommendedGames.length}
                  </div>
                  <div className="text-muted-foreground">Featured Games</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {recommendedGames.filter(g => g.popular).length}
                  </div>
                  <div className="text-muted-foreground">Editor's Choice</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {recommendedGames.filter(g => g.trending).length}
                  </div>
                  <div className="text-muted-foreground">Popular Picks</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground">Quality Guaranteed</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Our recommendation algorithm continuously analyzes user feedback and game quality to curate the best gaming experiences for you!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}