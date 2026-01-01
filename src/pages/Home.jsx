import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import calendarCover from '../assets/images/products/calendar-2026-cover.png';
import aboutPhoto from '../assets/images/varun.jpeg';
import { trackExploreCollectionClick, trackProductClick } from '../utils/analytics';

// Import all hero images
import bear from '../assets/images/hero/bear.jpg';
import che from '../assets/images/hero/che.jpg';
import ele from '../assets/images/hero/ele.jpg';
import elephant from '../assets/images/hero/elephant.jpg';
import flamingo1 from '../assets/images/hero/flamingo-1.jpg';
import flamingo from '../assets/images/hero/flamingo.jpg';
import gaur from '../assets/images/hero/gaur.jpg';
import kite from '../assets/images/hero/kite.jpg';
import leo1 from '../assets/images/hero/leo-1.jpg';
import leo2 from '../assets/images/hero/leo-2.jpg';
import leo3 from '../assets/images/hero/leo-3.jpg';
import leo4 from '../assets/images/hero/leo-4.jpg';
import leo5 from '../assets/images/hero/leo-5.jpg';
import leo6 from '../assets/images/hero/leo-6.jpg';
import leo7 from '../assets/images/hero/leo-7.jpg';
import leo from '../assets/images/hero/leo.jpg';
import mongoose from '../assets/images/hero/mongoose.jpg';
import peacock1 from '../assets/images/hero/peacock-1.jpg';
import peacock from '../assets/images/hero/peacock.jpg';
import tiger1 from '../assets/images/hero/tiger-1.jpg';
import tiger2 from '../assets/images/hero/tiger-2.jpg';
import tiger3 from '../assets/images/hero/tiger-3.jpg';
import tiger4 from '../assets/images/hero/tiger-4.jpg';
import tiger5 from '../assets/images/hero/tiger-5.jpg';
import tiger from '../assets/images/hero/tiger.jpg';

const baseHeroImages = [
  tiger,
  leo3,
  flamingo,
  elephant,
  peacock,
  leo,
  tiger2,
  gaur,
  leo5,
  kite,
  tiger4,
  mongoose,
  leo1,
  bear,
  tiger5,
  flamingo1,
  leo7,
  che,
  peacock1,
  tiger1,
  leo2,
  ele,
  leo4,
  tiger3,
  leo6,
];

function Home() {
  const [heroImages, setHeroImages] = useState(baseHeroImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set page title
    document.title = 'Aganadhiram Creations | Wildlife Art & Photography';

    // Preload all images
    const imagePromises = baseHeroImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        // Shuffle images after loading
        const shuffled = [...baseHeroImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setHeroImages(shuffled);
      })
      .catch((err) => console.error('Error preloading images:', err));
  }, []);

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

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <img
            src={heroImages[currentImageIndex]}
            alt="Majestic wildlife in natural habitat"
            className="hero__image"
            key={currentImageIndex}
          />
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
