# Google AdSense 设置说明

## 已完成的设置

### 1. AdSense 脚本已添加
已在 `src/app/layout.tsx` 中添加了 Google AdSense 脚本：
```html
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5851231098067394"
  crossOrigin="anonymous"
/>
```

### 2. AdSense 组件已创建
创建了 `src/components/AdSense.tsx` 组件，支持：
- 不同广告格式（横幅、矩形、摩天大楼等）
- 响应式广告
- 自定义样式
- 错误处理

### 3. 已在首页添加广告位
在 `src/app/page.tsx` 中添加了3个广告位：
- **横幅广告**: 推荐游戏和趋势游戏之间 (728x90)
- **矩形广告**: IO游戏和休闲游戏之间 (336x280)  
- **响应式广告**: 页面底部，全宽度响应式

### 4. CSS样式已优化
在 `src/app/globals.css` 中添加了：
- 广告容器样式
- 响应式调整
- 加载占位符样式

## 重要提示：TagError 解决方案

### 当前状态
- ✅ 已修复 `TagError` 问题
- ✅ 使用空字符串作为广告位ID，显示占位符
- ✅ 只有配置真实广告位ID后才会初始化AdSense

### 错误原因
之前的错误是因为使用了无效的示例广告位ID (`"1234567890"` 等)，Google AdSense 无法识别这些ID导致 `TagError`。

## 需要进一步配置的步骤

### 1. 更新广告位ID
在 `src/components/AdSense.tsx` 的 `AdConfigs` 中，需要将空字符串替换为真实的广告位ID：

```typescript
export const AdConfigs = {
  banner: {
    adSlot: "你的真实横幅广告位ID", // 替换空字符串 ""
    // ...
  },
  rectangle: {
    adSlot: "你的真实矩形广告位ID", // 替换空字符串 ""
    // ...
  },
  // ... 其他配置
};
```

### 2. 在Google AdSense后台创建广告位
1. 登录 [Google AdSense](https://www.google.com/adsense/)
2. 转到"广告" > "按广告单元"
3. 创建新的广告单元：
   - **展示广告 - 横幅** (728x90)
   - **展示广告 - 矩形** (336x280)
   - **展示广告 - 响应式**
4. 复制生成的广告位ID并更新组件

### 3. 更新首页广告位ID
在 `src/app/page.tsx` 中更新实际的广告位ID（目前显示占位符）：

```tsx
// 横幅广告 - 当前为空字符串，需要替换
<AdSense 
  adSlot="你的实际横幅广告位ID" // 替换 ""
  adFormat="horizontal"
  style={{ display: 'block', width: '728px', height: '90px' }}
  className="mx-auto"
/>

// 矩形广告 - 当前为空字符串，需要替换
<AdSense 
  adSlot="你的实际矩形广告位ID" // 替换 ""
  adFormat="rectangle"
  style={{ display: 'block', width: '336px', height: '280px' }}
  className="mx-auto"
/>

// 响应式广告 - 当前为空字符串，需要替换
<AdSense 
  adSlot="你的实际响应式广告位ID" // 替换 ""
  adFormat="auto"
  style={{ display: 'block', minHeight: '250px', maxWidth: '970px' }}
  className="mx-auto w-full max-w-4xl"
/>
```

### ⚠️ 重要提醒
- 现在页面会显示 `[AdSense Placeholder - Please configure real ad slot ID]` 占位符
- 这是正常的！这表示代码工作正常，只是还没有配置真实的广告位ID
- 不会再出现 TagError 了

## 如何在其他页面添加广告

### 方法1: 使用预定义配置
```tsx
import AdSense, { AdConfigs } from '@/components/AdSense';

// 使用横幅广告
<AdSense 
  adSlot={AdConfigs.banner.adSlot}
  adFormat={AdConfigs.banner.adFormat}
  style={AdConfigs.banner.style}
/>
```

### 方法2: 自定义配置
```tsx
import AdSense from '@/components/AdSense';

<AdSense 
  adSlot="你的广告位ID"
  adFormat="auto"
  style={{ display: 'block' }}
  className="my-4"
/>
```

## 最佳实践

1. **广告位置**: 在内容之间自然插入，避免过于密集
2. **响应式**: 使用响应式广告适配不同设备
3. **加载性能**: 广告异步加载，不影响页面性能
4. **用户体验**: 合理控制广告数量和位置

## 测试

部署后，在浏览器开发者工具中检查：
1. AdSense 脚本是否正确加载
2. 广告位是否正确初始化
3. 控制台是否有错误信息

## 注意事项

- 广告需要网站有一定流量才会显示
- 测试环境可能不显示真实广告
- 确保遵守 Google AdSense 政策
- 建议在生产环境中测试最终效果 