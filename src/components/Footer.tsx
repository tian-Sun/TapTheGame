import Link from 'next/link';
import { gameCategories } from '@/lib/games';

export default function Footer() {
  const socialLinks = [
    // { name: 'Facebook', href: 'https://www.facebook.com/TapTheGameWeb', icon: '📘' },
    // { name: 'Instagram', href: 'https://www.instagram.com/tapthegameweb/', icon: '📷' },
    // { name: 'LinkedIn', href: 'https://linkedin.com/company/tapthegameweb', icon: '💼' },
    // { name: 'TikTok', href: 'https://www.tiktok.com/@tapthegameweb', icon: '🎵' },
    // { name: 'YouTube', href: 'https://www.youtube.com/@TapTheGameWeb', icon: '📺' },
    { name: 'X (Twitter)', href: 'https://x.com/wendy_Tianf', icon: '𝕏' }
  ];

  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: 'mailto:wendy.1031ht@gmail.com' },
    { name: 'Privacy Policy', href: '/privacy-cookie' },
    { name: 'Terms of Service', href: '/terms' }
    // { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/icon.png"
                alt="TapTheGame Web Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              TapTheGame Web is your gateway to the best <strong>HTML5 mini games</strong>, offering instant access to 200+ games. No downloads, no installs—just pick a game and play instantly on any device, anywhere!
            </p>
            <p className="text-sm text-muted-foreground">
              Discover the fun of TapTheGame Web—start playing today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 <a href="mailto:wendy.1031ht@gmail.com" className="hover:text-primary transition-colors duration-200">wendy.1031ht@gmail.com</a></p>
              <p>🌐 <a href="https://tapthegame.com" className="hover:text-primary transition-colors duration-200">tapthegame.com</a></p>
            </div>
            
            <h3 className="font-bold text-foreground mb-4 mt-6">Follow Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-muted hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                  title={social.name}
                >
                  <span className="text-2xl mb-1">{social.icon}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Game Categories Links */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-bold text-foreground mb-4">Popular Game Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {gameCategories
              .filter(category => category.id !== 'all') // 排除"All Games"
              .map((category) => (
              <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-1"
              >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> TapTheGame Web is not affiliated with the mobile game "Tap the Game" by Heisen Games. This website is focused on providing HTML5 mini game aggregation services.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">
                TapTheGame Web<br />
                HTML5 Mini Game Aggregation Platform<br />
                Contact Email: wendy.1031ht@gmail.com
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 TapTheGame Web. All Rights Reserved.
            </div>
          </div>
        </div>

        {/* For Developers Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-2">For Developers</h3>
            <p className="text-muted-foreground mb-4">
              TapTheGame Web is not only for players. We provide HTML5 game aggregation platforms for developers to reach global audiences.
            </p>
            <a
              href="mailto:wendy.1031ht@gmail.com"
              className="btn-primary inline-block"
            >
              Contact Us to Bring Your HTML5 Games to Millions of Players Worldwide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
