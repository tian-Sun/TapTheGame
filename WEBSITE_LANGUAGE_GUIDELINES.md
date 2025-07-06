# Website Language Guidelines for TapTheGame Web

## 🌐 CRITICAL LANGUAGE REQUIREMENT

**ALL CONTENT ON TAPTHEGAME WEB MUST BE IN ENGLISH ONLY**

This document outlines the mandatory language requirements for all content, code, and user-facing elements on TapTheGame Web. Following these guidelines is essential for maintaining consistency, SEO optimization, and international accessibility.

---

## 📋 Language Requirements by Content Type

### ✅ **User-Facing Content (MUST be English)**

#### 1. **Website Metadata (TDK)**
- **Title tags**: English only
- **Meta descriptions**: English only  
- **Keywords**: English only
- **OpenGraph data**: English only
- **Twitter card data**: English only

#### 2. **Page Content**
- **Headings (H1, H2, H3, etc.)**: English only
- **Body text**: English only
- **Button labels**: English only
- **Navigation menus**: English only
- **Form labels and placeholders**: English only
- **Error messages**: English only
- **Success messages**: English only

#### 3. **Game Information**
- **Game titles**: English only
- **Game descriptions**: English only
- **Game instructions**: English only
- **Game tips**: English only
- **Control descriptions**: English only

#### 4. **Categories and Tags**
- **Category names**: English only (e.g., "Action Games", "Puzzle Games")
- **Game tags**: English only
- **Filter labels**: English only

#### 5. **Footer and Legal Pages**
- **Footer links**: English only
- **Privacy policy**: English only
- **Terms of service**: English only
- **About page**: English only
- **Contact information**: English only

### ✅ **Code Comments and Documentation**

#### 1. **Code Comments**
- **Component comments**: English only
- **Function documentation**: English only
- **Inline comments**: English only
- **CSS comments**: English only

```typescript
// ✅ CORRECT: English comments
// Handle user authentication flow
const handleAuth = () => { ... }

// ❌ WRONG: Chinese comments  
// 处理用户认证流程
const handleAuth = () => { ... }
```

#### 2. **Variable and Function Names**
- Use English words for naming
- Follow camelCase convention
- Be descriptive and clear

---

## 🚫 **Removed Content Categories**

The following game categories have been **permanently removed** and should **NEVER** be referenced:

### ❌ **Deleted Categories:**
1. **Fighting** (`fighting`)
2. **Sports** (`sports`)
3. **Car** (`car`)
4. **Shooter** (`shooter`)

### ⚠️ **Do NOT include these in:**
- Game category lists
- Keywords
- Navigation menus
- Sitemap
- Category pages
- Filter options
- SEO content

---

## 🎯 **Current Valid Categories**

Only use these approved game categories:

### ✅ **Active Categories:**
1. **All Games** (`all`)
2. **IO Games** (`io`) 
3. **Action** (`action`)
4. **Casual** (`casual`)
5. **Puzzle** (`puzzle`)
6. **Racing** (`racing`)
7. **Clicker** (`clicker`)

---

## 📊 **SEO Keyword Guidelines**

### Current Optimized Keywords (95 characters):
```
HTML5 games, free online games, mini games, browser games, TapTheGame, action games, puzzle games
```

### ⚠️ **Keyword Rules:**
- **Maximum**: 100 characters total
- **Focus**: Core gaming terms only
- **Avoid**: Removed categories (fighting, sports)
- **Include**: Brand name "TapTheGame"
- **Priority**: HTML5, free, online, games

---

## 🔍 **Quality Checklist**

Before any content goes live, verify:

### ✅ **Content Review:**
- [ ] All text is in English
- [ ] No Chinese characters anywhere
- [ ] No references to deleted categories
- [ ] Keywords under 100 characters
- [ ] Brand name "TapTheGame" included
- [ ] Game descriptions are clear and engaging

### ✅ **Technical Review:**
- [ ] HTML `lang="en"` attribute set
- [ ] OpenGraph `locale="en_US"` 
- [ ] All metadata in English
- [ ] 404 page in English
- [ ] Error messages in English

### ✅ **SEO Review:**
- [ ] Title tags optimized
- [ ] Meta descriptions compelling
- [ ] Keywords relevant and concise
- [ ] No duplicate content
- [ ] Internal links use English anchor text

---

## 🛠 **Implementation Guidelines**

### For Developers:
1. **Always code in English**
2. **Use English comments only**
3. **Test all user-facing text**
4. **Validate metadata before deployment**

### For Content:
1. **Write clear, engaging descriptions**
2. **Use action-oriented language**
3. **Keep SEO keywords natural**
4. **Maintain consistent tone**

### For QA:
1. **Check all new content for language**
2. **Verify removed categories don't appear**
3. **Test keyword character count**
4. **Validate international accessibility**

---

## 🚨 **Emergency Protocol**

If any Chinese text or deleted categories are found:

1. **Immediate**: Remove/replace with English
2. **Review**: Check related content  
3. **Update**: This document if needed
4. **Deploy**: Fix as priority patch

---

## 📞 **Contact**

For questions about language guidelines:
- **Email**: contact@tapthegame.com
- **Priority**: Critical for all content changes

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Status**: MANDATORY COMPLIANCE REQUIRED 