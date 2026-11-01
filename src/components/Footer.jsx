export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", marginBottom: "0.4rem", color: "var(--text-dark)" }}>
        VELOUR MAGAZINE
      </p>
      <p>
        &copy; {new Date().getFullYear()} Velour Editorial House. Built with React & React Router.
      </p>
      <p style={{ marginTop: "0.4rem", fontSize: "0.75rem", color: "var(--accent-gold)", letterSpacing: "1px" }}>
        PARIS &bull; MILAN &bull; NEW YORK &bull; MUMBAI
      </p>
    </footer>
  );
}