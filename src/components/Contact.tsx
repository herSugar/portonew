import { useRef } from "react";
import { FiSend, FiMail, FiUser } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika pengiriman form di sini
    alert("Pesan terkirim!");
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}