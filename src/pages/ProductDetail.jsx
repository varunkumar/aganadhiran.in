import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import calendarCover from '../assets/images/products/calendar-2026-cover.png';
import calendarFront from '../assets/images/products/calendar-2026-front.png';
import calendarJanuary from '../assets/images/products/calendar-2026-jan.png';
import calendarJuly from '../assets/images/products/calendar-2026-jul.png';
import calendarMay from '../assets/images/products/calendar-2026-may.png';
import { trackOrderClick, trackProductView } from '../utils/analytics';

const images = [
  { src: calendarCover, alt: 'Calendar Cover' },
  { src: calendarFront, alt: 'Calendar Front' },
  { src: calendarJanuary, alt: 'January - Wildlife' },
  { src: calendarMay, alt: 'May - Wildlife' },
  { src: calendarJuly, alt: 'July - Wildlife' },
];

function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);

  // Track product view on page load
  useEffect(() => {
    document.title = 'Wildlife Desk Calendar 2026 | Aganadhiram Creations';
    trackProductView('wildlife-calendar-2026', 'Wildlife Desk Calendar 2026');

    // Load RazorPay embed button script
    const existingScript = document.getElementById('razorpay-embed-btn-js');
    if (!existingScript) {
      const script = document.createElement('script');
      script.defer = true;
      script.id = 'razorpay-embed-btn-js';
      script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
      document.body.appendChild(script);
    } else {
      const rzp = window['__rzp__'];
      if (rzp && rzp.init) rzp.init();
    }
  }, []);

  return (
    <>
      {/* Product Details */}
      <div className="product-detail">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="product-detail__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/products">Shop</Link>
            <span> / </span>
            <span>Wildlife Desk Calendar 2026</span>
          </nav>

          <div className="product-detail__grid">
            {/* Gallery */}
            <div className="product-detail__gallery">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="product-detail__main-image"
              />
              <div className="product-detail__thumbnails">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`product-detail__thumbnail ${index === activeImage ? 'product-detail__thumbnail--active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="product-detail__info">
              <p className="product-detail__category">Desk Calendar</p>
              <h1 className="product-detail__title">Wildlife Desk Calendar 2026</h1>
              <p className="product-detail__price">₹590</p>

              <p className="product-detail__description">
                Welcome 2026 with the calm and strength of the wild. This Wildlife Desk Calendar
                2026 features original Indian wildlife photography, bringing the beauty of forests
                and animals to your everyday workspace. Each month showcases a carefully captured
                photograph paired with a clear and practical calendar layout, making it easy to plan
                your days while enjoying nature-inspired visuals.
              </p>

              <div className="product-detail__features">
                <h2 className="product-detail__features-title">Product Highlights</h2>
                <ul className="product-detail__features-list">
                  <li className="product-detail__feature">
                    <span className="product-detail__feature-icon">✓</span>
                    <span>
                      <strong>Original Wildlife Photography:</strong> Featuring Indian wildlife with
                      a different animal or natural scene each month
                    </span>
                  </li>
                  <li className="product-detail__feature">
                    <span className="product-detail__feature-icon">✓</span>
                    <span>
                      <strong>Spiral Bound Tabletop Design:</strong> Pages flip smoothly and lay
                      flat, designed to sit neatly on desks, study tables, and office workspaces
                    </span>
                  </li>
                  <li className="product-detail__feature">
                    <span className="product-detail__feature-icon">✓</span>
                    <span>
                      <strong>Premium Quality Printing:</strong> Thick paper with vibrant colours
                      and clear date layout for easy daily reference
                    </span>
                  </li>
                  <li className="product-detail__feature">
                    <span className="product-detail__feature-icon">✓</span>
                    <span>
                      <strong>Made in India:</strong> Designed and produced by Aganadhiram Creations
                    </span>
                  </li>
                  <li className="product-detail__feature">
                    <span className="product-detail__feature-icon">✓</span>
                    <span>
                      <strong>Perfect Gift:</strong> Ideal for nature lovers, photography
                      enthusiasts, colleagues, friends, and family
                    </span>
                  </li>
                </ul>
              </div>

              <div className="product-detail__actions">
                <div className="product-detail__stock">
                  <span className="product-detail__stock-dot"></span>
                  <span>In Stock - Ready to Ship</span>
                </div>
              </div>

              <div className="product-detail__buy-section">
                <p className="product-detail__shipping-info">
                  <strong>Shipping:</strong> Free shipping. Dispatched within 2-3 business days
                </p>

                <div
                  className="razorpay-embed-btn"
                  data-url="https://pages.razorpay.com/pl_Rz0dWKII9NYB2C/view"
                  data-text="Order Now - ₹590"
                  data-color="#BA6118"
                  data-size="large"
                  onClick={() =>
                    trackOrderClick('wildlife-calendar-2026', 'Wildlife Desk Calendar 2026', 590)
                  }
                ></div>

                <p className="product-detail__payment-note">
                  Secure payment via RazorPay. UPI, Cards, Net Banking accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="section__header">
            <h2 className="section__title">About This Calendar</h2>
          </div>
          <div className="product-description">
            <p>
              Welcome 2026 with the calm and strength of the wild. This Wildlife Desk Calendar 2026
              features original Indian wildlife photography, bringing the beauty of forests and
              animals to your everyday workspace.
            </p>
            <p>
              Each month showcases a carefully captured photograph paired with a clear and practical
              calendar layout, making it easy to plan your days while enjoying nature-inspired
              visuals. The spiral-bound tabletop format allows pages to flip smoothly and lay flat
              on your desk.
            </p>
            <p>
              Printed on premium quality paper, the calendar offers rich colours and fine detail,
              making it suitable for both home and office use. Designed and produced by Aganadhiram
              Creations, this desk calendar is ideal for wildlife enthusiasts, nature lovers, and
              anyone who appreciates photography.
            </p>
            <p>It also makes a thoughtful gift for colleagues, friends, and family.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
