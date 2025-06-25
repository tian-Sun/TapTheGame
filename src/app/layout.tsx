import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "TapTheGame Web — Free Online Games | Play Now!",
    template: "%s | TapTheGame Web"
  },
  description: "Play 200+ HTML5 mini games instantly on TapTheGame Web — no downloads, no installs. Enjoy classics, trending hits and fresh new titles on any device, anywhere!",
  keywords: [
    "HTML5 games",
    "free online games", 
    "mini games",
    "browser games",
    "casual games",
    "mobile games",
    "instant play games",
    "no download games",
    "TapTheGame",
    "web games",
    "arcade games",
    "puzzle games",
    "action games",
    "racing games",
    "sports games"
  ],
  authors: [{ name: "TapTheGame Web Team" }],
  creator: "TapTheGame Web",
  publisher: "TapTheGame Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tapthegame.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://tapthegame.com',
    title: 'TapTheGame Web — Free Online Games | Play Now!',
    description: 'Play 200+ HTML5 mini games instantly on TapTheGame Web — no downloads, no installs. Enjoy classics, trending hits and fresh new titles on any device, anywhere!',
    siteName: 'TapTheGame Web',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TapTheGame Web - Free HTML5 Online Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TapTheGame Web — Free Online Games | Play Now!',
    description: 'Play 200+ HTML5 mini games instantly on TapTheGame Web — no downloads, no installs. Enjoy classics, trending hits and fresh new titles on any device, anywhere!',
    images: ['/og-image.png'],
    creator: '@tapthegame',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  
                  console.log('Initial theme set:', theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  console.log('Fallback to dark theme');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
