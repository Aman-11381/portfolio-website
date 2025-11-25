import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-20 flex-grow">
        {/* Page heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Together
          </h1>
          <p className="text-xl text-gray-600">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Contact form */}
        <form className="space-y-6">
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              SUBJECT <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
              placeholder="What's this about?"
            />
          </div>

          {/* Message field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              MESSAGE <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={8}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              SEND IT
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
