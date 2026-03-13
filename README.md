# Mateusz Portfolio - HTML/CSS Version


This is a static HTML/CSS version of the Next.js portfolio. No Node.js or build tools required—just open in a browser or use a simple local server.

## Project Structure

```
mateusz-website-html/
├── index.html          # Main homepage
├── css/
│   └── styles.css     # Compiled styles (from SCSS)
├── js/
│   ├── data.js        # Content data (for reference)
│   └── main.js        # Menu, sliders, scroll-to-top
├── images/            # Images (copied from Next.js public/images)
├── portfolio/         # Portfolio project detail pages
├── blog/              # Blog post detail pages
│   ├── blog-post-title.html
│   ├── blog-post-title-1.html
│   └── blog-post-title-2.html
└── README.md
```

## How to Run Locally

### Option 1: Open directly in browser
Double-click `index.html` or drag it into your browser. Some features (like smooth scrolling to anchors) may work better with a local server.

### Option 2: Use a simple local server (recommended)

**Python 3:**
```bash
cd mateusz-website-html
python -m http.server 8000
```
Then open http://localhost:8000

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (if you have it):**
```bash
npx serve .
```
Then open the URL shown (e.g. http://localhost:3000)

**VS Code Live Server:**
Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

## Dependencies (loaded via CDN)

- Bootstrap 5.3
- Bootstrap Icons
- Swiper (carousels/sliders)
- Google Fonts (Open Sans, Outfit)

No `npm install` needed.

## Differences from Next.js Version

- **Contact form**: No backend. To enable form submission, use a service like [Formspree](https://formspree.io/) or add your own API.
- **Google Maps**: Map area is a placeholder. Add your Google Maps API key and embed script for full functionality.
- **No Cursor effect**: The custom cursor from the Next.js version is omitted for simplicity (mobile-friendly).

## Updating Styles

If you modify the original Next.js SCSS and want to update the HTML version:

```bash
cd mateusz-website
npx sass styles/theme.scss ../mateusz-website-html/css/styles.css --no-source-map
```
"# MateuszPortfolio" 
