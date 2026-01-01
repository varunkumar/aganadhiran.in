import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import calendarCover from '../assets/images/products/calendar-2026-cover.png';
import aboutPhoto from '../assets/images/varun.jpeg';
import { trackExploreCollectionClick, trackProductClick } from '../utils/analytics';

// Hero images from public folder for lazy loading
const baseHeroImages = [
  '/images/hero/tiger.jpg',
  '/images/hero/leo-3.jpg',
  '/images/hero/flamingo.jpg',
  '/images/hero/elephant.jpg',
  '/images/hero/peacock.jpg',
  '/images/hero/leo.jpg',
  '/images/hero/tiger-2.jpg',
  '/images/hero/gaur.jpg',
  '/images/hero/leo-5.jpg',
  '/images/hero/kite.jpg',
  '/images/hero/tiger-4.jpg',
  '/images/hero/mongoose.jpg',
  '/images/hero/bear.jpg',
  '/images/hero/tiger-5.jpg',
  '/images/hero/flamingo-1.jpg',
  '/images/hero/leo-7.jpg',
  '/images/hero/che.jpg',
  '/images/hero/leo-2.jpg',
  '/images/hero/ele.jpg',
  '/images/hero/leo-4.jpg',
  '/images/hero/tiger-3.jpg',
];

