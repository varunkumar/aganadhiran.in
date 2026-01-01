import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Aganadhiram Creations';
  }, []);

  return (
    <section className="section page-not-found">
      <div className="container container--narrow">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__text">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn--primary btn--lg">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
