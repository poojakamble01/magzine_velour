import { Link } from "react-router-dom";

export default function Home() {
  const seasons = [
    {
      quarter: "Q1 — Spring",
      title: "The Linen & Renewal Issue",
      status: "Archived (Vol. I)",
      palette: "Sage, Cream & Blossom"
    },
    {
      quarter: "Q2 — Summer",
      title: "The High Riviera Edit",
      status: "Archived (Vol. II)",
      palette: "Sand, Azure & Crisp White"
    },
    {
      quarter: "Q3 — Autumn",
      title: "The Trench & Transition Story",
      status: "Archived (Vol. III)",
      palette: "Cognac, Olive & Espresso"
    },
    {
      quarter: "Q4 — Winter (Active)",
      title: "The Cashmere & Heavy Overcoat Edition",
      status: "CURRENT ISSUE",
      palette: "Charcoal, Cream & Heavy Wool",
      active: true
    }
  ];

  return (
    <div>
      {/* Editorial Cover Banner */}
      <section style={{ textAlign: "center", padding: "1.5rem 1rem 3rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <span className="section-label">Current Quarterly Issue &bull; Winter Edition</span>
        <h1 style={{ fontSize: "2.8rem", margin: "0.8rem 0 1.2rem", lineHeight: "1.2" }}>
          The Art of Intentional Dressing: Silk, Cashmere & Tailored Simplicity
        </h1>
        
        {/* Cover Photo */}
        <div style={{ margin: "2rem auto", maxWidth: "900px", overflow: "hidden", borderRadius: "2px" }}>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
            alt="Velour Cover Winter Editorial"
            style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
          />
          <p style={{ textAlign: "right", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.4rem", letterSpacing: "1px" }}>
            PHOTOGRAPHY: STUDIO MILANO &bull; ISSUE NO. 04: WINTER
          </p>
        </div>

        <p style={{ maxWidth: "680px", margin: "1.5rem auto 2rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
          Velour publishes quarterly with the turning of each season. This winter edition is dedicated to
          insulating natural fibers, structural outerwear, and intentional layering for cold weather.
        </p>
        <div>
          <Link to="/looks" className="btn">
            Explore The Lookbook
          </Link>
          <Link to="/capsule" className="btn btn-secondary">
            Capsule Guide
          </Link>
        </div>
      </section>

      {/* The 4-Season Calendar */}
      <section style={{ marginTop: "3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="section-label">Editorial Calendar</span>
          <h2 style={{ fontSize: "1.8rem" }}>The Four Seasonal Editions</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            A four-volume annual cycle curating bespoke silhouettes for every turn of the climate.
          </p>
        </div>

        <div className="editorial-grid">
          {seasons.map((s, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                border: s.active ? "2px solid var(--accent-gold)" : "1px solid var(--border-subtle)",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag-badge">{s.quarter}</span>
                {s.active && (
                  <span style={{ fontSize: "0.65rem", background: "var(--accent-gold)", color: "#fff", padding: "2px 8px", borderRadius: "2px", fontWeight: "600" }}>
                    NOW READING
                  </span>
                )}
              </div>
              <h3>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: 500, margin: "0.4rem 0" }}>
                Palette: {s.palette}
              </p>
              <p style={{ fontSize: "0.88rem", marginTop: "auto", color: "var(--text-muted)" }}>{s.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Featured Columns */}
      <section style={{ marginTop: "3.5rem" }}>
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Winter Edit Columns</span>
          <h2 style={{ fontSize: "1.8rem" }}>Current Highlights</h2>
        </div>

        <div className="editorial-grid">
          <article className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
              alt="Heavy Wool Tailoring"
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <span className="tag-badge">Winter Tailoring</span>
              <h3>Heavy Wool Trousers</h3>
              <p>Pleated virgin wool cuts designed for wind resistance and clean drape over leather boots.</p>
            </div>
          </article>

          <article className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80"
              alt="The Cashmere Edit"
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <span className="tag-badge">Knitwear Focus</span>
              <h3>The 4-Ply Cashmere Edit</h3>
              <p>Heirloom Mongolian cashmere turtlenecks crafted for thermal luxury without bulk.</p>
            </div>
          </article>

          <article className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
              alt="Winter Accessories"
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <span className="tag-badge">Winter Accents</span>
              <h3>Sculptural Gold & Gloves</h3>
              <p>Lined buttery nappa leather driving gloves paired with statement vintage gold earrings.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}