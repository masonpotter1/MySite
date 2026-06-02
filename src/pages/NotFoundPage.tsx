import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main id="main-content" className="section home-main" tabIndex={-1}>
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The route you requested is not part of this site.</p>
      <Link className="button primary" to="/">
        Back to home
      </Link>
    </main>
  );
}
