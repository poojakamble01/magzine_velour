import { useState } from "react";

export default function Looks() {
  const [selectedSeason, setSelectedSeason] = useState("All");

  const lookbookItems = [
    // --- WINTER (Current Season Spotlight) ---
    {
      title: "The Double-Breasted Camel Maxi",
      season: "Winter",
      palette: "Camel, Off-White, Cognac",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80",
      formula: "Ankle-skimming 100% virgin wool coat over a fine-gauge ivory turtleneck and leather chelsea boots.",
      tip: "Belt firmly at the natural waist for structure against icy gusts."
    },
    {
      title: "The Fireside Cashmere Layer",
      season: "Winter",
      palette: "Oatmeal, Biscuit, Charcoal",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
      formula: "Heavyweight cable-knit turtleneck layered over fluid wool lounge trousers and shearling-lined mules.",
      tip: "Pair with an antique signet ring and a thick woven cashmere scarf."
    },
    {
      title: "The Velvet Twilight Column",
      season: "Winter",
      palette: "Midnight Blue, Onyx, Gold",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=600&q=80",
      formula: "Floor-length midnight velvet maxi dress paired with a structured satin-lapel tuxedo blazer.",
      tip: "Finish with statement gold drop earrings and pointed closed-toe velvet pumps."
    },

    // --- SPRING ---
    {
      title: "The Cotton Poplin & Knit Vest",
      season: "Spring",
      palette: "Powder Blue, Cream, Beige",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
      formula: "Crisp white cotton banker shirt layered under a cropped sleeveless knit vest and cropped chinos.",
      tip: "Pair with pointed slingbacks and a silk scarf knotted at the neck."
    },
    {
      title: "The Pastel Trench & Wide Denim",
      season: "Spring",
      palette: "Butter Yellow, Ecru, Soft Sage",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
      formula: "Lightweight pastel fluid trench coat draped over an ivory ribbed knit and relaxed ecru jeans.",
      tip: "Complement with suede ballerina flats and a woven tote basket."
    },
    {
      title: "The Botanical Midi Day-Dress",
      season: "Spring",
      palette: "Blush, Meadow Green, Linen",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
      formula: "Tiered organic linen midi dress layered beneath a draped cardigan with minimal ankle-wrap espadrilles.",
      tip: "Style with subtle pearl drop earrings and a dewy skin finish."
    },

    // --- SUMMER ---
    {
      title: "The Riviera Silk Slip",
      season: "Summer",
      palette: "Champagne, Ivory, Terracotta",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
      formula: "Bias-cut silk midi skirt worn with an oversized open linen button-down and woven cord sandals.",
      tip: "Accessorize with stacked tortoiseshell sunglasses and a wide straw tote."
    },
    {
      title: "The Monochrome Linen Tailoring",
      season: "Summer",
      palette: "Alabaster White, Sand, Bone",
      image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=600&q=80",
      formula: "Breathable tailored linen vest worn solo with matching high-waisted pleated linen trousers and leather slides.",
      tip: "Keep jewelry to a single sculptural cuff bracelet and slicked-back hair."
    },
    {
      title: "The Sunset Cotton Eyelet Maxi",
      season: "Summer",
      palette: "Warm Ochre, Coral, Ecru",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80",
      formula: "Airy broderie anglaise backless sundress styled with hand-tied leather gladiator flats.",
      tip: "Finish with a raffia sunhat and delicate layered gold chains."
    },

    // --- AUTUMN ---
    {
      title: "The Trench & Selvedge Transition",
      season: "Autumn",
      palette: "Olive, Espresso, Ecru",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      formula: "Waterproof gabardine double-breasted trench over heavy raw selvedge denim and chunky penny loafers.",
      tip: "Leave unbuttoned with a structured leather satchel across the shoulder."
    },
    {
      title: "The Plaid Wool Shacket & Corduroy",
      season: "Autumn",
      palette: "Rust, Forest Green, Chestnut",
      image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80",
      formula: "Tailored houndstooth wool overshirt paired with chocolate brown wide-wale corduroy trousers and ankle boots.",
      tip: "Layer an ultra-fine merino wool mock neck underneath for cool mornings."
    },
    {
      title: "The Ribbed Knit & Leather Pencil",
      season: "Autumn",
      palette: "Burgundy, Toffee, Dark Charcoal",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
      formula: "Chunky folded turtleneck sweater french-tucked into a supple vegan leather slit midi skirt with knee-high boots.",
      tip: "Accessorize with a bold burgundy leather belt and tortoiseshell earrings."
    }
  ];

  const seasonsList = ["All", "Winter", "Spring", "Summer", "Autumn"];

  const filteredLooks =
    selectedSeason === "All"
      ? lookbookItems
      : lookbookItems.filter((item) => item.season === selectedSeason);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span className="section-label">Editorial Lookbook</span>
        <h2 style={{ fontSize: "2.2rem" }}>The 4-Season Style Archive</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "620px", margin: "0.5rem auto 1.5rem" }}>
          Curated silhouette formulas, seasonal color stories, and styling rules across every quarter of the year.
        </p>

        {/* Seasonal Filter Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          {seasonsList.map((season) => (
            <button
              key={season}
              onClick={() => setSelectedSeason(season)}
              style={{
                background: selectedSeason === season ? "var(--text-dark)" : "var(--card-white)",
                color: selectedSeason === season ? "#fff" : "var(--text-dark)",
                border: "1px solid var(--border-subtle)",
                padding: "0.5rem 1.2rem",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: selectedSeason === season ? 600 : 400,
                transition: "all 0.2s ease"
              }}
            >
              {season} {season === "Winter" ? "❄️ (Active Edit)" : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Looks Grid */}
      <div className="editorial-grid">
        {filteredLooks.map((look, index) => (
          <article key={index} className="editorial-card" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src={look.image}
              alt={look.title}
              style={{ width: "100%", height: "260px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.8rem", display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag-badge">{look.season} Edition</span>
                {look.season === "Winter" && (
                  <span style={{ fontSize: "0.65rem", color: "var(--accent-gold)", fontWeight: 600 }}>
                    CURRENT ISSUE
                  </span>
                )}
              </div>
              <h3>{look.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 600, marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                Palette: {look.palette}
              </p>
              <p style={{ marginBottom: "1rem", fontSize: "0.92rem" }}>
                {look.formula}
              </p>
              <div style={{ marginTop: "auto", borderTop: "1px dashed var(--border-subtle)", paddingTop: "0.8rem" }}>
                <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                  &ldquo;{look.tip}&rdquo;
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}