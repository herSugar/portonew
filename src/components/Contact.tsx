import { useRef, useState } from "react";
import { FiSend, FiMail, FiUser, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here
    formData.append("access_key", "432e185b-49f4-4670-9df0-879c764e9d6e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
      <p className="text-gray-400 mb-12">Got a project in mind? Send me a message.</p>

      <div className="max-w-2xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg">
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
                name="name"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Your name"
                required
                disabled={status === "submitting"}
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
                name="email"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
                required
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your message..."
              required
              disabled={status === "submitting"}
            ></textarea>
          </div>

          {status === "error" && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-2 text-red-400 text-sm">
              <FiAlertCircle className="shrink-0 mt-0.5" />
              <p>{errorMessage}</p>
            </div>
          )}

          {status === "success" && (
            <div className="mb-6 p-3 bg-green-500/10 border border-green-500/50 rounded-lg flex items-start gap-2 text-green-400 text-sm animate-fadein">
              <FiCheckCircle className="shrink-0 mt-0.5" />
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            {status !== "submitting" && <FiSend />}
          </button>
        </form>
      </div>
    </div>
  );
}