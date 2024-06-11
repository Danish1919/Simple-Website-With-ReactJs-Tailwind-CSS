import React from 'react'

export default function Reviews() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-3xl font-bold mb-4">Reviews</h1>
    <p className="text-lg mb-6">
      Don't just take our word for it. Hear from our satisfied customers.
    </p>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-orange-500">5/5</span> Amazing Experience!
          </h2>
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          </p>
          <p className="text-sm text-gray-600">
            - John Doe, Happy Customer
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-orange-500">4.5/5</span> Great Product!
          </h2>
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          </p>
          <p className="text-sm text-gray-600">
            - Jane Doe, Satisfied Customer
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-orange-500">5/5</span> Excellent Service!
          </h2>
          <p className="text-lg mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          </p>
          <p className="text-sm text-gray-600">
            - Bob Smith, Happy Customer
          </p>
        </div>
      </div>
    </div>
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      Read More Reviews
    </button>
  </div>
  )
}
