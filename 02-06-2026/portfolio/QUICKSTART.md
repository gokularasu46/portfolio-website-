# Quick Start Guide - Gokularasu K Portfolio

## 🎯 5-Minute Setup

### Step 1: Prepare Your Files
1. **Profile Image**
   - Size: 400x400px (square)
   - Format: JPG or PNG
   - Quality: High resolution
   - Location: `assets/images/profile.jpg`

2. **Resume**
   - Format: PDF
   - Location: `assets/resume.pdf`

### Step 2: Update HTML Content
Open `index.html` and find these sections to customize:

#### Personal Information
```html
Line 61: <h1>Hi, I'm <span>Your Name</span></h1>
Line 63: <p>Your Designation | Your Tagline</p>
Line 66: <p>Your introduction paragraph...</p>
```

#### About Section
```html
Line 123: <p>Your personal introduction...</p>
Line 131: <p>Your career objective...</p>
```

#### Social Links
```html
Line 106-117: Update your social media URLs
Line 117: <a href="mailto:your-email@example.com">Email</a>
```

### Step 3: View Your Portfolio
**Option A - Simple (Double-click HTML)**
```
Double-click index.html → Opens in browser
```

**Option B - Python Server**
```bash
cd portfolio
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option C - VS Code Live Server**
```
Right-click index.html → Open with Live Server
```

## 🎨 Color Customization

Edit `css/styles.css` (Lines 4-19):

```css
:root {
    --dark-blue: #0f1419;        /* Main background */
    --sky-blue: #00d4ff;         /* Primary accent */
    --text-light: #e8e8e8;       /* Text color */
    --text-muted: #b0b0b0;       /* Muted text */
}
```

### Popular Color Combinations:

**Purple & Pink**
```css
--dark-blue: #1a0033;
--sky-blue: #ff006e;
```

**Green & Teal**
```css
--dark-blue: #0d1b2a;
--sky-blue: #1dd1a1;
```

**Orange & Yellow**
```css
--dark-blue: #2b1508;
--sky-blue: #ff8c42;
```

## 📝 Content Update Checklist

- [ ] Replace profile image (`assets/images/profile.jpg`)
- [ ] Add resume PDF (`assets/resume.pdf`)
- [ ] Update full name in hero section
- [ ] Update designation/tagline
- [ ] Update introduction paragraph
- [ ] Update about me section
- [ ] Update career objective
- [ ] Add LinkedIn profile URL
- [ ] Add GitHub profile URL
- [ ] Add Twitter profile URL (optional)
- [ ] Update email address
- [ ] Test on mobile device
- [ ] Deploy online

## 🚀 Deployment (Pick One)

### GitHub Pages (Easiest)
```
1. Create repo: yourusername.github.io
2. Push portfolio files
3. Site live: https://yourusername.github.io
```

### Netlify
```
1. Go to netlify.com
2. Drag & drop portfolio folder
3. Instant deployment!
```

### Vercel
```
1. Go to vercel.com
2. Import from GitHub
3. Auto-deploy on push
```

## 🎯 Customization Examples

### Change Font
In `index.html`, update:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap">
```

### Add New Section
Copy existing section structure:
```html
<section class="your-section" id="your-section">
    <div class="section-container">
        <div class="section-header">
            <h2 class="section-title">Your Title</h2>
            <div class="title-underline"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Change Button Colors
In `css/styles.css`, find `.btn-primary` and `.btn-secondary` and modify the colors.

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress using TinyPNG or similar
   - Use WebP format if supported

2. **Minify Code** (Optional)
   - Use online minifiers
   - Reduces file size

3. **Enable Caching**
   - Hosting providers usually do this automatically

4. **Use CDN**
   - Font Awesome and Google Fonts are already on CDN

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match HTML
- Ensure images are in `assets/images/` folder
- Use correct file extensions (.jpg, .png)

**Links not working?**
- Verify file paths are correct
- Check for typos in href attributes
- Test locally first before deploying

**Styles not applying?**
- Check if CSS file is linked correctly in HTML
- Clear browser cache (Ctrl+Shift+Delete)
- Check for CSS syntax errors

**Mobile menu not working?**
- Ensure JavaScript file is linked
- Check browser console for errors (F12)
- Verify script.js is in `js/` folder

## 📊 Analytics Setup (Optional)

Add Google Analytics to `index.html` before closing `</body>` tag:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 💡 SEO Tips

1. **Meta Tags** - Already included in HTML
2. **Keywords** - Update in `<meta name="keywords">`
3. **Descriptions** - Update in `<meta name="description">`
4. **Open Graph** - Add for social sharing:

```html
<meta property="og:title" content="Gokularasu K - Portfolio">
<meta property="og:description" content="AI & Data Analytics Enthusiast">
<meta property="og:image" content="assets/images/profile.jpg">
```

## 🆘 Need Help?

- Check `README.md` for full documentation
- Review code comments in CSS and JS
- Test in different browsers
- Check browser console (F12) for errors

---

**Happy coding! Good luck with your portfolio! 🚀**
