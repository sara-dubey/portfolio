import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" style={section}>
      <div style={container}>

        {/* ========== 2x2 GRID ========== */}
        <div style={grid}>

          {/* ====== TOP LEFT : IMAGE + INTRO ====== */}
          <div style={introBlock}>
          <div>
              <p style={helloStyle}>HELLO,</p>
              <h1 style={nameStyle}>I AM SARA</h1>
            </div>
            <img src={profile} alt="Sara Dubey" style={profileImage} />

           
          </div>

          {/* ====== TOP RIGHT : STATS (CENTERED) ====== */}
          <div style={statsBlock}>
            <ul style={stats}>
              <li>
                4 years industry (software development & applied ML) + 1.5 years academic research
              </li>
              <li>
                Built applied ML productivity tools driving client adoption & efficiency
              </li>
              <li>
                Bridging domain experts, stakeholders, and client-facing teams
              </li>
              <li>
                Proven ML → business impact: efficiency gains, cost savings, ROI
              </li>
              <li>
                Deadline-driven, user-focused — mutual respect is non-negotiable
              </li>
            </ul>
          </div>

          {/* ====== BOTTOM LEFT : OPEN TO WORK CARD ====== */}
          <div style={{ ...card, borderColor: "#d6dcff", boxShadow: blueGlow }}>
            <h3 style={cardTitle}>🟢 Open to Work</h3>

            <p style={bodyText}>
              🎓 Graduating <strong>May 2026</strong> · Open to
              <strong> entry-level</strong> and <strong> mid-level</strong> roles
            </p>

            <ul style={roleList}>
              <li>💻 <strong>Software Engineer</strong></li>
              <li>🤖 <strong>Applied ML Engineer / Data Scientist</strong></li>
              <li>🧠 <strong>ML Research </strong></li>
              <li>🔁 <strong>Related / adjacent roles</strong></li>
            </ul>

            <p style={closingText}>
              👉 Check out my projects — or <strong>put my skills to the test</strong>.
            </p>
          </div>

          {/* ====== BOTTOM RIGHT : FOCUS AREAS CARD ====== */}
          <div style={{ ...card, borderColor: "#ffd8c2", boxShadow: orangeGlow }}>
            <h3 style={cardTitle}>Focus Areas</h3>

            <ul style={focusList}>
             
              <li>
                Exploring <strong>AI infrastructure challenges</strong> — GPU scalability,
                distributed training stability, system-level reliability
              </li>
              <li>
                Integrating AI into <strong>real-time and production systems</strong>,
                where latency and robustness matter
              </li>
              <li>
                <strong>End-to-end deployment ownership</strong>: data → models →
                production tools
              </li>
              <li>
                Designing systems that <strong>simplify workflows</strong> and
                reduce manual engineering effort
              </li>
              <li>
                Building <strong>human–AI collaboration systems</strong> that outperform
                SOTA algorithms in real-world settings
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
const section = {
  padding: "120px 0",
};

const container = {
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "0 24px",
};

/* ===== 2x2 GRID ===== */
const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "56px",
};

/* ===== TOP LEFT ===== */
const introBlock = {
  display: "flex",
  alignItems: "center",
  gap: "36px",
};

const profileImage = {
  width: "340px",
  height: "340px",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "20px",
};


/* ===== TEXT ===== */
const helloStyle = {
  fontSize: "0.85rem",
  letterSpacing: "0.22em",
  color: "#777",
  marginBottom: "8px",
};

const nameStyle = {
  fontSize: "2.2rem", // smaller than before
  fontWeight: 600,
};

/* ===== TOP RIGHT ===== */
const statsBlock = {
  display: "flex",
  alignItems: "center", // vertical centering
};

const stats = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  fontSize: "0.95rem",
};

/* ===== CARDS ===== */
const card = {
  background: "#ffffff",
  border: "1.5px solid",
  borderRadius: "24px",
  padding: "34px",
};

const cardTitle = {
  fontSize: "1.15rem",
  marginBottom: "16px",
};

const bodyText = {
  fontSize: "0.95rem",
  lineHeight: 1.65,
  marginBottom: "12px",
};

const roleList = {
  paddingLeft: "18px",
  lineHeight: 1.75,
};

const focusList = {
  paddingLeft: "18px",
  lineHeight: 1.75,
};

const closingText = {
  marginTop: "14px",
  fontSize: "0.9rem",
};

/* ===== GLOW ===== */
const blueGlow = "0 16px 36px rgba(130, 150, 255, 0.18)";
const orangeGlow = "0 16px 36px rgba(255, 170, 110, 0.18)";
