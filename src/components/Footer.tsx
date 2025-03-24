
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-honey-900 text-white">
      <div className="container px-6 md:px-10 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-honey-500 flex items-center justify-center">
                <span className="inline-block">🍯</span>
              </span>
              <span className="text-xl font-serif font-bold">Pure Honey</span>
            </Link>
            <p className="text-honey-100/80 text-sm max-w-xs">
              Bringing the finest natural honey from our hives to your home since 2010.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              <FooterLink to="/products">Raw Honey</FooterLink>
              <FooterLink to="/products">Manuka Honey</FooterLink>
              <FooterLink to="/products">Wildflower Honey</FooterLink>
              <FooterLink to="/products">Gift Sets</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-honey-100/80 text-sm">
              <li>1234 Honey Lane</li>
              <li>Bee City, HC 98765</li>
              <li>contact@purehoney.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-honey-700/50 text-center text-honey-100/60 text-sm">
          <p>© {new Date().getFullYear()} Pure Honey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 w-9 rounded-full bg-honey-800 hover:bg-honey-700 flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-honey-100/80 hover:text-honey-400 transition-colors text-sm hover-slide-up inline-block"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
