// Helper functions for category descriptions
export function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'io': 'IO games are known for their simple and easy-to-learn gameplay and multiplayer competitive mode. These games usually have a simple graphic style but have strong competitive and strategic elements.',
    'action': 'Action games focus on fast-paced game experiences, testing players\' reaction speed and operation skills. From fighting to shooting, from platform jumping to adventure exploration, action games bring you exciting game experiences.',
    'puzzle': 'Puzzle games exercise your logical thinking and problem-solving abilities. Whether it\'s classic digital games or innovative puzzle challenges, they can help you improve your intelligence while having fun.',
    'racing': 'Racing games let you experience the perfect combination of speed and passion. From karting to super sports cars, from street racing to professional tracks, they satisfy all your fantasies about speed.',
    'casual': 'Casual games are characterized by easy and pleasant game experiences, suitable for players of all ages. Simple operations and fun gameplay allow you to enjoy games anytime and anywhere.',
    'clicker': 'Clicker games offer addictive incremental gameplay where you build progress through clicking and automation. Start simple and gradually unlock powerful upgrades and achievements.'
  };
  return descriptions[category] || 'Explore this exciting game category and discover your game fun!';
}

export function getCategoryFeatures(category: string): string[] {
  const features: Record<string, string[]> = {
    'io': ['Multiplayer Competitive', 'Simple Operation', 'Real-time Battle System', 'Leaderboard Competition'],
    'action': ['Fast-paced Combat', 'Exciting Visual Effects', 'Diverse Weapon Systems', 'Challenging Level Design'],
    'puzzle': ['Develop Logical Thinking', 'Progressive Difficulty Design', 'Innovative Puzzle Mechanism', 'Achievement System'],
    'racing': ['Realistic Physics Engine', 'Diverse Tracks', 'Vehicle Modification System', 'Multiplayer Racing Mode'],
    'casual': ['Easy to Learn', 'Short Game Experience', 'Cute Graphic Style', 'Relaxing Mood'],
    'clicker': ['Progressive Upgrades', 'Idle Automation', 'Achievement System', 'Number Growth Satisfaction']
  };
  return features[category] || ['Exciting Game Experience', 'High Quality Content', 'Smooth Operation', 'Fun Play'];
}

export function getCategoryReasons(category: string): string[] {
  const reasons: Record<string, string[]> = {
    'io': ['Develop Competitive Awareness', 'Improve Reaction Ability', 'Enjoy Social Interaction', 'Experience Growth Fun'],
    'action': ['Release Pressure', 'Improve Hand-eye Coordination', 'Challenge Self Limit', 'Enjoy Stimulating Experience'],
    'puzzle': ['Develop Intelligence', 'Improve Focus', 'Develop Patience', 'Achievement Feeling'],
    'racing': ['Experience Speed Passion', 'Learn Driving Skills', 'Enjoy Competition Fun', 'Relax Mind'],
    'casual': ['Entertainment Anytime', 'Relieve Work Pressure', 'Simple to Understand', 'Old and Young'],
    'clicker': ['Relaxing Gameplay', 'Sense of Progress', 'Perfect for Multitasking', 'Satisfying Number Growth']
  };
  return reasons[category] || ['Provide High-quality Entertainment', 'Suitable for All Players', 'Continuous Content Update', 'Community Interaction'];
} 