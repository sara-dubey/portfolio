import rockwell from "../assets/rockwell.png";
import vt from "../assets/vt.png";
import ups from "../assets/ups1.jpg";
import igdtu from "../assets/igdtuw.png";

export default function ExperienceEducation() {
  return (
    <>
      {/* ✅ ADD id="experience" + scroll margin for fixed navbar */}
      <section id="experience" style={{ ...experienceSection, scrollMarginTop: "90px" }}>
        <div style={container}>
          <div style={header}>
            
            <h2 style={title}>Experience & Education</h2>
            <p style={subtitle}>
              A snapshot of where I’ve built, shipped, and studied — 
            </p>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div style={sectionBlock}>
            <h3 style={sectionTitle}>Experience</h3>

            <div style={experienceGrid}>
              <ExperienceCard
                logo={ups}
                period="Jul 2025 – Present"
                company="UPS (United Parcel Service)"
                companyUrl="https://www.ups.com"
                role="Software Engineer (Fellowship)"
                location="Atlanta, Georgia (Remote)"
                bullets={[
                  "Engineered an automated data ingestion pipeline monitoring 20+ government tariff sources with scheduled scraping, normalization, and ML-based change detection.",
                  "Built an LLM-powered tariff assistant generating real-time cost simulations across 150+ country pairs, reducing quote turnaround from 48 hours to under 10 minutes.",
                  "Designed REST-based notification systems to surface daily policy updates for logistics stakeholders.",
                ]}
              />

              <ExperienceCard
                logo={rockwell}
                period="Jul 2021 – Jul 2024"
                company="Rockwell Automation"
                companyUrl="https://www.rockwellautomation.com"
                role="Software Engineer"
                location="Pune, India"
                bullets={[
                  "Led development of a controller data migration platform, reducing engineering effort by 80% and enabling $2M in accelerated client onboarding.",
                  "Built full-stack services using React (TypeScript), .NET Core, and Python REST APIs supporting operations across 30+ regions.",
                  "Developed rule-based and ML-assisted mapping logic, cutting manual validation time by up to 60% while retaining human review.",
                  "Implemented high-performance PLC migration algorithms in C++, achieving 3× faster execution and 70% higher reliability.",
                  "Designed a computer vision–assisted document processing pipeline for extracting structured data from engineering schematics.",
                  "Optimized Azure SQL performance on 10M+ records, reducing query latency by 50%.",
                  "Automated CI/CD pipelines using Azure DevOps, Docker, and AKS with production monitoring.",
                ]}
              />
            </div>
          </div>

          {/* ================= EDUCATION ================= */}
          <div style={{ ...sectionBlock, marginTop: 64 }}>
            <h3 style={sectionTitle}>Education</h3>

            <div style={educationGrid}>
              <EducationCard
                logo={vt}
                period="Aug 2024 – May 2026"
                institute="Virginia Tech"
                degree="M.S. Computer Engineering (Machine Learning)"
                description="GPA: 3.78/4. Focus on deep learning, reinforcement learning, robotics, and AI infrastructure."
                courses={[
                  "Deep Learning",
                  "Reinforcement Learning",
                  "Machine Learning",
                  "Robotics / Perception",
                  "Advanced Statstical Computing",
                 
                ]}
              />

              <EducationCard
                logo={igdtu}
                period="Aug 2017 – May 2021"
                institute="Indira Gandhi Delhi Technical University for Women"
                degree="B.Tech Electronics and Communication Engineering"
                description="First Division with Distinction. Strong foundation in systems, algorithms, and computer architecture."
                courses={[
                  "Data Structures & Algorithms",
                  "Computer Architecture",
                  "Operating Systems",
                  "Digital Logic & VLSI",
                  "Signals & Systems",
                  "Embedded Systems",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* responsive tweak for edu cards */}
      <style>{`
        @media (max-width: 640px) {
          .eduCardRow {
            flex-direction: column !important;
          }
          .eduLogo {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </>
  );
}

/* ========================== EXPERIENCE CARD ========================== */

function ExperienceCard({
  logo,
  period,
  company,
  companyUrl,
  role,
  location,
  bullets,
}) {
  return (
    <div style={expCard}>
      <div style={cardTop}>
        <div style={logoWrap}>
          {logo && <img src={logo} alt="" style={logoStyle} />}
        </div>

        <div style={topText}>
          <div style={periodStyle}>{period}</div>

          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={companyLink}
          >
            {company}
          </a>

          <div style={roleStyle}>{role}</div>
          <div style={locationStyle}>{location}</div>
        </div>
      </div>

      <div style={rule} />

      <details>
        <summary style={detailsButton}>View details</summary>
        <ul style={bulletList}>
          {bullets.map((b, i) => (
            <li key={i} style={bullet}>
              {b}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

/* ========================== EDUCATION CARD ========================== */

function EducationCard({
  logo,
  period,
  institute,
  degree,
  description,
  courses = [],
}) {
  return (
    <div style={eduCard} className="eduCardRow">
      {logo && <img src={logo} alt="" style={eduLogo} className="eduLogo" />}

      <div style={{ minWidth: 0 }}>
        <div style={periodStyle}>{period}</div>
        <div style={companyStyle}>{institute}</div>
        <div style={roleStyle}>{degree}</div>
        <p style={eduText}>{description}</p>

        {courses.length > 0 && (
          <>
            <div style={coursesLabel}>Relevant Coursework</div>
            <div style={courseChipsWrap}>
              {courses.map((c) => (
                <span key={c} style={courseChip}>
                  {c}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ========================== STYLES ========================== */

const experienceSection = {
  padding: "110px 0",
  background: "#fafafa",
};

const container = {
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "0 24px",
};

const header = {
  maxWidth: "820px",
  marginBottom: "56px",
};

const eyebrow = {
  margin: "0 0 10px",
  fontSize: "0.85rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(55,65,81,0.7)",
};

const title = {
  fontSize: "clamp(2.1rem, 4vw, 2.6rem)",
  margin: "0 0 14px",
  letterSpacing: "-0.03em",
  color: "#0f172a",
  fontWeight: 750,
};

const subtitle = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.75,
  color: "rgba(51,65,85,0.88)",
};

const sectionBlock = {
  marginTop: "14px",
};

const sectionTitle = {
  fontSize: "1.6rem",
  margin: "0 0 18px",
  color: "#111827",
  letterSpacing: "-0.02em",
};

const experienceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "26px",
};

const expCard = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "22px",
  padding: "26px",
  border: "1px solid rgba(17,24,39,0.08)",
  boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
};

const cardTop = {
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const logoWrap = {
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  display: "grid",
  placeItems: "center",
  background: "rgba(99,102,241,0.08)",
  border: "1px solid rgba(99,102,241,0.16)",
  flexShrink: 0,
};

const logoStyle = {
  width: "34px",
  height: "34px",
  objectFit: "cover",
  borderRadius: "8px",
};

const topText = {
  minWidth: 0,
};

const periodStyle = {
  fontSize: "0.78rem",
  color: "rgba(107,114,128,0.95)",
  marginBottom: "6px",
};

const companyStyle = {
  fontSize: "1.08rem",
  fontWeight: 700,
  color: "#111827",
};

const companyLink = {
  fontSize: "1.08rem",
  fontWeight: 750,
  color: "#111827",
  textDecoration: "none",
};

const roleStyle = {
  fontSize: "1.02rem",
  margin: "7px 0 4px",
  color: "rgba(17,24,39,0.92)",
};

const locationStyle = {
  fontSize: "0.92rem",
  color: "rgba(100,116,139,0.95)",
};

const rule = {
  height: 1,
  background:
    "linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)",
  margin: "18px 0",
};

const detailsButton = {
  fontSize: "0.9rem",
  color: "#4f46e5",
  cursor: "pointer",
  listStyle: "none",
  fontWeight: 650,
  userSelect: "none",
};

const bulletList = {
  paddingLeft: "18px",
  marginTop: "12px",
  marginBottom: 0,
};

const bullet = {
  fontSize: "0.95rem",
  color: "rgba(51,65,85,0.92)",
  marginBottom: "10px",
  lineHeight: 1.6,
};

const educationGrid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "22px",
};

const eduCard = {
  display: "flex",
  gap: "18px",
  alignItems: "flex-start",
  background: "rgba(255,255,255,0.92)",
  borderRadius: "22px",
  padding: "26px",
  border: "1px solid rgba(17,24,39,0.08)",
  boxShadow: "0 12px 34px rgba(0,0,0,0.06)",
};

const eduLogo = {
  width: "52px",
  height: "52px",
  borderRadius: "14px",
  objectFit: "cover",
  flexShrink: 0,
};

const eduText = {
  fontSize: "0.95rem",
  color: "rgba(51,65,85,0.86)",
  marginTop: "10px",
  lineHeight: 1.6,
};

const coursesLabel = {
  marginTop: "14px",
  fontSize: "0.85rem",
  fontWeight: 700,
  color: "rgba(15,23,42,0.85)",
  letterSpacing: "0.02em",
};

const courseChipsWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
};

const courseChip = {
  fontSize: "0.85rem",
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(99,102,241,0.10)",
  border: "1px solid rgba(99,102,241,0.22)",
  color: "rgba(55,65,81,0.92)",
};
