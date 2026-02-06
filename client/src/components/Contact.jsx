export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="contact-title">Let’s Connect</h2>

        <p className="contact-text">
          I build systems at the intersection of software engineering, machine
          learning, and research.
          <br />
          If you’re working on something interesting, let’s talk.
        </p>

        <div className="contact-actions">
          <a href="mailto:saradubey98@gmail.com" className="btn primary">
            Start a Conversation <span className="arrow">↗</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Resume (PDF)
          </a>
        </div>

        <div className="divider" />

        <div className="contact-info">
          <span className="pill">
            <span className="icon">📍</span> United States
          </span>

          <span className="pill">
            <span className="icon">✉️</span>
            <a className="email" href="mailto:saradubey98@gmail.com">
              saradubey98@gmail.com
            </a>
          </span>
        </div>

        <div className="divider" />

        <div className="socials">
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing
          </a>
        </div>

        {/* Footer text: separated */}
        <footer className="footer">
          <p className="copy">© {year} Sara Dubey</p>
          <p className="built">Built with care</p>
        </footer>
      </section>

      <style>{`
        /* ---------- LAYOUT ---------- */
        .contact {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 5.5rem 2rem 4.5rem;
          text-align: center;
        }

        /* subtle background glow */
        .contact::before {
          content: "";
          position: absolute;
          inset: -60px;
          background: radial-gradient(
            circle,
            rgba(79, 70, 229, 0.10),
            transparent 70%
          );
          filter: blur(36px);
          z-index: -1;
        }

        /* ---------- TYPOGRAPHY ---------- */
        .contact-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          color: #0f172a;
        }

        .contact-text {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #4b5563;
          margin: 0 auto 2.6rem;
          max-width: 56ch;
        }

        /* ---------- BUTTONS ---------- */
        .contact-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.8rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.85rem 1.6rem;
          border-radius: 14px;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
          user-select: none;
        }

        .btn.primary {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white;
          box-shadow: 0 16px 40px rgba(79, 70, 229, 0.25);
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 55px rgba(79, 70, 229, 0.33);
        }

        .arrow {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .btn.secondary {
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.35);
          background: rgba(99, 102, 241, 0.06);
        }

        .btn.secondary:hover {
          transform: translateY(-2px);
          background: rgba(99, 102, 241, 0.10);
        }

        .btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25);
        }

        /* ---------- DIVIDERS ---------- */
        .divider {
          height: 1px;
          margin: 2.4rem 0;
          background: linear-gradient(
            to right,
            transparent,
            rgba(99, 102, 241, 0.35),
            transparent
          );
        }

        /* ---------- INFO PILLS ---------- */
        .contact-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.95rem;
          border-radius: 999px;
          border: 1px solid rgba(17, 24, 39, 0.10);
          background: rgba(255, 255, 255, 0.65);
          color: #6b7280;
          font-size: 0.95rem;
        }

        .icon {
          opacity: 0.9;
        }

        .email {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px dashed rgba(99, 102, 241, 0.45);
        }

        .email:hover {
          color: #4f46e5;
          border-bottom-color: rgba(99, 102, 241, 0.85);
        }

        /* ---------- SOCIALS ---------- */
        .socials {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          font-size: 1rem;
          margin-top: 0.2rem;
        }

        .socials a {
          text-decoration: none;
          color: #4f46e5;
          padding: 0.35rem 0.5rem;
          border-radius: 10px;
          transition: all 0.18s ease;
        }

        .socials a:hover {
          color: #111827;
          background: rgba(99, 102, 241, 0.10);
          transform: translateY(-1px);
        }

        .socials a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25);
        }

        /* ---------- FOOTER ---------- */
        .footer {
          margin-top: 3.2rem;
          display: flex;
          flex-direction: column; /* keeps "Built with care" separate */
          align-items: center;
          gap: 0.35rem;
          color: #9ca3af;
        }

        .copy {
          margin: 0;
          font-size: 0.9rem;
        }

        .built {
          margin: 0;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          opacity: 0.9;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 560px) {
          .contact {
            padding: 5rem 1.25rem 4rem;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* ---------- DARK MODE ---------- */
        @media (prefers-color-scheme: dark) {
          .contact-title {
            color: #f3f4f6;
          }

          .contact-text {
            color: rgba(226, 232, 240, 0.82);
          }

          .pill {
            background: rgba(2, 6, 23, 0.35);
            border-color: rgba(148, 163, 184, 0.18);
            color: rgba(226, 232, 240, 0.75);
          }

          .btn.secondary {
            color: #a5b4fc;
            border-color: rgba(165, 180, 252, 0.35);
            background: rgba(99, 102, 241, 0.10);
          }

          .socials a {
            color: #a5b4fc;
          }

          .socials a:hover {
            color: #ffffff;
            background: rgba(99, 102, 241, 0.16);
          }

          .footer {
            color: rgba(148, 163, 184, 0.85);
          }
        }
      `}</style>
    </>
  );
}
