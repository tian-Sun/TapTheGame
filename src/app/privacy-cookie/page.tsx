import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy and Cookie Policy',
  description: 'TapTheGame Web 的隐私政策与 Cookie 使用说明，了解我们如何保护您的个人信息。',
};

export default function PrivacyCookiePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy and Cookie Policy</h1>
          
          <div className="space-y-8">
            {/* Disclaimer Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-foreground font-semibold">
                  TapTheGame Web is not associated with Heisen Games's mobile game "Tap the Game". This website is focused on providing HTML5 game aggregation services.
                </p>
              </div>
            </section>

            {/* Age Restriction & Minor Protection */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Age Restriction & Minor Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>This website is intended for users aged 18 and above. If you are under 18, you should use this site only with parental or guardian supervision.</p>
                <p>We do not knowingly collect personal information from children under the age of 13 (US) or 16 (EU). If you believe that a child has provided us with personal information without parental consent, please contact us for removal.</p>
              </div>
            </section>

            {/* Content Compliance Statement */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Content Compliance Statement</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We do not provide any pornographic, violent, gambling, drug-related, or otherwise illegal or inappropriate content. All games on this site are intended to be safe and legal entertainment.</p>
              </div>
            </section>

            {/* Ads & Third-Party Services */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ads & Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>This website may display Google AdSense and other third-party advertisements. The content of these ads is automatically provided by third-party platforms, and we do not have full control over their content.</p>
                <p>Users are advised to exercise their own judgment regarding the legality and safety of any advertised content.</p>
              </div>
            </section>

            {/* Parental Guidance Advice */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Parental Guidance Advice</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We recommend that parents or guardians actively participate in and supervise minors' online activities to ensure their healthy and safe use of this website.</p>
              </div>
            </section>

            {/* About Us Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">About Us</h2>
              <p className="text-muted-foreground mb-4">
                TapTheGame Web is a platform focused on providing HTML5 game aggregation services. We aim to provide high-quality, no-download online game services to users.
              </p>
              <p className="text-muted-foreground">
                📧 Email: <a href="mailto:contact@tapthegame.com" className="text-primary hover:underline">contact@tapthegame.com</a>
              </p>
            </section>

            {/* Privacy Policy Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Information Collection</h3>
                  <p>We collect information including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Browser type and version</li>
                    <li>Operating system information</li>
                    <li>Access time and page browsing records</li>
                    <li>IP address (for security purposes)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Information Usage</h3>
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Provide and improve game services</li>
                    <li>Analyze website usage</li>
                    <li>Prevent fraud and abuse</li>
                    <li>Personalized user experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Information Protection</h3>
                  <p>We use industry-standard security measures to protect your personal information, including encrypted transmission and secure server environment.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Third-Party Services</h3>
                  <p>We may use third-party services to provide game content and analysis services. These service providers have their own privacy policies.</p>
                </div>
              </div>
            </section>

            {/* Cookie Policy Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Policy</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">What is a Cookie</h3>
                  <p>A cookie is a small text file stored on your device to improve website functionality and user experience.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies We Use</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Necessary Cookies:</strong> Ensure basic website functionality</li>
                    <li><strong>Performance Cookies:</strong> Collect website usage data to improve service</li>
                    <li><strong>Functionality Cookies:</strong> Remember your preferences</li>
                    <li><strong>Third-Party Cookies:</strong> From game providers and analysis services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Management</h3>
                  <p>You can manage cookies through your browser settings. Please note, disabling certain cookies may affect website functionality.</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                如果您对我们的隐私政策有任何疑问，请通过以下方式联系我们：
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  📧 Email: <a href="mailto:contact@tapthegame.com" className="text-primary hover:underline">contact@tapthegame.com</a>
                </p>
                <p className="text-muted-foreground">
                  🌐 Website: <a href="https://tapthegame.com" className="text-primary hover:underline">tapthegame.com</a>
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <section className="text-center text-sm text-muted-foreground">
              <p>Last Updated: January 2025</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 