import React from 'react'

export default function ContactUs() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg mb-6">
      Get in touch with us for any questions, feedback, or just to say hello!
    </p>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <form>
          <label className="block mb-2 text-lg" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 pl-10 text-lg text-gray-700"
            placeholder="Your Name"
          />
          <label className="block mb-2 text-lg" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 pl-10 text-lg text-gray-700"
            placeholder="your@email.com"
          />
          <label className="block mb-2 text-lg" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 pl-10 text-lg text-gray-700 h-48"
            placeholder="Your message..."
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">Our Address</h2>
        <p className="text-lg mb-4">
          123 Main St, Anytown, USA 12345
        </p>
        <h2 className="text-2xl font-bold mb-2">Phone Number</h2>
        <p className="text-lg mb-4">
          (555) 123-4567
        </p>
        <h2 className="text-2xl font-bold mb-2">Email Address</h2>
        <p className="text-lg mb-4">
          <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-900">
            info@example.com
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}
