import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { User, Settings, ShieldCheck, LogOut } from "lucide-react";

export default function MemberLayout() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* === NAVBAR === */}
      <nav className="w-full bg-black/30 border-b border-gray-800 px-8 py-3 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        {/* === LOGO RENTALIN === */}
        <div className="flex items-center gap-3">
          <Link
            to="/member/dashboard"
            className="hover:opacity-90 transition-opacity flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dr2cuy2gx/image/upload/v1761821348/Rentalin-Wordmark-White_nrgnwo.png"
              alt="Rentalin"
              className="h-6 w-auto object-contain" // ← dikurangi ukuran tinggi logo
            />
          </Link>
        </div>

        {/* === MENU KANAN === */}
        <div className="flex items-center gap-8 font-semibold">
          <Link
            to="/member/orders"
            className="hover:text-[#00D8C8] transition-colors"
          >
            Pesanan Saya
          </Link>

          {/* === PROFIL DROPDOWN === */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-2 bg-[#00D8C8]/10 px-4 py-2 rounded-full border border-[#00D8C8]/40 hover:bg-[#00D8C8]/20 transition-all"
            >
              <User size={18} />
              <span className="font-medium text-sm">
                {user?.name || "Member"}
              </span>
            </button>

            {/* POPUP MENU */}
            {openMenu && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md z-50 animate-fade-in">
                <div className="p-3 border-b border-gray-700">
                  <p className="text-sm text-gray-400">Masuk sebagai</p>
                  <p className="font-semibold text-[#00D8C8] truncate">
                    {user?.email}
                  </p>
                </div>

                <ul className="py-2">
                  <li>
                    <Link
                      to="/member/settings"
                      className="flex items-center gap-3 px-5 py-2 hover:bg-[#00D8C8]/10 transition-all"
                      onClick={() => setOpenMenu(false)}
                    >
                      <Settings size={18} /> Pengaturan Akun
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/member/verification"
                      className="flex items-center gap-3 px-5 py-2 hover:bg-[#00D8C8]/10 transition-all"
                      onClick={() => setOpenMenu(false)}
                    >
                      <ShieldCheck size={18} /> Verifikasi Akun
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-2 text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <LogOut size={18} /> Keluar
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* === KONTEN HALAMAN === */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>

      {/* === FOOTER === */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800">
        <p>© 2025 RENTALIN</p>
      </footer>

      {/* === ANIMASI FADE-IN === */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
