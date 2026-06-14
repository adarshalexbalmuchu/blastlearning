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
        background: "#EFF6FB",
        borderTop: "1px solid #D0E8F5",
        paddingTop: "64px",
        paddingBottom: "0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

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
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: "36px", width: "auto" }}
                />
              </a>
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
                    <a
                      href={link.href}
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
