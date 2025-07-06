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
    tags: ["io", "fun"],
    category: "io",
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
    id: "polytrack",
    title: "PolyTrack",
    image: "/games/polytrack.png",
    tags: ["3d", "low-poly", "arcade", "difficult", "driving", "high score", "level editor", "speedrun"],
    category: "racing",
    href: "/play/polytrack",
    html5Url: "https://html-classic.itch.zone/html/13305767/index.html",
    featured: true
  },
  {
    id: "tanuki-sunset",
    title: "Tanuki Sunset",
    image: "/games/tanuki-sunset.png",
    tags: ["arcade", "casual", "high score", "infinite runner", "relaxing", "score attack", "skateboard", "synthwave"],
    category: "racing",
    href: "/play/tanuki-sunset",
    html5Url: "https://html-classic.itch.zone/html/1756009/WebGL/index.html?v=1574334742",
    popular: true
  },
  {
    id: "help-no-brake",
    title: "Help! No Brake",
    image: "/games/help-no-brake.png",
    tags: ["2d", "arcade", "pixel art", "top-down", "challenge", "platformer", "action"],
    category: "racing",
    href: "/play/help-no-brake",
    html5Url: "https://html-classic.itch.zone/html/6749357/index.html?v=1732313683",
    trending: true
  },
  {
    id: "tiny-truck-racing",
    title: "Tiny Truck Racing",
    image: "/games/tiny-truck-racing.png",
    tags: ["truck", "racing", "mini", "casual", "arcade", "driving", "competition"],
    category: "racing",
    href: "/play/tiny-truck-racing",
    html5Url: "https://html-classic.itch.zone/html/11335131/index.html?v=1732313550",
    featured: true
  },
  {
    id: "peggys-post",
    title: "Peggy's Post",
    image: "/games/peggys-post.png",
    tags: ["clicker", "simulation", "management", "relaxing", "post office", "cute", "pixel art"],
    category: "clicker",
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
  {
    id: "the-freak-circus",
    title: "The Freak Circus",
    image: "/games/the-freak-circus.png",
    tags: ["visual novel", "horror", "circus", "yandere", "dark", "dating sim", "mystery", "psychological"],
    category: "casual",
    href: "/play/the-freak-circus",
    html5Url: "https://html-classic.itch.zone/html/14081436/index.html",
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
  {
    id: "swordfight",
    title: "Swordfight!!",
    image: "/games/swordfight.png",
    tags: ["top-down", "swords", "pixel art", "boss battle", "singleplayer", "mobile", "16-bit"],
    category: "action",
    href: "/play/swordfight",
    html5Url: "https://html-classic.itch.zone/html/14206763/index.html",
    featured: true
  },
  {
    id: "red-handed",
    title: "Red Handed",
    image: "/games/red-handed.png",
    tags: ["stealth", "fps", "puzzle", "pixel art", "unique", "1-bit", "3d", "strategy"],
    category: "action",
    href: "/play/red-handed",
    html5Url: "https://html-classic.itch.zone/html/3872485/Red%20Handed%20v1.1%20(WEBGL)/index.html?v=1732313766",
    popular: true
  },
  {
    id: "the-orchids-edge",
    title: "The Orchid's Edge",
    image: "/games/the-orchids-edge.png",
    tags: ["3d platformer", "female protagonist", "combat", "fantasy", "scythe", "forest", "3d", "adventure"],
    category: "action",
    href: "/play/the-orchids-edge",
    html5Url: "https://html-classic.itch.zone/html/7135666/index.html",
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
    id: "six-cats-under",
    title: "Six Cats Under",
    image: "/games/six-cats-under.png",
    tags: ["point and click", "puzzle", "cats", "emotional", "pixel art", "cute", "story-rich", "adventure"],
    category: "puzzle",
    href: "/play/six-cats-under",
    html5Url: "https://html-classic.itch.zone/html/2267583/index.html?v=1591301667",
    featured: true
  },
  {
    id: "last-seen-online",
    title: "Last Seen Online",
    image: "/games/last-seen-online.png",
    tags: ["psychological horror", "escape room", "computer", "mystery", "nostalgia", "2000s", "detective", "thriller"],
    category: "puzzle",
    href: "/play/last-seen-online",
    html5Url: "https://html-classic.itch.zone/html/13126325/index.html",
    trending: true
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

  // Clicker Games
  {
    id: "what-body",
    title: "What Body?",
    image: "/games/what body.png",
    tags: ["clicker", "visual novel", "short", "multiple endings", "comedy", "dark humor", "pixel art", "cute"],
    category: "clicker",
    href: "/play/what-body",
    html5Url: "https://html-classic.itch.zone/html/9223086/www/index.html?v=1732313608",
    trending: true
  },
  {
    id: "plant-therapy",
    title: "Plant Therapy",
    image: "/games/plant.png",
    tags: ["clicker", "idle", "cozy", "gardening", "relaxing", "casual", "simulation", "wholesome"],
    category: "clicker",
    href: "/play/plant-therapy",
    html5Url: "https://html-classic.itch.zone/html/4618717-1272469/webgl/index.html",
    popular: true
  },
  {
    id: "astro-prospector",
    title: "Astro Prospector",
    image: "/games/astro.png",
    tags: ["clicker", "incremental", "bullet hell", "space", "mining", "skill tree", "upgrades", "pixel art"],
    category: "clicker",
    href: "/play/astro-prospector",
    html5Url: "https://html-classic.itch.zone/html/13954383/index.html",
    featured: true
  },
  {
    id: "lose95",
    title: "Lose95",
    image: "/games/lose95.png",
    tags: ["clicker", "retro", "nostalgia", "pixel art", "endless", "roguelike", "computer", "90s"],
    category: "clicker",
    href: "/play/lose95",
    html5Url: "https://html-classic.itch.zone/html/5652546/index.html?v=1732313716",
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
  { id: "clicker", name: "Clicker", icon: "👆" }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Most played", href: "/most-played" },
  { name: "Recommended", href: "/recommended" },
  { name: "Trending", href: "/trending" },
  // { name: "Specials", href: "/specials" },
  // { name: "Recently played", href: "/recently-played" }
];
