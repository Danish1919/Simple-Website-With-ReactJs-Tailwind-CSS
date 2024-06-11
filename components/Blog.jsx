import React from 'react'

export default function Blog() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-lg mb-6">
        Stay up-to-date with the latest news and insights from our team.
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <article className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                How to Boost Your Productivity with Our Tools
              </a>
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <p className="text-sm text-gray-600">
              Posted on February 22, 2023 by John Doe
            </p>
          </article>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <article className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                The Future of Technology: Trends to Watch
              </a>
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <p className="text-sm text-gray-600">
              Posted on January 15, 2023 by Jane Doe
            </p>
          </article>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <article className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Our Team's Favorite Productivity Hacks
              </a>
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <p className="text-sm text-gray-600">
              Posted on December 10, 2022 by Bob Smith
            </p>
          </article>
        </div>
      </div>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
    </div>
  )
}
