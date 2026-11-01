import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
      <span className="section-label">Archive Error</span>
      <h1 style={{ fontSize: "4.5rem", margin: "0.5rem 0" }}>404</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
        This page has gone out of print or does not exist in our editorial catalog.
      </p>
      <Link to="/" className="btn">
        Return to The Cover
      </Link>
    </div>
  );
}