# Favicon Setup Guide

## Option 1: App Directory (Recommended for Next.js 14)

Place your favicon files directly in the `app` directory. Next.js will automatically detect and use them:

### Files to add to `app/` directory:
- `icon.ico` or `icon.png` - Main favicon (16x16, 32x32, or any size)
- `apple-icon.png` - Apple touch icon (180x180 recommended)
- `favicon.ico` - Traditional favicon (optional, for older browsers)

**Example:**
```
app/
  ├── icon.ico          ← Main favicon
  ├── apple-icon.png    ← iOS home screen icon
  └── ...
```

Next.js will automatically:
- Generate the proper `<link>` tags in the HTML head
- Handle different sizes and formats
- Optimize the icons

## Option 2: Public Directory (Traditional)

Place favicon files in the `public` directory:

### Files to add to `public/` directory:
- `favicon.ico` - Main favicon
- `icon-192.png` - PWA icon (192x192) - Already referenced in manifest
- `icon-512.png` - PWA icon (512x512) - Already referenced in manifest

**Example:**
```
public/
  ├── favicon.ico       ← Main favicon
  ├── icon-192.png      ← PWA icon (already in manifest)
  ├── icon-512.png      ← PWA icon (already in manifest)
  └── ...
```

## Recommended Sizes

- **favicon.ico**: 16x16, 32x32, 48x48 (multi-size ICO file)
- **icon.png**: 32x32 or 64x64
- **apple-icon.png**: 180x180
- **icon-192.png**: 192x192 (for PWA)
- **icon-512.png**: 512x512 (for PWA)

## Quick Setup

1. Create or download your favicon files
2. For **Option 1**: Place `icon.ico` and `apple-icon.png` in the `app/` folder
3. For **Option 2**: Place `favicon.ico` in the `public/` folder (and update icon-192.png, icon-512.png if needed)

## Online Favicon Generators

- [Favicon.io](https://favicon.io/) - Generate from text/image
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive generator
- [Favicon Generator](https://www.favicon-generator.org/) - Simple generator

## Testing

After adding your favicon:
1. Restart your dev server (`npm run dev`)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check browser tab - favicon should appear
4. For PWA icons, test on mobile device home screen

