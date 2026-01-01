# Aganadhiram Creations Website

A beautiful, mobile-friendly website for selling wildlife art and photography under the brand "Aganadhiram Creations".

## Features

- **Auto-Rotating Hero Carousel**: Showcase 25 wildlife images in randomized order on every page load
- **Home Page**: Dynamic hero section with wildlife photography carousel, about section, and featured product
- **Products Page**: Product catalog with pricing and detailed descriptions
- **Product Details Page**: Detailed product information with image gallery
- **Mobile-First Responsive Design**: Optimized UX for mobile (clean photos) and desktop (full overlays)
- **React + Vite**: Modern development stack with hot module replacement
- **React Router**: Client-side routing for smooth navigation
- Ready for Netlify deployment
- Prepared for future RazorPay integration

## Project Structure

```
aganadhiran.in/
├── index.html                        # Entry HTML file
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
├── netlify.toml                      # Netlify deployment config
├── package.json                      # Dependencies and scripts
├── public/                           # Static assets
└── src/
    ├── main.jsx                      # React entry point
    ├── App.jsx                       # Root component with router
    ├── components/
    │   ├── Header.jsx                # Site header with navigation
    │   ├── Footer.jsx                # Site footer
    │   └── Layout.jsx                # Page layout wrapper
    ├── pages/
    │   ├── Home.jsx                  # Home page with carousel
    │   ├── Products.jsx              # Products listing
    │   ├── ProductDetail.jsx         # Product details
    │   └── NotFound.jsx              # 404 page
    ├── styles/
    │   └── index.css                 # Main stylesheet
    └── assets/
        └── images/                   # Image assets
```

## Hero Carousel Features

- **Randomized Order**: Images shuffle using Fisher-Yates algorithm on every page load
- **Auto-Rotation**: Cycles through images every 5 seconds
- **Manual Navigation**: Carousel dots for direct slide access (hidden on mobile)
- **Mobile Optimization**: Clean, full-screen photos without overlays on mobile devices
- **Desktop Enhancement**: Bottom overlay bar with branding and CTAs on larger screens

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS version)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start local development server with hot reload
npm run dev
```

This will start Vite development server at `http://localhost:3000` with hot module replacement.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Check code formatting
npm run format:check

# Format code
npm run format
```

## Deployment

The site is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Build settings are already configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

Netlify will automatically build the React app and serve the optimized production bundle.

## Future Enhancements

- [ ] Replace product placeholder SVGs with actual calendar photos
- [ ] Add RazorPay payment integration
- [ ] Add more products to catalog
- [ ] Add image lightbox/gallery for product images
- [ ] Add customer reviews section
- [ ] Add newsletter signup
- [ ] Update social media links

## Tech Stack

- **React 18.3.1** - Component-based UI library
- **React Router 7.1.0** - Client-side routing
- **Vite 6.0.5** - Fast build tool and dev server
- **CSS3** - Custom properties, Flexbox, Grid, animations, backdrop-filter
- **Google Fonts** - Playfair Display & Open Sans
- **ESLint & Prettier** - Code quality and formatting
- **Netlify** - Hosting and deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

All photographs and content © 2026 Aganadhiram Creations. All rights reserved.
