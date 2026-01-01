// Google Analytics event tracking utilities

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track product view
 * @param {string} productId - Product identifier
 * @param {string} productName - Product name
 */
export const trackProductView = (productId, productName) => {
  trackEvent('view_item', {
    item_id: productId,
    item_name: productName,
    item_category: 'Calendar',
  });
};

/**
 * Track product click from listing/carousel
 * @param {string} productId - Product identifier
 * @param {string} productName - Product name
 * @param {string} location - Where the click happened (e.g., 'home_carousel', 'products_page')
 */
export const trackProductClick = (productId, productName, location = 'unknown') => {
  trackEvent('select_item', {
    item_id: productId,
    item_name: productName,
    item_category: 'Calendar',
    click_location: location,
  });
};

/**
 * Track order button click
 * @param {string} productId - Product identifier
 * @param {string} productName - Product name
 * @param {number} price - Product price
 */
export const trackOrderClick = (productId, productName, price) => {
  trackEvent('begin_checkout', {
    item_id: productId,
    item_name: productName,
    item_category: 'Calendar',
    value: price,
    currency: 'INR',
  });
};

/**
 * Track "Explore Collection" CTA click
 */
export const trackExploreCollectionClick = () => {
  trackEvent('cta_click', {
    cta_name: 'Explore Collection',
    cta_location: 'hero_section',
  });
};

/**
 * Track email click
 * @param {string} location - Where the email was clicked from
 */
export const trackEmailClick = (location = 'unknown') => {
  trackEvent('contact_click', {
    contact_method: 'email',
    contact_location: location,
  });
};
