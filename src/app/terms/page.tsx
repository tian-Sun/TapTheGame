import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Service Terms',
  description: 'Service Terms for TapTheGame Web. Learn about your rights and obligations when using our platform.'
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Service Terms</h1>
          
          <div className="space-y-8">
            {/* Disclaimer Section */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-foreground font-semibold">
                  TapTheGame Web is not associated with Heisen Games's Tap the Game mobile game. This website focuses on providing HTML5 mini game aggregation services.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TapTheGame Web is an HTML5 mini game aggregation platform, providing users with instant game experiences. Our services include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Providing 200+ HTML5 mini games</li>
                  <li>Play instantly without downloading</li>
                  <li>Support multi-device access</li>
                  <li>Free game services</li>
                </ul>
              </div>
            </section>

            {/* User Rights and Responsibilities */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Rights and Responsibilities</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">User Rights</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                    <li>Free access and use of platform games</li>
                    <li>Use game content within reasonable limits</li>
                    <li>Obtain customer support services</li>
                    <li>Protect personal privacy information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">User Responsibilities</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                    <li>Comply with relevant laws and regulations</li>
                    <li>Do not maliciously destroy platform services</li>
                    <li>Do not spread harmful or illegal content</li>
                    <li>Respect other users and platform rights</li>
                    <li>Do not misuse for commercial purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Game content on the platform belongs to the respective developers. TapTheGame Web only provides services as an aggregation platform and does not own the intellectual property of game content.
                </p>
                <p>
                  Users are not allowed to copy, distribute, modify, or use game content on the platform for commercial purposes unless they have obtained explicit authorization from the respective rights holders.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TapTheGame Web strives to provide stable services, but does not guarantee that services will not be interrupted or error-free.
                </p>
                <p>
                  We are not responsible for any direct or indirect losses arising from the use of platform services, including but not limited to data loss or device damage.
                </p>
                <p>
                  Users should bear the risks of using platform services themselves.
                </p>
              </div>
            </section>

            {/* Service Changes */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Changes</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify or terminate services at any time, including but not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Adding or removing game content</li>
                  <li>Modifying platform features</li>
                  <li>Updating service terms</li>
                  <li>Suspending or terminating services</li>
                </ul>
                <p>
                  Major changes will be notified to users through website announcements or other appropriate methods.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  If you have any questions about the service terms, please contact us through the following methods:
                </p>
                <p>
                  📧 Email: <a href="mailto:contact@tapthegame.com" className="text-primary hover:underline">contact@tapthegame.com</a>
                </p>
                <p>
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