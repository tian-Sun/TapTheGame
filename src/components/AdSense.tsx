'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: string;
  adLayoutKey?: string;
  style?: React.CSSProperties;
  className?: string;
}

// Declare global adsbygoogle object
declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  adLayout,
  adLayoutKey,
  style = { display: 'block' },
  className = '',
}: AdSenseProps) {
  useEffect(() => {
    // Only initialize ads when there's a valid ad slot ID
    if (!adSlot || adSlot.startsWith('1234567')) {
      console.warn('AdSense: Invalid or demo ad slot ID, skipping initialization');
      return;
    }

    try {
      // Ensure adsbygoogle exists and page is loaded
      if (typeof window !== 'undefined' && window.adsbygoogle && document.readyState === 'complete') {
        // Delay execution to ensure DOM is fully loaded
        setTimeout(() => {
          try {
            window.adsbygoogle.push({});
          } catch (pushError) {
            console.error('AdSense push error:', pushError);
          }
        }, 100);
      } else if (typeof window !== 'undefined') {
        // If page hasn't finished loading, wait for load completion before initializing
        const handleLoad = () => {
          if (window.adsbygoogle) {
            setTimeout(() => {
              try {
                window.adsbygoogle.push({});
              } catch (pushError) {
                console.error('AdSense push error:', pushError);
              }
            }, 100);
          }
        };

        if (document.readyState === 'complete') {
          handleLoad();
        } else {
          window.addEventListener('load', handleLoad, { once: true });
          return () => window.removeEventListener('load', handleLoad);
        }
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, [adSlot]);

  // If it's a demo ID, show placeholder
  if (!adSlot || adSlot.startsWith('1234567')) {
    return (
      <div className={`adsense-container ${className}`}>
        <div 
          style={{...style, background: 'hsl(var(--muted))', border: '1px dashed hsl(var(--border))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--muted-foreground))', fontSize: '14px'}}
        >
          [AdSense Placeholder - Please configure real ad slot ID]
        </div>
      </div>
    );
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5851231098067394"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Predefined ad configurations
export const AdConfigs = {
  // Banner ad (728x90)
  banner: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "horizontal" as const,
    style: { display: 'block', width: '728px', height: '90px' }
  },
  
  // Rectangle ad (300x250)
  rectangle: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "rectangle" as const,
    style: { display: 'block', width: '300px', height: '250px' }
  },
  
  // Large rectangle ad (336x280)
  largeRectangle: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "rectangle" as const,
    style: { display: 'block', width: '336px', height: '280px' }
  },
  
  // Skyscraper ad (160x600)
  skyscraper: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "vertical" as const,
    style: { display: 'block', width: '160px', height: '600px' }
  },
  
  // Mobile banner (320x50)
  mobileBanner: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "horizontal" as const,
    style: { display: 'block', width: '320px', height: '50px' }
  },
  
  // Responsive ad
  responsive: {
    adSlot: "", // Please create ad unit in Google AdSense dashboard and fill in real ID
    adFormat: "auto" as const,
    style: { display: 'block' }
  }
}; 