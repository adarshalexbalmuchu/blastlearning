import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import blastLogo from '../assets/blast-logo.webp';
import { Footer7 } from './ui/footer-7';

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

const Footer = () => (
  <Footer7
    logo={{ url: '/', src: blastLogo, alt: 'Blast Learning', title: '' }}
    description="AI-powered learning retention platform. We help Indian students in Classes 8-12 retain 90% of what they study, so coaching fees become lasting knowledge."
    sections={sections}
    socialLinks={socialLinks}
    copyright="© 2025 Blast Learning. All rights reserved. · Bangalore, India"
    legalLinks={legalLinks}
  />
);

export default Footer;
