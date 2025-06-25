# 网站图标文件

请将以下图标文件放置在此文件夹中：

## 必需文件

1. **favicon.ico** - 传统浏览器图标 (16x16, 32x32)
   - 格式：ICO
   - 大小：16x16 和 32x32 像素
   - 用途：浏览器标签页和书签

2. **icon.png** - 现代浏览器图标
   - 格式：PNG
   - 大小：32x32 像素
   - 用途：现代浏览器的标签页图标

## 可选文件

3. **apple-touch-icon.png** - iOS 设备图标
   - 格式：PNG
   - 大小：180x180 像素
   - 用途：iOS 设备添加到主屏幕时的图标

4. **android-chrome-192x192.png** - Android 设备图标
   - 格式：PNG
   - 大小：192x192 像素
   - 用途：Android 设备添加到主屏幕时的图标

5. **android-chrome-512x512.png** - Android 设备大图标
   - 格式：PNG
   - 大小：512x512 像素
   - 用途：Android 设备高分辨率显示

## 推荐工具

- 在线生成器：https://realfavicongenerator.net/
- 图标设计：Figma, Adobe Illustrator, 或在线工具

## 注意事项

- 所有图标文件都应该放在 `public` 文件夹的根目录
- 文件名必须与 `layout.tsx` 中的配置匹配
- 建议使用透明背景的 PNG 格式
- 确保图标在不同尺寸下都清晰可见 