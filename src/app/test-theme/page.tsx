'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function TestThemePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">主题测试页面</h1>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4">当前主题: {theme}</h2>
          
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            切换主题
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">卡片背景</h3>
            <p className="text-muted-foreground">这是卡片背景颜色</p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">静音背景</h3>
            <p className="text-muted-foreground">这是静音背景颜色</p>
          </div>
          
          <div className="bg-primary p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-primary-foreground">主色背景</h3>
            <p className="text-primary-foreground">这是主色背景</p>
          </div>
          
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-secondary-foreground">辅助色背景</h3>
            <p className="text-secondary-foreground">这是辅助色背景</p>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <h3 className="font-semibold mb-2">CSS 变量测试</h3>
          <div className="space-y-2 text-sm">
            <div>背景色: <span className="bg-background px-2 py-1 rounded">--background</span></div>
            <div>前景色: <span className="text-foreground">--foreground</span></div>
            <div>边框色: <span className="border border-border px-2 py-1 rounded">--border</span></div>
            <div>静音色: <span className="text-muted-foreground">--muted-foreground</span></div>
          </div>
        </div>
      </div>
    </div>
  );
} 