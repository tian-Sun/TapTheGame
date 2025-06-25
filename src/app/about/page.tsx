import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TapTheGame Web - a platform dedicated to HTML5 game aggregation, providing users with instant game experiences.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Us</h1>
          
          <div className="space-y-8">
            {/* Disclaimer Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-foreground font-semibold">
                  TapTheGame Web is not associated with Heisen Games's mobile game "Tap the Game". This website is dedicated to providing HTML5 game aggregation services.
                </p>
              </div>
            </section>

            {/* Mission Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TapTheGame Web is committed to providing the best HTML5 game aggregation experience for users. We believe games should be simple, quick, and fun, without complex installation processes.
                </p>
                <p>
                  Our mission is to create a user-friendly platform where everyone can easily access and enjoy high-quality online games, regardless of the device they use.
                </p>
              </div>
            </section>

            {/* What We Offer */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">🎮 200+ HTML5 Games</h3>
                  <p className="text-muted-foreground">
                    We have selected various HTML5 games, including action, puzzle, racing, and sports, to meet different user needs.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">⚡ Instant Play</h3>
                  <p className="text-muted-foreground">
                    No download, no installation required, just click to start the game. Supports all modern browsers and devices.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">📱 Multi-device Support</h3>
                  <p className="text-muted-foreground">
                    Perfectly compatible with desktop, tablet, and mobile devices, allowing you to enjoy the game anytime, anywhere.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">🆓 Completely Free</h3>
                  <p className="text-muted-foreground">
                    All games are completely free, no subscription fees, no in-app purchases, just pure game experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">🎯</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Focus on HTML5 Games</h4>
                    <p>We focus on HTML5 game aggregation to provide the best game experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Loading</h4>
                    <p>Optimized technology architecture ensures quick loading, reducing waiting time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">🛡️</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Safe and Reliable</h4>
                    <p>Strictly screen game content to ensure all games are safe and reliable, suitable for all ages.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Continuous Updates</h4>
                    <p>Regularly add new games and update existing games to keep the platform active.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Advantages</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use the latest Web technology to ensure the best game experience:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>HTML5 Technology:</strong> Modern browser native support, no plugins required</li>
                  <li><strong>Responsive Design:</strong> Perfectly compatible with various screen sizes</li>
                  <li><strong>Quick Loading:</strong> Optimized resource loading strategy</li>
                  <li><strong>Cross-platform Compatibility:</strong> Supports Windows, Mac, iOS, Android</li>
                  <li><strong>Security Protection:</strong> Multi-layer security measures protect users</li>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We welcome your feedback and suggestions. If you have any questions or cooperation intentions, please contact us at any time:
                </p>
                <div className="space-y-2">
                  <p>
                    📧 Email: <a href="mailto:wendy.1031ht@gmail.com" className="text-primary hover:underline">wendy.1031ht@gmail.com</a>
                  </p>
                  <p>
                    🌐 Website: <a href="https://tapthegame.com" className="text-primary hover:underline">tapthegame.com</a>
                  </p>
                </div>
                <p>
                  We will reply to your email within 24 hours.
                </p>
              </div>
            </section>

            {/* Join Us */}
            <section className="bg-card border border-border rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Join Us</h2>
              <p className="text-muted-foreground mb-6">
                Start your HTML5 game journey and experience the joy of instant play!
              </p>
              <Link
                href="/"
                className="btn-primary inline-block"
              >
                Start Game Now
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 