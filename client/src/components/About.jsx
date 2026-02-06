import travelImg from "../assets/about-travel.jpg";
import yogaImg from "../assets/about-yoga.jpg";
import natureImg from "../assets/about-nature.jpg";

export default function About() {
  return (
    <>
      <section id="about" style={{ padding: "160px 0" }}>
        <div style={container}>
          <h2 style={title}>About</h2>

          {/* ONE SINGLE ABOUT CARD */}
          <div style={aboutCard}>
            <h3 style={aboutCardTitle}>
              My Career Story{" "}
              <span style={muted}>
                (reverse order, because why not start with the now? 😄)
              </span>
            </h3>

            <div style={storyText}>
              <p style={p}>
                <b>Right now (2025–2026)</b>
              </p>
              <ul style={list}>
                <li style={li}>🔬 Grad researcher (graduating May 2026)</li>
                <li style={li}>
                  🤝 Building human–AI collaboration systems that aim to{" "}
                  <b>beat SOTA algorithms</b>
                </li>
                <li style={li}>
                  🧠 Exploring <b>AI infra pain points</b> — GPU scalability,
                  training blowups, the usual fun chaos 🔥
                </li>
                <li style={li}>
                  🚚 <b>SWE Fellow @ UPS</b> 
                  <div style={sub}>
                    → Applying ML to make logistics smarter, cheaper, faster
                  </div>
                </li>
              </ul>

              <p style={p}>
                <b>Before that</b>
              </p>
              <ul style={list}>
                <li style={li}>
                  🏭 Multiple roles @ <b>Rockwell Automation</b> 
                  <div style={sub}>→ Integrated AI into IIoT systems</div>
                  <div style={sub}>→ End-to-end: data → models → deployed tools</div>
                  <div style={sub}>
                    → Goal: make factory/engineer life <b>actually easier</b>{" "}
                    (fewer clicks, more wins ✨)
                  </div>
                </li>
              </ul>

              <p style={p}>
                <b>Where it all kicked off</b>
              </p>
              <ul style={list}>
                <li style={li}>
                  🎓 Undergrad research
                  <div style={sub}>
                    → <b>VLSI</b> chip design + <b>Lisp</b> parentheses madness 😂
                  </div>
                  <div style={sub}>
                    → Early proof I can jump from low-level hardware to
                    high-level software/ML without breaking
                  </div>
                </li>
              </ul>

              <p style={{ ...p, marginTop: "18px" }}>
                VLSI hardware nerd → Industrial AI deployer → Logistics ML impact
                → now pushing human–AI + infra edges 🚀
                <br />
                Weird path? Maybe. Fun and useful? <b>100%</b>.
              </p>
            </div>
          </div>

          <h3 style={sectionTitle}>Beyond Work</h3>

          <p style={subtitle}>
            Outside of engineering and research, these practices help me stay
            grounded, curious, and balanced.
          </p>

          {/* GRID: 3 cards in one row on desktop */}
          <div style={grid} className="about-grid">
            <AboutCard
              image={travelImg}
              description="I travel whenever I get the chance. I’m naturally drawn to oceans and coastal cities — open water has a way of slowing everything down."
            />

            <AboutCard
              image={yogaImg}
              description="Time outdoors help me reset. Many weekends are spent hiking lightly, especially during fall when the landscape changes."
            />

            <AboutCard
              image={natureImg}
              description="I make time for at least one intentional break every year. New Year trips, in particular, help me reflect, reset, and start fresh."
            />
          </div>
        </div>
      </section>

      {/* responsive grid for tablets/mobile */}
      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

/* ================================
   Card Component
================================ */

function AboutCard({ image, description }) {
  return (
    <div style={card}>
      <img src={image} alt="" style={imageStyle} />
      <div style={content}>
        <p style={text}>{description}</p>
      </div>
    </div>
  );
}

/* ================================
   Styles
================================ */

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px",
};

const title = {
  fontSize: "2.6rem",
  marginBottom: "24px",
};

/* ONE SINGLE ABOUT CARD */
const aboutCard = {
  background: "#ffffff",
  borderRadius: "24px",
  border: "1px solid #e6e2da",
  boxShadow: "0 14px 34px rgba(0,0,0,0.06)",
  padding: "30px",
  maxWidth: "900px",
  marginBottom: "96px",
};

const aboutCardTitle = {
  fontSize: "1.5rem",
  margin: "0 0 16px",
  fontWeight: 700,
  color: "#111",
};

const muted = {
  fontWeight: 500,
  color: "#666",
  fontSize: "1rem",
};

const storyText = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#333",
};

const p = {
  margin: "14px 0 10px",
};

const list = {
  margin: "0 0 10px",
  paddingLeft: "22px",
};

const li = {
  marginBottom: "10px",
  color: "#333",
};

const sub = {
  marginTop: "6px",
  color: "#555",
};

/* EXISTING STYLES */
const sectionTitle = {
  fontSize: "2rem",
  marginBottom: "12px",
};

const subtitle = {
  fontSize: "1.05rem",
  color: "#555",
  maxWidth: "520px",
  marginBottom: "64px",
};

/* ✅ 3 cards in one row on desktop */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "36px",
};

const card = {
  background: "#ffffff",
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid #e6e2da",
  boxShadow: "0 14px 34px rgba(0,0,0,0.06)",
};

const imageStyle = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
  objectPosition: "center",
};

const content = {
  padding: "28px",
};

const text = {
  fontSize: "0.95rem",
  color: "#444",
  lineHeight: 1.6,
};
