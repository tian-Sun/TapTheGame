export interface Game {
  id: string;
  title: string;
  image: string;
  tags: string[];
  category: string;
  href: string;
  html5Url?: string;
  popular?: boolean;
  trending?: boolean;
  featured?: boolean;
}

export const games: Game[] = [
  // Most Played Games
  {
    id: "shell-shockers",
    title: "Shell Shockers",
    image: "https://ext.same-assets.com/54244373/219849240.jpeg",
    tags: ["io", "mmorpg", "gun"],
    category: "io",
    href: "/play/shell-shockers",
    html5Url: "https://shellshock.io/",
    popular: true,
    featured: true
  },
  {
    id: "dogeminer",
    title: "Dogeminer",
    image: "https://ext.same-assets.com/54244373/2893940060.jpeg",
    tags: ["arcade", "mining", "idle"],
    category: "clicker",
    href: "/play/dogeminer",
    html5Url: "https://dogeminer.se/",
    popular: true
  },
  {
    id: "smash-karts",
    title: "Smash Karts",
    image: "https://ext.same-assets.com/54244373/2183238829.jpeg",
    tags: ["io", "car", "fun"],
    category: "car",
    href: "/play/smash-karts",
    html5Url: "https://smashkarts.io/",
    popular: true,
    featured: true
  },

  // Recommended Games

  // Trending Games

  // IO Games
  {
    id: "hole-io",
    title: "Hole.io",
    image: "https://ext.same-assets.com/54244373/1687911999.jpeg",
    tags: ["io", "building", "battle royale"],
    category: "io",
    href: "/play/hole-io",
    html5Url: "https://hole-io.com/"
  },
  {
    id: "paper-io-2",
    title: "Paper.io 2",
    image: "https://ext.same-assets.com/54244373/1778678504.jpeg",
    tags: ["io", "cool", "skill"],
    category: "io",
    href: "/play/paper-io-2",
    html5Url: "https://paper-io.com/"
  },

  // Casual Games
  {
    id: "drift-boss",
    title: "Drift Boss",
    image: "https://ext.same-assets.com/54244373/1274373130.jpeg",
    tags: ["racing", "drifting", "driving"],
    category: "racing",
    href: "/play/drift-boss",
    html5Url: "https://driftboss.net/"
  },

  // Action Games


  // Sports Games
  {
    id: "krunker",
    title: "Krunker",
    image: "https://ext.same-assets.com/54244373/1962848743.jpeg",
    tags: ["io", "mmorpg", "gun"],
    category: "io",
    href: "/play/krunker",
    html5Url: "https://krunker.io/",
    featured: true
  }
];

export const gameCategories = [
  { id: "all", name: "All Games", icon: "🎮" },
  { id: "io", name: "IO Games", icon: "🌐" },
  { id: "action", name: "Action", icon: "⚔️" },
  { id: "casual", name: "Casual", icon: "🎲" },
  { id: "puzzle", name: "Puzzle", icon: "🧩" },
  { id: "racing", name: "Racing", icon: "🏎️" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "shooter", name: "Shooter", icon: "🔫" },
  { id: "clicker", name: "Clicker", icon: "👆" },
  { id: "car", name: "Car", icon: "🚗" },
  { id: "fighting", name: "Fighting", icon: "🥊" }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Most played", href: "/most-played" },
  // { name: "New", href: "/new" },
  { name: "Trending", href: "/trending" },
  // { name: "Specials", href: "/specials" },
  // { name: "Recently played", href: "/recently-played" }
];
