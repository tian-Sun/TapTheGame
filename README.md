# 🎮 TapTheGame Web

**TapTheGame Web** is a modern HTML5 game aggregation platform built with Next.js, providing instant access to 200+ games without downloads or installations. Experience the best HTML5 games directly in your browser!

## 🌟 Features

### 🎯 Core Features
- **200+ HTML5 Games** - Curated collection of high-quality games
- **Instant Play** - No downloads, no installations required
- **Cross-Platform** - Works on desktop, tablet, and mobile devices
- **Real-time Gameplay** - Direct game links for optimal performance

### 🎨 User Experience
- **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- **Theme Switching** - Dark/Light mode support
- **Advanced Filtering** - Search and filter games by category, tags
- **Game Ratings** - User review and rating system
- **Social Features** - Share games with friends

### 🌐 International Ready
- **Fully English Interface** - Optimized for global audiences
- **SEO Optimized** - Perfect for search engine visibility
- **Privacy Compliant** - GDPR/CCPA compliant privacy policies
- **Mobile-First Design** - Responsive across all devices

## 🛠️ Technology Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Shadcn/ui + Radix UI
- **State Management**: React Context
- **Package Manager**: npm/yarn/bun
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tian-Sun/TapTheGame.git
   cd TapTheGame
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── category/[category] # Dynamic category pages
│   ├── game/[id]/         # Dynamic game detail pages
│   ├── most-played/       # Most played games
│   ├── trending/          # Trending games
│   └── ...
├── components/            # Reusable UI components
├── lib/                   # Utilities and game data
└── contexts/             # React contexts (theme, etc.)
```

## 🎮 Game Management

All game data is centrally managed in `src/lib/games.ts`:

```typescript
// Add new games here
{
  id: "game-id",
  title: "Game Title",
  image: "game-image-url",
  tags: ["tag1", "tag2"],
  category: "category-id",
  html5Url: "direct-game-url", // Direct link to HTML5 game
  popular: true,
  trending: false,
  featured: true
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for custom configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### Customization
- **Games**: Edit `src/lib/games.ts`
- **Categories**: Modify `gameCategories` in `src/lib/games.ts`
- **Styling**: Update Tailwind config in `tailwind.config.ts`
- **SEO**: Modify metadata in layout files

## 📊 SEO & Analytics

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **Meta Tags**: Optimized for social sharing
- **Structured Data**: Game and website markup

## 🔒 Privacy & Compliance

- **Privacy Policy**: Located at `/privacy-cookie`
- **Terms of Service**: Located at `/terms`
- **GDPR Compliant**: Cookie consent and data handling
- **Age Restrictions**: 18+ recommendations with parental guidance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: wendy.1031ht@gmail.com
- **Website**: [tapthegame.com](https://tapthegame.com)
- **GitHub**: [tian-Sun/TapTheGame](https://github.com/tian-Sun/TapTheGame)

## 🎯 Roadmap

- [ ] Game favorites system
- [ ] User accounts and profiles
- [ ] Game analytics and statistics
- [ ] Multiplayer lobby system
- [ ] Game tournaments and leaderboards
- [ ] Mobile app (React Native)

---

**Disclaimer**: TapTheGame Web is not affiliated with Heisen Games' mobile game "Tap the Game". This platform focuses on HTML5 game aggregation services.

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!
