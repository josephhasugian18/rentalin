import React, { useRef, useState, useEffect } from "react";
import { Camera } from "lucide-react";

export default function AccountVerification() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // Aktifkan kamera
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        alert("❌ Gagal mengakses kamera. Pastikan izin kamera sudah diaktifkan.");
      }
    }
    startCamera();
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    // Ambil snapshot dari video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Simpan gambar
    const imageData = canvas.toDataURL("image/png");
    setPhoto(imageData);
    setCaptured(true);
  };

  const handleVerify = () => {
    if (!photo) {
      alert("❌ Harap ambil foto KTP terlebih dahulu!");
      return;
    }
    alert("✅ KTP berhasil diverifikasi!");
    console.log("Foto base64:", photo);
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900/60 border border-[#00D8C8]/30 p-8 rounded-2xl shadow-lg backdrop-blur-md text-center animate-fade-in">
      <Camera className="mx-auto text-[#00D8C8]" size={60} />
      <h2 className="text-3xl font-bold text-[#00D8C8] mt-4 mb-4">
        Verifikasi KTP via Kamera
      </h2>
      <p className="text-gray-400 mb-6">
        Posisikan KTP Anda di area kamera kiri atas, lalu ambil foto untuk verifikasi.
      </p>

      <div className="relative bg-black rounded-lg overflow-hidden">
        {/* Video utama */}
        {!captured ? (
          <video
            ref={videoRef}
            autoPlay
            className="w-full h-64 object-cover border border-gray-700 rounded-lg"
          />
        ) : (
          <img
            src={photo}
            alt="KTP"
            className="w-full h-64 object-cover border border-gray-700 rounded-lg"
          />
        )}

        {/* Kotak kecil di kiri atas (seukuran KTP) */}
        {!captured && (
          <div className="absolute top-3 left-3 w-36 h-24 border-2 border-[#00D8C8] rounded-md opacity-80 shadow-lg">
            {/* Tambahan efek sudut */}
            <div className="absolute top-0 left-0 w-4 h-1 bg-[#00D8C8]" />
            <div className="absolute top-0 left-0 w-1 h-4 bg-[#00D8C8]" />
            <div className="absolute top-0 right-0 w-4 h-1 bg-[#00D8C8]" />
            <div className="absolute top-0 right-0 w-1 h-4 bg-[#00D8C8]" />
            <div className="absolute bottom-0 left-0 w-4 h-1 bg-[#00D8C8]" />
            <div className="absolute bottom-0 left-0 w-1 h-4 bg-[#00D8C8]" />
            <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#00D8C8]" />
            <div className="absolute bottom-0 right-0 w-1 h-4 bg-[#00D8C8]" />
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="mt-6 flex justify-center gap-4">
        {!captured ? (
          <button
            onClick={handleCapture}
            className="py-3 px-6 rounded-lg bg-[#00D8C8]/20 border border-[#00D8C8]/50 text-[#00D8C8] font-semibold hover:bg-[#00D8C8]/30 transition-all"
          >
            Ambil Foto
          </button>
        ) : (
          <>
            <button
              onClick={() => setCaptured(false)}
              className="py-3 px-6 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 font-semibold hover:bg-gray-600/50 transition-all"
            >
              Ulangi
            </button>
            <button
              onClick={handleVerify}
              className="py-3 px-6 rounded-lg bg-[#00D8C8]/20 border border-[#00D8C8]/50 text-[#00D8C8] font-semibold hover:bg-[#00D8C8]/30 transition-all"
            >
              Verifikasi
            </button>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
