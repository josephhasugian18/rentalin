import React from "react";

const games = [
  { id: 1, platform: "PS5", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 2, platform: "PS4", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 3, platform: "PS5", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 4, platform: "PS5 / PS1", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 5, platform: "PS3 / PS2", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 6, platform: "PS5 / PS4", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 7, platform: "PS5", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 8, platform: "PS4", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 9, platform: "PS5", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 10, platform: "PS5 / PS1", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 11, platform: "PS3 / PS2", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
  { id: 12, platform: "PS5 / PS4", image: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg" },
];

const ps5Logo = "https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png";
const ps4Logo = "https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg";
const ps3Logo = "https://upload.wikimedia.org/wikipedia/commons/0/05/PlayStation_3_logo_%282009%29.svg";
const ps2Logo = "https://upload.wikimedia.org/wikipedia/commons/7/76/PlayStation_2_logo.svg";
const ps1Logo = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg";

export default function Games() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="relative-auto text-center mb-2">
        <img
          src="https://res.cloudinary.com/dr2cuy2gx/image/upload/v1761821347/Rentalin_Wordmark_zmblbi.png"
          alt="Logo"
          className="mx-auto w-64 md:w-80 drop-shadow-2xl"
        />
      </div>

      {/* ===== Hero Section ===== */}
        <section className="relative text-center min-h-[70vh] flex flex-col justify-center items-center overflow-hidden rounded-2xl mx-auto w-full max-w-7xl">
            <img
            src="https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg"
            alt="gaming background"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        </section>

      {/* ===== Daftar Game ===== */}
      <div className="relative z-10 container mx-auto px-6 mt-16 text-black">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {games.map((game, index) => (
            <article
              key={game.id}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition w-[400px] h-[550px] flex flex-col justify-between
                        transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] animate-fadeInUp"
            >
              {/* Gambar Game */}
              <div className="flex-1 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.platform}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bagian platform logo */}
              <div className="bg-[#007BE5] flex justify-center items-center gap-2 py-2">
                {game.platform.includes("PS5") && (
                  <img src={ps5Logo} alt="PS5 Logo" className="h-5 md:h-6 object-contain" />
                )}
                {game.platform.includes("PS4") && (
                  <img src={ps4Logo} alt="PS4 Logo" className="h-5 md:h-6 object-contain" />
                )}
                {game.platform.includes("PS3") && (
                  <img src={ps3Logo} alt="PS3 Logo" className="h-5 md:h-6 object-contain" />
                )}
                {game.platform.includes("PS2") && (
                  <img src={ps2Logo} alt="PS2 Logo" className="h-5 md:h-6 object-contain" />
                )}
                {game.platform.includes("PS1") && (
                  <img src={ps1Logo} alt="PS1 Logo" className="h-5 md:h-6 object-contain" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ===== Animasi CSS ===== */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
