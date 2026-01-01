# Google Analytics 4 Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (gear icon)
3. Create a new **Property**:
   - Property name: `Aganadhiram Creations`
   - Time zone: `India Standard Time`
   - Currency: `Indian Rupee (INR)`

## Step 2: Set Up Data Stream

1. In Property settings, click **"Data Streams"**
2. Click **"Add stream"** → **"Web"**
3. Enter your website details:
   - Website URL: `https://aganadhiran.in` (or your domain)
   - Stream name: `Aganadhiram Website`
4. Click **"Create stream"**

## Step 3: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
   - It looks like: `G-XXXXXXXXXX`
2. **Copy this ID** - you'll need it in the next step

## Step 4: Add Measurement ID to Your Website

Open `index.html` and replace `GA_MEASUREMENT_ID` with your actual ID:

```html
<!-- Replace BOTH occurrences -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); <!-- Your actual ID here -->
</script>
```

## Step 5: Deploy Your Website

After adding your Measurement ID:

```bash
npm run build
```

Deploy to Netlify (or your hosting platform).

## Step 6: Verify Tracking

1. Go back to Google Analytics
2. Navigate to **Reports** → **Realtime**
3. Open your website in a browser
4. You should see yourself as an active user within 30 seconds

## What We're Tracking

### 1. **Product Clicks** (Event: `select_item`)

- When users click product images on Products page
- When users click product titles
- When users click "View Details" buttons
- **Location tags**: `products_page_image`, `products_page_title`, `products_page_cta`, `home_featured`

### 2. **Order Button Clicks** (Event: `begin_checkout`)

- When users click "Order Now - ₹560" button
- Tracks: product name, price, currency

### 3. **CTA Clicks** (Event: `cta_click`)

- "Explore Collection" button on hero section

### 4. **Product Views** (Event: `view_item`)

- Automatically tracked when product detail page loads

## Viewing Analytics Data

### Real-time Reports

- **Admin → Property → Reports → Realtime**
- See current active users and their activities

### Event Reports

1. Go to **Reports** → **Engagement** → **Events**
2. You'll see all tracked events:
   - `select_item` - Product clicks
   - `begin_checkout` - Order button clicks
   - `cta_click` - CTA button clicks
   - `view_item` - Product page views

### Custom Reports

#### To see how many times order button was clicked:

1. Go to **Reports** → **Engagement** → **Events**
2. Click on `begin_checkout` event
3. View count and trends over time

#### To see product click breakdown by location:

1. Go to **Reports** → **Engagement** → **Events**
2. Click on `select_item` event
3. Add secondary dimension: `click_location`
4. You'll see breakdown: `products_page_image`, `products_page_title`, etc.

## Custom Dimensions (Optional - Advanced)

To add custom dimensions for better tracking:

1. Go to **Admin** → **Property** → **Custom definitions**
2. Click **"Create custom dimensions"**
3. Add these:
   - Dimension name: `Click Location`
   - Scope: Event
   - Event parameter: `click_location`

## Privacy & Cookie Consent (Important!)

Consider adding a cookie consent banner for compliance:

- GDPR (Europe)
- Indian data protection laws

Popular solutions:

- [Cookiebot](https://www.cookiebot.com/)
- [OneTrust](https://www.onetrust.com/)
- [CookieYes](https://www.cookieyes.com/)

## Troubleshooting

### Not seeing data?

1. Check if Measurement ID is correct in `index.html`
2. Open browser console - look for errors
3. Check if ad blockers are preventing tracking
4. Try in incognito mode

### Data delayed?

- Realtime reports are instant
- Standard reports can take 24-48 hours to populate

## Key Metrics to Monitor

- **Total order button clicks** - Conversion intent
- **Product click-through rate** - Engagement
- **Top click locations** - Where users engage most
- **Page views** - Traffic overview
- **Session duration** - User engagement

## Need Help?

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9744165)
