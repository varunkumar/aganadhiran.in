import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.png';

function Header({ isTransparent }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const headerClass = `header ${isTransparent && !isScrolled ? 'header--transparent' : ''} ${isScrolled ? 'header--scrolled' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="logo">
              <img src={logo} alt="Aganadhiram Creations" className="logo__image" />
              <span className="logo__text">Aganadhiram Creations</span>
            </Link>

            <nav className="nav" aria-label="Main navigation">
              <ul className="nav__list">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <a href="/#about" className="nav__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className={`menu-toggle ${isMenuOpen ? 'menu-toggle--active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="menu-toggle__bar"></span>
              <span className="menu-toggle__bar"></span>
              <span className="menu-toggle__bar"></span>
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`mobile-nav ${isMenuOpen ? 'mobile-nav--active' : ''}`}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <Link to="/" className="mobile-nav__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/products" className="mobile-nav__link" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className="mobile-nav__item">
            <a href="/#about" className="mobile-nav__link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="mobile-nav__item">
            <a href="/#contact" className="mobile-nav__link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
