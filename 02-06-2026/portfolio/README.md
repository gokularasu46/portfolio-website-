# Gokularasu K - Personal Portfolio Website

A modern, responsive, and professional personal portfolio website for a Computer Science and Business Systems student passionate about AI, Data Analytics, and Web Development.

## 📋 Project Overview

This portfolio website showcases:
- **Professional Profile**: Full name, designation, and introductory content
- **Navigation**: Sticky navigation bar with smooth scrolling
- **Hero Section**: Eye-catching introduction with profile image and action buttons
- **About Me**: Personal introduction, career objectives, and areas of interest
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Dark Blue and Sky Blue color theme with professional typography

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file with semantic markup
├── css/
│   └── styles.css         # Comprehensive CSS with responsive design
├── js/
│   └── script.js          # Interactive JavaScript functionality
├── assets/
│   ├── images/            # Image assets folder
│   │   └── profile.jpg    # Profile picture (place your image here)
│   └── resume.pdf         # Resume file for download
└── README.md              # Project documentation
```

## 🎨 Design Features

### Color Theme
- **Primary**: Dark Blue (#0f1419)
- **Accent**: Sky Blue (#00d4ff)
- **Text**: Light Gray (#e8e8e8)
- **Muted**: Muted Gray (#b0b0b0)

### Typography
- **Primary Font**: Poppins (headings and UI)
- **Secondary Font**: Roboto (body text)
- **Professional Sizing**: Scalable font sizes for readability

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

### 1. Setup Instructions

1. **Download/Clone the Project**
   ```bash
   # Navigate to the portfolio folder
   cd portfolio
   ```

2. **Add Your Profile Image**
   - Replace `assets/images/profile.jpg` with your profile picture
   - Image should be square (1:1 ratio) for best results
   - Recommended size: 400x400px or larger

3. **Add Your Resume**
   - Replace `assets/resume.pdf` with your resume PDF
   - Users can download it using the "Download Resume" button

4. **Update Contact Information**
   - Open `index.html` in a text editor
   - Update the social media links with your profiles:
     - LinkedIn
     - GitHub
     - Twitter
     - Email address

### 2. Customization

#### Update Personal Information
Edit the following sections in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Designation | Your Tagline</p>
<p class="hero-description">Your introduction paragraph...</p>

<!-- About Section -->
<p class="about-paragraph">Your personal introduction...</p>

<!-- Social Links -->
<a href="https://your-linkedin-url" target="_blank">LinkedIn</a>
<a href="https://your-github-url" target="_blank">GitHub</a>
```

#### Modify Color Theme
Edit CSS variables in `css/styles.css`:

```css
:root {
    --dark-blue: #0f1419;      /* Main background */
    --sky-blue: #00d4ff;       /* Primary accent */
    --text-light: #e8e8e8;     /* Main text color */
    --text-muted: #b0b0b0;     /* Muted text color */
}
```

#### Add More Sections
The HTML already includes placeholder sections for:
- Skills
- Projects
- Education
- Contact

Update these sections with your content following the existing pattern.

### 3. Running the Website

#### Option 1: Local File (Simple)
1. Double-click `index.html` in your file explorer
2. The website will open in your default browser

#### Option 2: Local Server (Recommended)
Use Python's built-in server:

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000` in your browser

#### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will automatically open and refresh on changes

### 4. Deployment

#### GitHub Pages (Free)
1. Create a new repository named `yourusername.github.io`
2. Push your portfolio files to this repository
3. Your site will be live at `https://yourusername.github.io`

#### Other Hosting Options
- **Netlify**: Connect GitHub repository for automatic deployment
- **Vercel**: Similar to Netlify, with easy setup
- **Firebase Hosting**: Google's hosting solution
- **Shared Web Hosting**: Traditional hosting providers

## 🎯 Features Implemented

### Navigation Bar
- ✅ Sticky positioning for easy access
- ✅ Responsive hamburger menu for mobile
- ✅ Smooth navigation links
- ✅ Logo with branding

### Hero Section
- ✅ Professional profile image display
- ✅ Full name and designation
- ✅ Introduction paragraph
- ✅ Download Resume button
- ✅ Contact Me button
- ✅ Social media links
- ✅ Animated scroll indicator

### About Me Section
- ✅ Personal introduction
- ✅ Career objectives
- ✅ Interactive interest cards (6 areas)
- ✅ Hover animations and transitions

### Responsive Design
- ✅ Mobile-first approach
- ✅ Flexible grid layouts
- ✅ Media queries for all screen sizes
- ✅ Touch-friendly buttons

### Interactive Features
- ✅ Smooth scrolling
- ✅ Hamburger menu toggle
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Animated decorations

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6)**: Interactive functionality
- **Google Fonts**: Professional typography
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach

## 📝 Code Quality

### HTML
- Semantic HTML5 elements
- Proper accessibility attributes
- Meta tags for SEO
- Responsive viewport settings

### CSS
- Organized with comments
- CSS custom properties (variables)
- BEM-inspired naming convention
- Mobile-first responsive design
- Optimized animations

### JavaScript
- Clean, well-documented code
- Event delegation
- Intersection Observer API for performance
- Error handling
- No external dependencies

## 🎓 Learning Resources

- **HTML5**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS3**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Responsive Design**: [Google Developers](https://developers.google.com/web/fundamentals/design-and-ux/responsive)

## 📞 Contact & Support

For questions or suggestions about this portfolio template, feel free to reach out!

## 📄 License

This portfolio template is free to use, modify, and distribute for personal and commercial purposes.

## ✨ Tips for Best Results

1. **Professional Profile Photo**: Use a high-quality, professional headshot
2. **Resume Quality**: Keep your resume updated and polished
3. **Content**: Write clear and concise descriptions
4. **Images**: Optimize images for web to improve loading times
5. **Social Links**: Make sure all social media links are active
6. **Testing**: Test on multiple devices and browsers before deployment
7. **SEO**: Update meta descriptions and keywords in HTML
8. **Analytics**: Add Google Analytics for traffic tracking

## 🚀 Future Enhancements

Consider adding:
- Dark/Light theme toggle
- Multi-language support
- Blog section
- Contact form with backend
- Project filtering
- Skills progress bars
- Timeline for experience
- Testimonials section

---

**Created with ❤️ for your professional success!**

Last Updated: June 2026
