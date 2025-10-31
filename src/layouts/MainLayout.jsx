import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/games", label: "Game" },
    { to: "/consoles", label: "Konsol" },
    { to: "/login", label: "Login" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* ===== Navbar ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dr2cuy2gx/image/upload/v1761821348/Rentalin_Lettermark_mitma7.png"
              alt="Logo"
              className="w-10 h-10 object-contain rounded-md drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-semibold tracking-wide transition ${
                  scrolled
                    ? "text-[#00D8C8] hover:text-[#00B4E6]"
                    : "text-white hover:text-[#00D8C8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition ${
              scrolled
                ? "text-[#00D8C8] bg-black/50"
                : "text-white bg-[#00B4E6]/30"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 shadow-md backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col items-center py-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#00D8C8] font-medium hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== Main Content ===== */}
      <main className="flex-1 container mx-auto px-6 py-24">
        <Outlet />
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800">
        <p>© 2025 RENTALIN</p>
      </footer>
    </div>
  );
}
