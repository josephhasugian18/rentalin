import React, { useState } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Paylater() {
  const limit = 2000000;
  const terpakai = 750000;
  const sisa = limit - terpakai;
  const creditScore = 82; // contoh nilai credit score
  const riwayat = [
    { id: 1, tanggal: "2025-10-01", deskripsi: "Sewa PS5 Digital", nominal: 500000 },
    { id: 2, tanggal: "2025-10-15", deskripsi: "Sewa PS4 Pro", nominal: 250000 },
  ];

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
          Paylater Member
        </h1>

        {/* Credit Score */}
        <div
          onClick={() => setShowPopup(true)}
          className="flex items-center gap-2 bg-gray-900/50 border border-cyan-500/40 rounded-xl px-4 py-2 cursor-pointer hover:bg-cyan-500/10 transition-all shadow-inner"
        >
          <Info size={20} className="text-cyan-400" />
          <div className="text-right">
            <p className="text-xs text-gray-400 leading-tight">Credit Score</p>
            <p
              className={`text-lg font-bold ${
                creditScore >= 85 ? "text-green-400" : "text-red-400"
              }`}
            >
              {creditScore}%
            </p>
          </div>
        </div>
      </div>

      {/* Limit Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-900/60 border border-cyan-500/40 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm text-gray-400">Total Limit</p>
          <h3 className="text-2xl font-bold text-cyan-300 mt-1">
            Rp {limit.toLocaleString("id-ID")}
          </h3>
        </div>

        <div className="bg-gray-900/60 border border-fuchsia-500/40 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm text-gray-400">Limit Terpakai</p>
          <h3 className="text-2xl font-bold text-fuchsia-300 mt-1">
            Rp {terpakai.toLocaleString("id-ID")}
          </h3>
        </div>

        <div className="bg-gray-900/60 border border-green-400/40 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm text-gray-400">Sisa Limit</p>
          <h3 className="text-2xl font-bold text-green-300 mt-3">
            Rp {sisa.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>

      {/* Riwayat */}
      <div className="bg-gray-900/60 border border-[#00D8C8]/20 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-cyan-300 mb-4">
          Riwayat Penggunaan
        </h2>
        <div className="space-y-3">
          {riwayat.map((r) => (
            <div
              key={r.id}
              className="flex justify-between bg-[#111827]/60 border border-[#00D8C8]/20 rounded-xl px-4 py-3 hover:border-fuchsia-500/30 transition"
            >
              <div>
                <p className="text-gray-300 font-medium">{r.deskripsi}</p>
                <p className="text-sm text-gray-500">{r.tanggal}</p>
              </div>
              <p className="text-fuchsia-400 font-semibold">
                - Rp {r.nominal.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Credit Score */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#10141f] border border-cyan-500/40 rounded-2xl p-8 shadow-2xl max-w-md w-[90%] text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Tentang Credit Score
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Credit Score adalah penilaian kelayakan penggunaan Paylater kamu.
                Jika nilai di bawah <span className="text-red-400 font-semibold">85%</span>,
                kamu tidak dapat menggunakan fitur Paylater hingga skor kamu
                meningkat melalui riwayat pembayaran yang baik.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-cyan-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-cyan-400 transition-all"
              >
                Mengerti
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
