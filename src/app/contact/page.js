import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="max-w-xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-indigo-400 text-white mb-8">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-white font-semibold"
            >
              Send
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}