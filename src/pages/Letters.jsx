import { useState } from "react";

export default function Letters() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <span className="section-label">Correspondence</span>
      <h2 style={{ fontSize: "2.2rem" }}>Letters to the Editor</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "540px", margin: "0.5rem auto 1.5rem" }}>
        Have a style inquiry, a thought on our latest issue, or an editorial submission? Send your note directly to the editorial desk.
      </p>

      {submitted ? (
        <div className="editorial-card" style={{ maxWidth: 480, margin: "2rem auto", textAlign: "center" }}>
          <span className="tag-badge">Dispatched</span>
          <h3>Your Letter Has Been Received</h3>
          <p style={{ marginTop: "0.5rem" }}>
            Thank you for writing to Velour. Our editorial team reviews reader submissions every Friday for inclusion in the upcoming issue.
          </p>
        </div>
      ) : (
        <form className="editorial-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Reader Name</label>
            <input type="text" placeholder="e.g. Elena Rostova" required />
          </div>

          <div className="form-field">
            <label>Email Address</label>
            <input type="email" placeholder="elena@example.com" required />
          </div>

          <div className="form-field">
            <label>Subject / Topic</label>
            <select defaultValue="Style Advice">
              <option value="Style Advice">Ask a Wardrobe Stylist</option>
              <option value="Article Feedback">Letter on Issue No. 04</option>
              <option value="Press Pitch">Press & Editorial Submission</option>
            </select>
          </div>

          <div className="form-field">
            <label>Your Note</label>
            <textarea rows="5" placeholder="Write your letter here..." required></textarea>
          </div>

          <button type="submit" className="btn" style={{ width: "100%", marginTop: "0.5rem" }}>
            Dispatch Letter
          </button>
        </form>
      )}
    </div>
  );
}