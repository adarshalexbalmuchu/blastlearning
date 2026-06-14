import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import blastLogo from '../assets/blast-logo.webp';

const sections = [
  {
    title: 'Programs',
    links: [
      { name: 'CBSE Plan', href: '/programs/cbse-plan' },
      { name: 'Math Genius Maker', href: '/programs/math-genius' },
      { name: 'English Mastery', href: '/programs/english-mastery' },
      { name: 'SAT Prep Pass', href: '/programs/sat-prep' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'For Parents', href: '/for-parents' },
      { name: 'For Students', href: '/for-students' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Study Library', href: '/library' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Programs Overview', href: '/programs' },
      { name: 'Get Started', href: '/programs' },
    ],
  },
];

const socialLinks = [
  { icon: <FaXTwitter className="size-5" />, href: '#', label: 'Twitter / X' },
  { icon: <FaYoutube className="size-5" />, href: '#', label: 'YouTube' },
  { icon: <FaInstagram className="size-5" />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedin className="size-5" />, href: '#', label: 'LinkedIn' },
];

const legalLinks = [
  { name: 'Terms and Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const Footer = () => {
  return (
    <footer className="py-20 bg-[#F7F7F8] border-t border-[#ECECF1]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">

          {/* Brand column */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-xs">
            <Link to="/">
              <img src={blastLogo} alt="Blast Learning" className="h-8 w-auto" />
            </Link>
            <p className="max-w-[70%] text-sm text-[#5A5A6E] leading-relaxed">
              AI-powered learning retention platform. We help Indian students in Classes 8-12 retain 90% of what they study, so coaching fees become lasting knowledge.
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
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-[#1C1C28] font-[Poppins,sans-serif]">{section.title}</h3>
                <ul className="space-y-3 text-sm text-[#5A5A6E]">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-[#0FA8DC] transition-colors">
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#ECECF1] py-8 text-xs font-medium text-[#6B6B7B] md:flex-row md:items-center">
          <p className="order-2 md:order-1">© 2025 Blast Learning. All rights reserved. · Bangalore, India</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#0FA8DC] transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
