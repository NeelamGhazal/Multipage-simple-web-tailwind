export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-elegance-charcoal">Contact Us</h1>
      <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-elegance-charcoal">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elegance-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-elegance-charcoal">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elegance-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-elegance-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elegance-gold"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-elegance-gold text-elegance-charcoal py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

