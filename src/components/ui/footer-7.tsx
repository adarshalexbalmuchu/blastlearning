import React from "react";
import { Link } from "react-router-dom";

const IconX = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const IconYT = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const IconIG = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const IconLI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSocialLinks = [
  { icon: <IconX />, href: "#", label: "Twitter / X" },
  { icon: <IconYT />, href: "#", label: "YouTube" },
  { icon: <IconIG />, href: "#", label: "Instagram" },
  { icon: <IconLI />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = { url: "/", src: "", alt: "logo", title: "" },
  sections = [],
  description = "",
  socialLinks = defaultSocialLinks,
  copyright = "",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D0E8F5",
        paddingTop: "64px",
        paddingBottom: "0",
      }}
    >
      <div className="footer-inner" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main grid: 4 equal columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {logo.src && (
              <Link to={logo.url} className="footer-logo-link">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  style={{ height: "36px", width: "auto" }}
                />
              </Link>
            )}
            <p
              style={{
                fontSize: "14px",
                color: "#5A5A6E",
                lineHeight: 1.8,
                fontFamily: "Inter, sans-serif",
                margin: 0,
              }}
            >
              {description}
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#FFFFFF",
                    border: "1px solid #C8E0EF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5A5A6E",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0FA8DC";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#0FA8DC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.color = "#5A5A6E";
                    e.currentTarget.style.borderColor = "#C8E0EF";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#8E8EA0",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  marginBottom: "20px",
                  marginTop: 0,
                }}
              >
                {section.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      style={{
                        fontSize: "14px",
                        color: "#3D3D4E",
                        fontFamily: "Inter, sans-serif",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#0FA8DC"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D4E"; }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: "1px solid #C8E0EF",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#8E8EA0",
              fontFamily: "Inter, sans-serif",
              margin: 0,
            }}
          >
            {copyright}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  fontSize: "13px",
                  color: "#8E8EA0",
                  fontFamily: "Inter, sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0FA8DC"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#8E8EA0"; }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-inner {
          padding: 0 32px;
        }
        @media (max-width: 768px) {
          .footer-inner {
            padding: 0 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0 24px !important;
          }
          .footer-grid > div {
            padding-top: 24px;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
            padding-top: 0;
            border-bottom: 1px solid #ECECF1;
            padding-bottom: 24px;
          }
          .footer-grid > div > h3 {
            margin-top: 0 !important;
            letter-spacing: 0.09em;
          }
          .footer-grid ul {
            gap: 0 !important;
          }
          .footer-grid ul li a {
            display: block;
            padding: 10px 0 !important;
            min-height: 44px;
            display: flex;
            align-items: center;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: auto;
          }
        }
      `}</style>
    </footer>
  );
};
