'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import GameCard from '@/components/GameCard';
import { type Game } from '@/lib/games';
import { getCategoryDescription, getCategoryFeatures, getCategoryReasons } from './utils';

interface CategoryPageClientProps {
  category: string;
  categoryInfo: {
    id: string;
    name: string;
    icon: string;
  };
  categoryGames: Game[];
}

export default function CategoryPageClient({ category, categoryInfo, categoryGames }: CategoryPageClientProps) {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all available tags for this category
  const availableTags = useMemo(() => {
    const allTags = categoryGames.flatMap(game => game.tags);
    return Array.from(new Set(allTags)).sort();
  }, [categoryGames]);

  // Filter games based on search and filters
  const filteredGames = useMemo(() => {
    let filtered = categoryGames;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(game =>
        selectedTags.every(tag => game.tags.includes(tag))
      );
    }

    return filtered;
  }, [categoryGames, searchQuery, selectedTags]);

  // Event handlers
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedTags.length > 0;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 flex items-center justify-center">
            <span className="text-6xl mr-4">{categoryInfo.icon}</span>
            free online {categoryInfo.name} Games
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our curated selection of {categoryInfo.name} games, featuring {categoryGames.length} exciting titles. Start playing now and enjoy endless fun!
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar
              onSearch={handleSearch}
              placeholder={`Search ${categoryInfo.name} games...`}
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
              {/* Tags Filter */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="text-secondary mr-2">🏷️</span>
                  Game Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
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
              {hasActiveFilters ? '🔍 Filter Results' : `🎮 All ${categoryInfo.name} Games`}
              <span className="text-lg text-muted-foreground ml-2">
                (Found {filteredGames.length} games)
              </span>
            </h2>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchQuery('');
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
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No games found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting the search term or filtering conditions
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
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

      {/* Category Description */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">About {categoryInfo.name} Games</h2>
            <div className="text-muted-foreground mb-8">
              {getCategoryDescription(category)}
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Game Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {getCategoryFeatures(category).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Recommended Reasons</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {getCategoryReasons(category).map((reason, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 