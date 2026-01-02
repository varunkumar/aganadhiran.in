import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import calendarCover from '../assets/images/products/calendar-2026-cover.png';
import { trackProductClick } from '../utils/analytics';

function Products() {
  useEffect(() => {
    document.title = 'Shop Wildlife Calendars | Aganadhiram Creations';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Shop</h1>
          <p className="page-header__description">
            Explore our collection of wildlife calendars and art prints. Each piece captures the raw
            beauty of nature.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {/* Wildlife Calendar 2026 */}
            <article className="product-card">
              <Link
                to="/products/wildlife-calendar-2026"
                className="product-card__image-container"
                onClick={() =>
                  trackProductClick(
                    'wildlife-calendar-2026',
                    'Wildlife Desk Calendar 2026',
                    'products_page_image'
                  )
                }
              >
                <img
                  src={calendarCover}
                  alt="Wildlife Desk Calendar 2026 - Original Indian wildlife photography"
                  className="product-card__image"
                />
                <span className="product-card__badge">New 2026</span>
              </Link>
              <div className="product-card__content">
                <p className="product-card__category">Desk Calendar</p>
                <h2 className="product-card__title">
                  <Link
                    to="/products/wildlife-calendar-2026"
                    onClick={() =>
                      trackProductClick(
                        'wildlife-calendar-2026',
                        'Wildlife Desk Calendar 2026',
                        'products_page_title'
                      )
                    }
                  >
                    Wildlife Desk Calendar 2026
                  </Link>
                </h2>
                <p className="product-card__description">
                  Original Indian wildlife photography with a different animal or natural scene each
                  month. Spiral bound tabletop design perfect for desks and workspaces.
                </p>
                <div className="product-card__footer">
                  <span className="product-card__price">₹590</span>
                  <Link
                    to="/products/wildlife-calendar-2026"
                    className="product-card__link"
                    onClick={() =>
                      trackProductClick(
                        'wildlife-calendar-2026',
                        'Wildlife Desk Calendar 2026',
                        'products_page_cta'
                      )
                    }
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </article>

            {/* Placeholder for future products */}
            <article className="product-card product-card--coming-soon">
              <div className="product-card__image-container">
                <div className="product-card__placeholder">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p>More Products Coming Soon</p>
                </div>
              </div>
              <div className="product-card__content">
                <p className="product-card__category">Art Prints</p>
                <h2 className="product-card__title">Coming Soon</h2>
                <p className="product-card__description">
                  We're working on bringing you more beautiful wildlife art prints. Stay tuned!
                </p>
                <div className="product-card__footer">
                  <span className="product-card__price">—</span>
                  <span className="product-card__link product-card__link--disabled">Notify Me</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="section__header">
            <p className="section__tagline">Custom Orders</p>
            <h2 className="section__title">Looking for Something Special?</h2>
            <p className="section__description">
              I also offer custom prints and commissions. Whether you're looking for a specific
              size, framing options, or a custom selection of photographs, I'd be happy to discuss
              your requirements.
            </p>
          </div>
          <div className="contact-cta">
            <a href="mailto:hello@aganadhiran.in" className="btn btn--primary btn--lg">
              Contact for Custom Orders
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
