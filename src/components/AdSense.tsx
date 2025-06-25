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

// 声明全局 adsbygoogle 对象
declare global {
  interface Window {
    adsbygoogle: any[];
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
    // 只在有有效广告位ID时才初始化广告
    if (!adSlot || adSlot.startsWith('1234567')) {
      console.warn('AdSense: Invalid or demo ad slot ID, skipping initialization');
      return;
    }

    try {
      // 确保 adsbygoogle 存在且页面已加载
      if (typeof window !== 'undefined' && window.adsbygoogle && document.readyState === 'complete') {
        // 延迟执行以确保DOM完全加载
        setTimeout(() => {
          try {
            window.adsbygoogle.push({});
          } catch (pushError) {
            console.error('AdSense push error:', pushError);
          }
        }, 100);
      } else if (typeof window !== 'undefined') {
        // 如果页面还没加载完成，等待加载完成后再初始化
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

  // 如果是示例ID，显示占位符
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

// 预定义的广告配置
export const AdConfigs = {
  // 横幅广告 (728x90)
  banner: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "horizontal" as const,
    style: { display: 'block', width: '728px', height: '90px' }
  },
  
  // 矩形广告 (300x250)
  rectangle: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "rectangle" as const,
    style: { display: 'block', width: '300px', height: '250px' }
  },
  
  // 大矩形广告 (336x280)
  largeRectangle: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "rectangle" as const,
    style: { display: 'block', width: '336px', height: '280px' }
  },
  
  // 摩天大楼广告 (160x600)
  skyscraper: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "vertical" as const,
    style: { display: 'block', width: '160px', height: '600px' }
  },
  
  // 移动端横幅 (320x50)
  mobileBanner: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "horizontal" as const,
    style: { display: 'block', width: '320px', height: '50px' }
  },
  
  // 响应式广告
  responsive: {
    adSlot: "", // 请在 Google AdSense 后台创建广告位并填入真实ID
    adFormat: "auto" as const,
    style: { display: 'block' }
  }
}; 