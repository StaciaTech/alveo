import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/3bb0f726-45da-427f-9b31-fc17baefc685.png" 
                alt="ALVEO 4P Logo" 
                className="h-8 w-auto"
              />
              <div className="text-xl font-bold alveo-logo-text">
                ALVEO 4P
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming respiratory health through preventive, predictive, personalized, and participative medicine.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Building a healthier tomorrow</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Work */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Focus</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Respiratory Health Research</li>
              <li>• Advanced Diagnostics</li>
              <li>• Community Outreach</li>
              <li>• Educational Programs</li>
              <li>• Policy Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>info@alveo4p.org</div>
                  <div>research@alveo4p.org</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>+91 (0) 000-000-0000</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  Research Center, Medical District<br />
                  City, State - 000000<br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ALVEO 4P Charitable Trust. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/transparency" className="text-muted-foreground hover:text-primary transition-colors">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;