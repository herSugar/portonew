// App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 1. Navbar (Fixed di atas) */}
      <Navbar />

      {/* 2. Konten Utama */}
      <main>
        <Hero />     {/* Section #home */}
        <Projects /> {/* Section #projects */}
        <Skills />   {/* Section #skills */}
        <Contact />  {/* Section #contact */}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}