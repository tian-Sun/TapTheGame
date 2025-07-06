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
  {
    id: "peggys-post",
    title: "Peggy's Post",
    image: "/games/peggys-post.png",
    tags: ["simulation", "management", "relaxing"],
    category: "casual",
    href: "/play/peggys-post",
    html5Url: "https://html-classic.itch.zone/html/13958625/Peggy's Post/index.html",
    featured: true
  },
  {
    id: "work-life-balance",
    title: "Work-Life Balance",
    image: "/games/work-life-balance.png",
    tags: ["multitasking", "casual", "time"],
    category: "casual",
    href: "/play/work-life-balance",
    html5Url: "https://html-classic.itch.zone/html/13382148-1251765/index.html",
    featured: true
  },
  {
    id: "my-husband-is-a-stranger",
    title: "My Husband is a Stranger",
    image: "/games/my-husband-is-a-stranger.jpg",
    tags: ["visual novel", "romance", "psychological", "thriller", "narrative", "mystery", "drama", "horror", "interactive fiction", "story-rich"],
    category: "casual",
    href: "/play/my-husband-is-a-stranger",
    html5Url: "https://html-classic.itch.zone/html/14146223/index.html",
    trending: true
  },
  {
    id: "retromine",
    title: "Retromine",
    image: "/games/retromine.png",
    tags: ["deck building", "roguelike", "mining", "incremental", "arcade", "strategy", "pixel art", "retro"],
    category: "casual",
    href: "/play/retromine",
    html5Url: "https://html-classic.itch.zone/html/14176831/Web/index.html",
    featured: true
  },

  // Action Games
  {
    id: "bloodflame-origins",
    title: "Bloodflame Origins: The Maven in Blue",
    image: "/games/bloodflame-origins.png",
    tags: ["hack and slash", "isometric", "fantasy", "fangame", "hololive", "dungeon crawler", "action", "adventure"],
    category: "action",
    href: "/play/bloodflame-origins",
    html5Url: "https://html-classic.itch.zone/html/13847844/bloodmav_tb7web/index.html",
    featured: true
  },

  // Puzzle Games
  {
    id: "ooo-demo",
    title: "Öoo Demo",
    image: "/games/ooo-demo.png",
    tags: ["puzzle", "platformer", "bomb"],
    category: "puzzle",
    href: "/play/ooo-demo",
    html5Url: "https://html-classic.itch.zone/html/13956792/index.html",
    featured: true
  },
  {
    id: "retromine-puzzle",
    title: "Retromine",
    image: "/games/retromine.png",
    tags: ["deck building", "roguelike", "mining", "incremental", "strategy", "puzzle", "card game", "resource management"],
    category: "puzzle",
    href: "/play/retromine",
    html5Url: "https://html-classic.itch.zone/html/14176831/Web/index.html",
    popular: true
  },

  {
    id: "krunker",
    title: "Krunker",
    image: "https://ext.same-assets.com/54244373/1962848743.jpeg",
    tags: ["io", "mmorpg", "gun"],
    category: "io",
    href: "/play/krunker",
    html5Url: "https://krunker.io/",
    featured: true
  },

  // New Games
  {
    id: "raven-star",
    title: "Raven Star",
    image: "/games/raven-star.png",
    tags: ["platformer", "pixel art", "game boy", "adventure", "story"],
    category: "action",
    href: "/play/raven-star",
    html5Url: "https://html-classic.itch.zone/html/13655458/web/index.html",
    featured: true
  },
  {
    id: "side-effects",
    title: "Side Effects",
    image: "/games/side-effects.png",
    tags: ["strategy", "horror", "dark", "pills", "survival"],
    category: "puzzle",
    href: "/play/side-effects",
    html5Url: "https://html-classic.itch.zone/html/14031193/SideEffectsWebBuild_V0.22/index.html",
    popular: true
  },
  {
    id: "we-suspect-foul-play",
    title: "We Suspect Foul Play",
    image: "/games/we-suspect-foul-play.png",
    tags: ["detective", "point and click", "mystery", "noir", "hollywood"],
    category: "puzzle",
    href: "/play/we-suspect-foul-play",
    html5Url: "https://html.itch.zone/html/13658578/index.html",
    trending: true
  },

  // Raven Star in shooter category
  {
    id: "raven-star-shooter",
    title: "Raven Star",
    image: "/games/raven-star.png",
    tags: ["platformer", "pixel art", "game boy", "adventure", "story"],
    category: "shooter",
    href: "/play/raven-star",
    html5Url: "https://html-classic.itch.zone/html/13655458/web/index.html",
    featured: true
  },

  // We Suspect Foul Play in casual category
  {
    id: "we-suspect-foul-play-casual",
    title: "We Suspect Foul Play",
    image: "/games/we-suspect-foul-play.png",
    tags: ["detective", "point and click", "mystery", "noir", "hollywood"],
    category: "casual",
    href: "/play/we-suspect-foul-play",
    html5Url: "https://html.itch.zone/html/13658578/index.html",
    trending: true
  }
];

export const gameCategories = [
  { id: "all", name: "All Games", icon: "🎮" },
  { id: "io", name: "IO Games", icon: "🌐" },
  { id: "action", name: "Action", icon: "⚔️" },
  { id: "casual", name: "Casual", icon: "🎲" },
  { id: "puzzle", name: "Puzzle", icon: "🧩" },
  { id: "racing", name: "Racing", icon: "🏎️" },
  { id: "shooter", name: "Shooter", icon: "🔫" },
  { id: "clicker", name: "Clicker", icon: "👆" },
  { id: "car", name: "Car", icon: "🚗" }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Most played", href: "/most-played" },
  { name: "Recommended", href: "/recommended" },
  { name: "Trending", href: "/trending" },
  // { name: "Specials", href: "/specials" },
  // { name: "Recently played", href: "/recently-played" }
];
