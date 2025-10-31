import React from "react";

const ps5Logo = "https://upload.wikimedia.org/wikipedia/commons/7/7a/PS5_logo.png";
const ps4Logo = "https://upload.wikimedia.org/wikipedia/commons/8/87/PlayStation_4_logo_and_wordmark.svg";
const ps3Logo = "https://upload.wikimedia.org/wikipedia/commons/0/05/PlayStation_3_logo_%282009%29.svg";
const ps2Logo = "https://upload.wikimedia.org/wikipedia/commons/7/76/PlayStation_2_logo.svg";
const ps1Logo = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg";

const consoles = [
  {
    id: 1,
    name: "PlayStation 5",
    price: "Rp 15.000 / jam",
    logo: ps5Logo,
    background: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg",
  },
  {
    id: 2,
    name: "PlayStation 4",
    price: "Rp 10.000 / jam",
    logo: ps4Logo,
    background: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg",
  },
  {
    id: 3,
    name: "PlayStation 3",
    price: "Rp 8.000 / jam",
    logo: ps3Logo,
    background: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg",
  },
  {
    id: 4,
    name: "PlayStation 2",
    price: "Rp 6.000 / jam",
    logo: ps2Logo,
    background: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg",
  },
  {
    id: 5,
    name: "PlayStation 1",
    price: "Rp 4.000 / jam",
    logo: ps1Logo,
    background: "https://res.cloudinary.com/dutkpfai9/image/upload/v1761897448/unnamed_syyhw5.jpg",
  },
];

export default function Consoles() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* === HEADER === */}
      <div className="relative z-10 container mx-auto px-6">
        <img
          src="https://res.cloudinary.com/dr2cuy2gx/image/upload/v1761821347/Rentalin_Wordmark_zmblbi.png"
          alt="Logo"
          className="mx-auto w-56 md:w-72 drop-shadow-xl mb-12"
        />

        {/* === GRID KONSOLE === */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {consoles.map((item, index) => (
            <article
              key={item.id}
              style={{
                animationDelay: `${index * 0.15}s`,
                backgroundImage: `url(${item.background})`,
              }}
              className="relative bg-center bg-cover rounded-2xl shadow-lg overflow-hidden w-[380px] h-[520px]
                         flex flex-col justify-end items-center p-5 border border-gray-700
                         group transform transition duration-300 ease-out hover:-translate-y-2
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] animate-fadeInUp"
            >
              {/* Overlay gelap untuk kontras */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

              {/* Logo di tengah */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-36 h-24 object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info bawah */}
              <div className="relative z-10 text-center text-white mb-4">
                <h2 className="text-xl font-bold tracking-wide drop-shadow-md">{item.name}</h2>
                <p className="text-sm text-cyan-100 font-medium mt-1">{item.price}</p>
              </div>

              {/* Efek border animasi ala Rockstar */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00D8C8] transition-all duration-500 shadow-[inset_0_0_25px_#00D8C8] opacity-0 group-hover:opacity-100"></div>
            </article>
          ))}
        </div>
      </div>

      {/* Animasi masuk */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