function Home() {
  // Shuffle images immediately on mount (no delay)
  const [heroImages] = useState(() => {
    const shuffled = [...baseHeroImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [_wheelDelta, setWheelDelta] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  const wheelThreshold = 100; // Accumulated wheel delta threshold

  useEffect(() => {
    // Set page title
    document.title = 'Aganadhiram Creations | Wildlife Art & Photography';
  }, []);

  // Preload adjacent images when index changes
  useEffect(() => {
    if (heroImages.length === 0) return;

    const prevIndex = currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1;
    const nextIndex = (currentImageIndex + 1) % heroImages.length;

    // Preload adjacent images in background
    [prevIndex, nextIndex].forEach((idx) => {
      const img = new Image();
      img.src = heroImages[idx];
    });
  }, [currentImageIndex, heroImages]);

  useEffect(() => {
    // Auto-rotate images every 5 seconds
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const onWheel = (e) => {
    // Only respond to horizontal scrolling (Magic Mouse, trackpad)
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    e.preventDefault();

    setWheelDelta((prev) => {
      const newDelta = prev + e.deltaX;

      if (newDelta > wheelThreshold) {
        goToNext();
        return 0;
      } else if (newDelta < -wheelThreshold) {
        goToPrevious();
        return 0;
      }

      return newDelta;
    });

    // Reset wheel delta after inactivity
    setTimeout(() => setWheelDelta(0), 200);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
      >
        <div className="hero__background">
          {/* Render current, previous, and next images */}
          {(() => {
            const prevIndex =
              currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1;
            const nextIndex = (currentImageIndex + 1) % heroImages.length;

            return [
              // Preload previous (hidden)
              <img
                key={`prev-${prevIndex}`}
                src={heroImages[prevIndex]}
                alt=""
                style={{ display: 'none' }}
              />,
              // Current visible image
              <img
                key={`current-${currentImageIndex}`}
                src={heroImages[currentImageIndex]}
                alt="Majestic wildlife in natural habitat"
                className="hero__image"
              />,
              // Preload next (hidden)
              <img
                key={`next-${nextIndex}`}
                src={heroImages[nextIndex]}
                alt=""
                style={{ display: 'none' }}
              />,
            ];
          })()}
        </div>

        {/* Bottom bar with content */}
        <div className="hero__bottom-bar">
          <div className="container">
            <div className="hero__bottom-content">
              <div className="hero__text">
                <p className="hero__tagline">Wildlife Art & Photography</p>
                <h1 className="hero__title">Aganadhiram Creations</h1>
                <p className="hero__description">
                  Celebrating the untamed beauty of nature through wildlife art and photography.
                  Designed and produced in India.
                </p>
              </div>
              <div className="hero__cta">
                <Link
                  to="/products"
                  className="btn btn--primary btn--lg"
                  onClick={() => trackExploreCollectionClick()}
                >
                  Explore Collection
                </Link>
                <a href="#about" className="btn btn--secondary btn--lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="hero__indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero__indicator ${index === currentImageIndex ? 'hero__indicator--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <p className="section__tagline">New Arrival</p>
            <h2 className="section__title">Wildlife Desk Calendar 2026</h2>
            <p className="section__description">
              Welcome 2026 with the calm and strength of the wild. Bring the beauty of forests and
              animals to your everyday workspace.
            </p>
          </div>

          <div className="featured-product">
            <div className="featured-product__gallery">
              <span className="featured-product__badge">New for 2026</span>
              <img
                src={calendarCover}
                alt="Wildlife Desk Calendar 2026 featuring original Indian wildlife photography"
                className="featured-product__main-image"
              />
            </div>

            <div className="featured-product__content">
              <p className="featured-product__category">Desk Calendar</p>
              <h3 className="featured-product__title">Wildlife Desk Calendar 2026</h3>
              <p className="featured-product__description">
                This Wildlife Desk Calendar 2026 features original Indian wildlife photography,
                bringing the beauty of forests and animals to your everyday workspace. Each month
                showcases a carefully captured photograph paired with a clear and practical calendar
                layout.
              </p>

              <ul className="featured-product__features">
                <li className="featured-product__feature">
                  <span className="featured-product__feature-icon">✓</span>
                  <span>Original Indian wildlife photography</span>
                </li>
                <li className="featured-product__feature">
                  <span className="featured-product__feature-icon">✓</span>
                  <span>Spiral bound tabletop design</span>
                </li>
                <li className="featured-product__feature">
                  <span className="featured-product__feature-icon">✓</span>
                  <span>Premium quality printing on thick paper</span>
                </li>
                <li className="featured-product__feature">
                  <span className="featured-product__feature-icon">✓</span>
                  <span>Vibrant colours with clear date layout</span>
                </li>
                <li className="featured-product__feature">
                  <span className="featured-product__feature-icon">✓</span>
                  <span>Designed and produced in India</span>
                </li>
              </ul>

              <p className="featured-product__price">
                ₹560
                <span className="featured-product__price-note">(Incl. taxes & Shipping)</span>
              </p>

              <Link
                to="/products/wildlife-calendar-2026"
                className="btn btn--primary btn--lg"
                onClick={() =>
                  trackProductClick(
                    'wildlife-calendar-2026',
                    'Wildlife Desk Calendar 2026',
                    'home_featured'
                  )
                }
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="about">
            <div className="about__image-container">
              <img
                src={aboutPhoto}
                alt="Wildlife photographer in action"
                className="about__image"
              />
              <div className="about__image-accent" aria-hidden="true"></div>
            </div>

            <div className="about__content">
              <h2 className="about__title">About the Artist</h2>
              <p className="about__text">
                Welcome to Aganadhiram Creations! My journey into wildlife photography began with a
                simple fascination for the natural world. Over the years, this passion has taken me
                deep into forests, wetlands, and mountains across India and around the world,
                capturing moments that reveal the raw beauty and delicate balance of nature.
              </p>
              <p className="about__text">
                Each photograph in my collection is more than just an image. It's a story of
                patience, respect for wildlife, and countless hours spent observing these
                magnificent creatures in their natural habitat. Through my work, I hope to inspire
                others to appreciate and protect the incredible biodiversity that surrounds us.
              </p>
              <p className="about__text">
                From the majestic tigers of Karnataka to the vibrant birdlife of Himalayas, every
                frame captures a moment frozen in time, a testament to the wild's enduring spirit.
              </p>
              <p className="about__signature">Varunkumar Nagarajan, Proprietor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section--alt" id="contact">
        <div className="container container--narrow">
          <div className="section__header">
            <p className="section__tagline">Get in Touch</p>
            <h2 className="section__title">Contact Me</h2>
            <p className="section__description">
              Have questions about my work or interested in custom prints? I'd love to hear from
              you.
            </p>
          </div>

          <div className="contact-cta">
            <p className="contact-cta__text">
              For orders, inquiries, or collaboration opportunities, please reach out via email:
            </p>
            <a href="mailto:hello@aganadhiran.in" className="btn btn--primary btn--lg">
              hello@aganadhiran.in
            </a>
            <p className="contact-cta__note">I typically respond within 24-48 hours.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
