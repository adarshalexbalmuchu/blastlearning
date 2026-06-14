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
  logo = {
    url: "/",
    src: "",
    alt: "logo",
    title: "",
  },
  sections = [],
  description = "",
  socialLinks = defaultSocialLinks,
  copyright = "",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-20 bg-[#F7F7F8] border-t border-[#ECECF1]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">

          {/* Brand column */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                {logo.src && (
                  <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8 w-auto" />
                )}
              </a>
              {logo.title && <h2 className="text-xl font-semibold text-[#1C1C28]">{logo.title}</h2>}
            </div>
            <p className="max-w-[70%] text-sm text-[#5A5A6E] leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center gap-5 text-[#5A5A6E]">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-[#0FA8DC] transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-[#1C1C28] font-[Poppins,sans-serif]">{section.title}</h3>
                <ul className="space-y-3 text-sm text-[#5A5A6E]">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-[#0FA8DC] transition-colors">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#ECECF1] py-8 text-xs font-medium text-[#6B6B7B] md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#0FA8DC] transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
