export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Foto Profil - Posisi Tengah Atas */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 z-10">
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse" />
        <div className="absolute inset-4 rounded-full overflow-hidden z-10 border-4 border-gray-700 hover:scale-105 transition-transform duration-300">
          <img
            src="/images/fotoDiri.jpg"
            alt="Profile"
            className="object-cover object-bottom w-full h-full transform -translate-x-2 scale-105 group-hover:scale-110 transition-transform duration-500"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
      </div>

      {/* Konten Teks - Posisi Bawah Foto */}
      <div className="container mx-auto px-6 text-center z-10 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-400">I Made Restu Jaya Putra</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Frontend Developer specializing in React and TypeScript
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-blue-400 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}