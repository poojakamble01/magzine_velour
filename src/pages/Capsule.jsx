export default function Capsule() {
  const essentials = [
    { num: "01", item: "The Structured Blazer", note: "Look for mid-weight wool or twill with clean, unpadded shoulders." },
    { num: "02", item: "Crisp Cotton Poplin Shirt", note: "Oversized silhouette in alabaster white or fine blue banker stripe." },
    { num: "03", item: "Fluid High-Rise Trousers", note: "Deep front pleats that fall gracefully over pointed kitten heels or loafers." },
    { num: "04", item: "Pure Silk Bias Skirt", note: "A champagne or espresso slip skirt that transitions effortlessly from day to night." },
    { num: "05", item: "Ribbed Cashmere Knit", note: "Soft crewneck in oatmeal or biscuit for layering under tailored coats." },
    { num: "06", item: "Straight-Leg Selvedge Denim", note: "Unfaded deep indigo or ecru denim with zero distressing for a polished finish." }
  ];

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span className="section-label">Wardrobe Foundations</span>
        <h2 style={{ fontSize: "2.2rem" }}>The 10-Piece Capsule Guide</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "620px", margin: "0.5rem auto 0" }}>
          Curate fewer, higher-quality garments designed to mix, match, and endure across decades.
        </p>
      </div>

      {/* The Golden Rules */}
      <div style={{ background: "var(--card-white)", border: "1px solid var(--border-subtle)", padding: "2rem", marginBottom: "2.5rem" }}>
        <span className="section-label">Editorial Rulebook</span>
        <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>The Three Pillars of an Intentional Closet</h3>
        <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          <li style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "1rem" }}>
            <strong style={{ display: "block", marginBottom: "0.3rem" }}>1. Fabric Over Trend</strong>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Prioritize natural fibers—silk, linen, virgin wool, and cashmere—over synthetic blends.</span>
          </li>
          <li style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "1rem" }}>
            <strong style={{ display: "block", marginBottom: "0.3rem" }}>2. Cohesive Palette</strong>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Anchor around 3 neutrals (ivory, black, camel) with 1 subtle accent tone.</span>
          </li>
          <li style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "1rem" }}>
            <strong style={{ display: "block", marginBottom: "0.3rem" }}>3. Precision Tailoring</strong>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>A $30 alteration on hem length transforms an off-the-rack piece into bespoke luxury.</span>
          </li>
        </ul>
      </div>

      {/* Essentials Grid */}
      <div className="editorial-grid">
        {essentials.map((item) => (
          <div key={item.num} className="editorial-card">
            <span className="tag-badge">Piece {item.num}</span>
            <h3>{item.item}</h3>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}