import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { games, gameCategories, type Game } from '@/lib/games';
import CategoryPageClient from './CategoryPageClient';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return gameCategories.map((category) => ({
    category: category.id,
  }));
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Check if the category exists
  const categoryInfo = gameCategories.find(c => c.id === category);
  if (!categoryInfo) {
    notFound();
  }

  // Get all games in this category
  const categoryGames = games.filter(game => game.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPageClient 
        category={category}
        categoryInfo={categoryInfo}
        categoryGames={categoryGames}
      />
      <Footer />
    </div>
  );
}
