import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
  { icon: <FaXTwitter className="size-5" />, href: "#", label: "Twitter / X" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
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
        background: "#1C1C28",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "64px",
        paddingBottom: "0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Main grid: brand (1/3) + link columns (2/3) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand column — spans 1 column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {logo.src && (
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }}
                />
              </a>
            )}
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                fontFamily: "Inter, sans-serif",
                margin: 0,
              }}
            >
              {description}
            </p>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0FA8DC";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#0FA8DC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
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
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
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
                    <a
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "Inter, sans-serif",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#0FA8DC"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
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
              color: "rgba(255,255,255,0.3)",
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
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "Inter, sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0FA8DC"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
