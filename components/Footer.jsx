import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-12 pb-6">
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Our Story
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Our Team
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Resources</h2>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg font-bold mb-2">Stay Connected</h2>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:text-blue-900">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center mb-4">
        &copy; 2023 Example Inc. All rights reserved.
      </p>
    </div>
  </footer>
  )
}
