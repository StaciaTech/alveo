import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => location.pathname === path;

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const NavDropdown = ({
    title,
    items,
    isOpen,
    onClick,
  }: {
    title: string;
    items: { label: string; href: string }[];
    isOpen: boolean;
    onClick: () => void;
  }) => (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`flex items-center space-x-1 nav-link py-2 px-4 rounded-lg transition-colors ${
          items.some((item) => isActive(item.href))
            ? "text-primary bg-primary/5"
            : ""
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-card border rounded-lg shadow-elegant z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block px-4 py-3 text-sm nav-link rounded-lg ${
                isActive(item.href) ? "text-primary bg-primary/5" : ""
              }`}
              onClick={() => {
                setActiveDropdown(null);
                setIsMenuOpen(false);
                ScrollToTop();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={ScrollToTop}
          >
            <img
              src="/lovable-uploads/3bb0f726-45da-427f-9b31-fc17baefc685.png"
              alt="ALVEO 4P Logo"
              className="h-8 w-auto"
            />
            <div className="text-xl font-bold alveo-logo-text">ALVEO 4P</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "text-primary" : ""}`}
              onClick={ScrollToTop}
            >
              Home
            </Link>

            <NavDropdown
              title="About Us"
              isOpen={activeDropdown === "about"}
              onClick={() => handleDropdownClick("about")}
              items={[
                { label: "Overview", href: "/about/overview" },
                { label: "Vision & Mission", href: "/about/vision-mission" },
                {
                  label: "Board of Trustees",
                  href: "/about/board-of-trustees",
                },
                { label: "Leadership", href: "/about/leadership" },
              ]}
            />

            <NavDropdown
              title="Our Work"
              isOpen={activeDropdown === "work"}
              onClick={() => handleDropdownClick("work")}
              items={[
                { label: "Our Projects", href: "/work/projects" },
                {
                  label: "Programmes & Events",
                  href: "/work/programmes-events",
                },
              ]}
            />

            <NavDropdown
              title="Get Involved"
              isOpen={activeDropdown === "involved"}
              onClick={() => handleDropdownClick("involved")}
              items={[
                {
                  label: "Become a Volunteer",
                  href: "/get-involved/volunteer",
                },
                { label: "Partner with Us", href: "/get-involved/partner" },
                { label: "Careers", href: "/get-involved/careers" },
              ]}
            />

            <Link
              to="/gallery"
              className={`nav-link ${
                isActive("/gallery") ? "text-primary" : ""
              }`}
              onClick={ScrollToTop}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${
                isActive("/contact") ? "text-primary" : ""
              }`}
              onClick={ScrollToTop}
            >
              Contact
            </Link>

            <Button className="alveo-gradient text-white hover:opacity-90 transition-opacity">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              <Link
                to="/"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-1">
                <button
                  onClick={() => handleDropdownClick("about-mobile")}
                  className="flex items-center justify-between w-full py-2 nav-link"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "about-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about-mobile" && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/about#overview"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/about#vision-mission"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      to="/about#board-of-trustees"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Board of Trustees
                    </Link>
                    <Link
                      to="/about#leadership"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Leadership
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => handleDropdownClick("work-mobile")}
                  className="flex items-center justify-between w-full py-2 nav-link"
                >
                  <span>Our Work</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "work-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "work-mobile" && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/work#projects"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Projects
                    </Link>
                    <Link
                      to="/work#programmes-events"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Programmes & Events
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => handleDropdownClick("involved-mobile")}
                  className="flex items-center justify-between w-full py-2 nav-link"
                >
                  <span>Get Involved</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "involved-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "involved-mobile" && (
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/get-involved#volunteer"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Become a Volunteer
                    </Link>
                    <Link
                      to="/get-involved#partner"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Partner with Us
                    </Link>
                    <Link
                      to="/get-involved#careers"
                      className="block py-2 text-sm nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="block py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Button className="w-full mt-4 alveo-gradient text-white">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
