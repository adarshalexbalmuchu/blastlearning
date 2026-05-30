import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Courses', path: '/courses' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'For Teams', path: '/teams' },
      { label: 'Enterprise', path: '/enterprise' },
    ],
    company: [
      { label: 'About', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
    resources: [
      { label: 'Help Center', path: '/help' },
      { label: 'Community', path: '/community' },
      { label: 'Guides', path: '/guides' },
      { label: 'API Docs', path: '/api-docs' },
    ],
    legal: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
      { label: 'Security', path: '/security' },
      { label: 'Cookies', path: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-.001 4.001A2 2 0 014 2z', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', url: 'https://github.com' },
    { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27z', url: 'https://youtube.com' },
  ];

  return (
    <footer
      style={{
        background: '#F7F7F8',
        borderTop: '1px solid #ECECF1',
        paddingTop: '5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: '#FFFFFF',
            border: '1px solid #ECECF1',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '5rem',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(28,28,40,0.05)',
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#1C1C28',
              marginBottom: '1rem',
            }}
          >
            Ready to Transform Your Career?
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.1rem',
              color: '#5A5A6E',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Join thousands of learners advancing their careers with BlastLearning.
          </p>
          <Link
            to="/signup"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              textDecoration: 'none',
              padding: '0.875rem 2rem',
              borderRadius: '10px',
              background: '#5C56E8',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#4A43C9'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#5C56E8'; }}
          >
            Start Free Trial
          </Link>
        </motion.div>

        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#5C56E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'white',
                }}
              >
                B
              </div>
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#1C1C28',
                }}
              >
                BlastLearning
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                color: '#5A5A6E',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                maxWidth: '300px',
              }}
            >
              Empowering learners worldwide with cutting-edge courses and expert-led training.
            </p>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5C56E8';
                    e.currentTarget.style.borderColor = '#DDD9FA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5A5A6E';
                    e.currentTarget.style.borderColor = '#ECECF1';
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #ECECF1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5A5A6E',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1C1C28',
                  marginBottom: '1.25rem',
                  textTransform: 'capitalize',
                }}
              >
                {category}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#5C56E8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#5A5A6E';
                      }}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        color: '#5A5A6E',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #ECECF1',
            padding: '2rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#8E8EA0',
            }}
          >
            © 2025 BlastLearning. All rights reserved.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: '#8E8EA0',
              }}
            >
              Made with passion for learning
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
