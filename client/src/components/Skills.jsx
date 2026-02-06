import { useState } from "react";

export default function Skills() {
  return (
    <>
      <section id="skills" style={section}>
        <div style={container}>
          <h2 style={title}>Technical Skills</h2>

          <p style={intro}>
            My core focus is <b>Machine Learning Engineering and AI Systems</b>,
            spanning model development, infrastructure, and production deployment.
            I work end-to-end — from research and experimentation to scalable,
            reliable systems in production.
            <br /><br />
            I also bring experience in <b>distributed systems</b>, <b>MLOps</b>,
            <b>performance optimization</b>, and <b>research-driven engineering</b>.
          </p>

          {/* MASONRY (no more row-stretching) */}
          <div className="masonry">
            <SkillAccordion
              title="Machine Learning / AI"
              defaultOpen={false}
              items={[
                "Deep Learning (CNNs, RNNs, Transformers)",
                "Reinforcement Learning (Dreamer, PPO, SAC, MARL)",
                "Representation Learning, VAEs, World Models",
                "Model evaluation, ablations, benchmarking",
              ]}
            />

            <SkillAccordion
              title="ML Infrastructure / MLOps"
              defaultOpen={true}
              items={[
                "PyTorch, Lightning, Accelerate",
                "Model deployment (FastAPI, REST, batch inference)",
                "Experiment tracking, checkpoints, reproducibility",
                "CI/CD for ML pipelines, model versioning",
              ]}
            />

            <SkillAccordion
              title="Systems / Backend"
              defaultOpen={false}
              items={[
                "Python, C++, C#, .NET",
                "Distributed systems fundamentals",
                "Azure (compute, storage, SQL)",
                "REST APIs, data pipelines, orchestration",
              ]}
            />

            <SkillAccordion
              title="Data / Tooling"
              defaultOpen={false}
              items={[
                "NumPy, Pandas, PyArrow",
                "Large-scale dataset processing",
                "Offline RL datasets & simulation logs",
                "Visualization & debugging pipelines",
              ]}
            />

            <SkillAccordion
              title="Research & Engineering Practices"
              defaultOpen={false}
              items={[
                "Paper reproduction & benchmarking",
                "Ablation studies & metrics design",
                "Readable, maintainable research code",
                "Technical documentation & collaboration",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CSS for masonry */}
      <style>{`
        .masonry{
          column-count: 3;
          column-gap: 22px;
        }

        /* each card should not break between columns */
        .masonry > div{
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          margin-bottom: 22px;
        }

        @media (max-width: 980px){
          .masonry{ column-count: 2; }
        }
        @media (max-width: 640px){
          .masonry{ column-count: 1; }
        }
      `}</style>
    </>
  );
}

/* ================================================= */
/* Accordion */
/* ================================================= */

function SkillAccordion({ title, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={card}>
      <button
        onClick={() => setOpen(!open)}
        style={accordionHeader}
        aria-expanded={open}
      >
        <span style={headerTitle}>{title}</span>

        <span
          style={{
            ...chevWrap,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        style={{
          ...panel,
          maxHeight: open ? 260 : 0,
          opacity: open ? 1 : 0,
          paddingBottom: open ? 18 : 0,
        }}
      >
        <ul style={list}>
          {items.map((item, i) => (
            <li key={i} style={listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ================================================= */
/* Styles */
/* ================================================= */

const section = {
  padding: "96px 0",
};

const container = {
  maxWidth: "1150px",
  margin: "0 auto",
  padding: "0 24px",
};

const title = {
  fontSize: "clamp(2.2rem, 4vw, 3rem)",
  fontWeight: 750,
  letterSpacing: "-0.03em",
  marginBottom: "22px",
  color: "#0f172a",
};

const intro = {
  fontSize: "1.08rem",
  lineHeight: 1.75,
  color: "rgba(51,65,85,0.9)",
  maxWidth: "780px",
  marginBottom: "42px",
};

const card = {
  background: "#ffffff",
  borderRadius: "18px",
  border: "1px solid rgba(17,24,39,0.08)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  overflow: "hidden",
};

const accordionHeader = {
  width: "100%",
  background: "transparent",
  border: "none",
  padding: "20px 22px",
  fontSize: "1.02rem",
  fontWeight: 650,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
};

const headerTitle = {
  textAlign: "left",
  paddingRight: "12px",
  color: "#111827",
};

const chevWrap = {
  width: 38,
  height: 38,
  borderRadius: 999,
  display: "grid",
  placeItems: "center",
  background: "rgba(99,102,241,0.10)",
  color: "#4f46e5",
  transition: "transform 0.2s ease",
  flexShrink: 0,
};

const panel = {
  transition: "max-height 0.25s ease, opacity 0.2s ease, padding 0.2s ease",
  padding: "0 22px",
  overflow: "hidden",
};

const list = {
  padding: "0 0 0 18px",
  margin: 0,
};

const listItem = {
  fontSize: "0.96rem",
  color: "rgba(51,65,85,0.92)",
  marginBottom: "10px",
  lineHeight: 1.6,
};
