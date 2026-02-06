import { useMemo, useState } from "react";

const CATEGORIES = [
  "All",
  "Application Development & AI Infra",
  "Deep Learning",
  "Reinforcement Learning",
  "Data Science / Analytics",
];

const PROJECTS = [
  {
    title: "Not Netflix Inc — Checkout",
    tech: "React · TypeScript · Framer Motion",
    category: "Application Development & AI Infra",
    badge: "Code Sample",
    time: "~7 hours",
    image: "/project-netflix.png",
  },
  {
    title: "Dreamer-based World Models",
    tech: "PyTorch · Reinforcement Learning · Robotics",
    category: "Reinforcement Learning",
    badge: "Research",
    time: "~3 weeks",
    image: "/project-dreamer.png",
  },
  {
    title: "Schema Inference Pipeline",
    tech: "Python · Azure · MLOps",
    category: "Data Science / Analytics",
    badge: "Production",
    time: "~2 weeks",
    image: "/project-schema.png",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" style={section}>
      <div style={container}>
        <header style={header}>
          <p style={eyebrow}>Projects</p>
          <h2 style={title}>Selected work</h2>
          <p style={subhead}>
            A mix of product builds, applied ML, and research prototypes — with
            an emphasis on clean systems and measurable impact.
          </p>
        </header>

        {/* ================= Category Pills ================= */}
        <div style={pillRow}>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  ...pill,
                  ...(isActive ? pillActive : pillIdle),
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ================= Grid ================= */}
        <div style={grid}>
          {filtered.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Project Card
===================================================== */

function ProjectCard({ title, tech, badge, time, image, category }) {
  return (
    <article style={card} className="project-card">
      <div style={top}>
        <div style={titleRow}>
          <h3 style={cardTitle}>{title}</h3>
        </div>

        <p style={techText}>{tech}</p>

        <div style={metaRow}>
          <span style={badgeStyle}>{badge}</span>
          <span style={dot}>•</span>
          <span style={metaText}>⏳ {time}</span>
          <span style={dot}>•</span>
          <span style={metaText}>{category}</span>
        </div>
      </div>

      <div style={imageWrap}>
        <img src={image} alt={title} style={imageStyle} loading="lazy" />
      </div>

      <div style={actionsRow}>
        <button style={miniBtn} type="button">
          View details <span aria-hidden="true">↗</span>
        </button>
        <button style={miniBtnGhost} type="button">
          Source <span aria-hidden="true">↗</span>
        </button>
      </div>

      {/* tiny hover polish (inline styles can't do :hover well) */}
      <style>{`
        .project-card{
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }
        .project-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 26px 70px rgba(17,24,39,0.12);
          border-color: rgba(99,102,241,0.35);
        }
      `}</style>
    </article>
  );
}

/* =====================================================
   Styles
===================================================== */

const section = {
  padding: "110px 0",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px",
};

const header = {
  marginBottom: "26px",
};

const eyebrow = {
  margin: "0 0 10px",
  fontSize: "0.85rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(55,65,81,0.7)",
};

const title = {
  margin: "0 0 10px",
  fontSize: "clamp(2.2rem, 4vw, 3rem)",
  letterSpacing: "-0.03em",
  color: "#0f172a",
  fontWeight: 750,
};

const subhead = {
  margin: 0,
  maxWidth: "64ch",
  color: "rgba(51,65,85,0.88)",
  lineHeight: 1.7,
  fontSize: "1.06rem",
};

const pillRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  margin: "28px 0 44px",
};

const pill = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(17,24,39,0.08)",
  fontSize: "0.92rem",
  cursor: "pointer",
  transition: "transform 0.15s ease, background 0.15s ease, border-color 0.15s ease",
};

const pillIdle = {
  background: "rgba(99,102,241,0.06)",
  color: "rgba(17,24,39,0.85)",
};

const pillActive = {
  background: "linear-gradient(135deg, #4f46e5, #6366f1)",
  color: "#fff",
  borderColor: "rgba(99,102,241,0.35)",
  boxShadow: "0 14px 35px rgba(79,70,229,0.22)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "26px",
};

/* === CARD === */
const card = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "22px",
  padding: "26px",
  border: "1px solid rgba(17,24,39,0.08)",
  boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  minHeight: "420px",
};

const top = {
  display: "flex",
  flexDirection: "column",
};

const titleRow = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
};

const cardTitle = {
  fontSize: "1.35rem",
  margin: 0,
  letterSpacing: "-0.02em",
  color: "#0f172a",
  lineHeight: 1.25,
  fontWeight: 750,
};

const techText = {
  fontSize: "0.95rem",
  color: "rgba(71,85,105,0.9)",
  margin: "8px 0 0",
  lineHeight: 1.6,
};

const metaRow = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: "14px",
};

const badgeStyle = {
  background: "rgba(245,158,11,0.14)",
  color: "rgba(146,64,14,0.95)",
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "0.8rem",
  fontWeight: 650,
};

const metaText = {
  fontSize: "0.82rem",
  color: "rgba(100,116,139,0.95)",
};

const dot = {
  color: "rgba(100,116,139,0.55)",
  fontSize: "0.9rem",
};

/* === IMAGE === */
const imageWrap = {
  background: "linear-gradient(180deg, rgba(15,23,42,0.96), rgba(2,6,23,0.96))",
  padding: "14px",
  borderRadius: "16px",
  border: "1px solid rgba(148,163,184,0.14)",
};

const imageStyle = {
  width: "100%",
  borderRadius: "12px",
  display: "block",
};

/* === ACTIONS === */
const actionsRow = {
  display: "flex",
  gap: "10px",
  marginTop: "2px",
};

const miniBtn = {
  border: "1px solid rgba(99,102,241,0.25)",
  background: "rgba(99,102,241,0.10)",
  color: "#3730a3",
  padding: "10px 12px",
  borderRadius: "12px",
  fontSize: "0.9rem",
  cursor: "pointer",
  flex: 1,
};

const miniBtnGhost = {
  border: "1px solid rgba(17,24,39,0.10)",
  background: "rgba(255,255,255,0.7)",
  color: "rgba(17,24,39,0.78)",
  padding: "10px 12px",
  borderRadius: "12px",
  fontSize: "0.9rem",
  cursor: "pointer",
  flex: 1,
};
