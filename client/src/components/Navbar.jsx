import { useEffect, useMemo, useState } from "react";

/**
 * Connected / pill navbar with:
 * - smooth scroll to sections
 * - active section highlight (IntersectionObserver)
 * - works with fixed header offset
 *
 * IMPORTANT:
 * Your sections must have IDs:
 * home, experience, projects, about, skills, contact
 *
 * Example:
 * <section id="experience" style={{ scrollMarginTop: "90px" }}>...</section>
 */
export default function Navbar() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-30% 0px -55% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  const handleClick = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    // fixed navbar offset
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 12;
    window.scrollTo({ top: y, behavior: "smooth" });

    // keep URL hash in sync (optional)
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <>
      <header style={nav}>
        <div style={navInner}>
          <div style={pill} className="nav-pill" aria-label="Primary navigation">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className={`nav-link ${active === it.id ? "active" : ""}`}
                style={navLink}
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        html { scroll-behavior: smooth; }

        .nav-pill{
          box-shadow: 0 18px 55px rgba(0,0,0,0.08);
        }

        .nav-link{
          position: relative;
          padding: 10px 14px;
          border-radius: 999px;
          transition: background 0.18s ease, transform 0.18s ease, color 0.18s ease;
          outline: none;
          user-select: none;
        }

        .nav-link:hover{
          background: rgba(99,102,241,0.10);
          transform: translateY(-1px);
        }

        .nav-link.active{
          background: linear-gradient(
            135deg,
            rgba(79,70,229,0.14),
            rgba(99,102,241,0.16)
          );
          color: #111827;
        }

        .nav-link:focus-visible{
          box-shadow: 0 0 0 4px rgba(99,102,241,0.25);
        }

        @media (max-width: 720px){
          .nav-pill{
            max-width: calc(100vw - 32px);
            overflow-x: auto;
            scrollbar-width: none;
          }
          .nav-pill::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </>
  );
}

/* ================= STYLES ================= */

const NAV_HEIGHT = 72;

const nav = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: `${NAV_HEIGHT}px`,
  zIndex: 100,
  display: "flex",
  justifyContent: "center",
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(15,23,42,0.08)",
};

const navInner = {
  maxWidth: "1100px",
  width: "100%",
  height: "100%",
  margin: "0 auto",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const pill = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "8px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.9)",
  border: "1px solid rgba(15,23,42,0.10)",
};

const navLink = {
  textDecoration: "none",
  fontSize: "0.92rem",
  color: "rgba(17,24,39,0.88)",
  fontWeight: 600,
  whiteSpace: "nowrap",
};
