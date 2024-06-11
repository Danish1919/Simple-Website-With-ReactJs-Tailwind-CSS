import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="text-lg mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
    </p>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>Respect for our customers</li>
          <li>Passion for innovation</li>
          <li>Commitment to excellence</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <p className="text-lg mb-4">
          Meet our team of experts who are dedicated to providing the best experience for our customers.
        </p>
        <img src="team-photo.jpg" alt="Team Photo" className="w-full mb-4" />
      </div>
    </div>
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </div>
  )
}
