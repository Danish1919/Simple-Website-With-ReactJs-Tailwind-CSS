import React from 'react'
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <>
      <div className="bg-[#2699fb]  w-full py-[100px] ">
        <div className="max-w-[1240px] mx-auto text-center my-[100px]">
          <h1 className="text-3xl font-bold text-black">LEARN WITH US</h1>
          <h1 className=" text-3xl md:py-7 md:text-[80px] font-bold text-white">GROW WIH US</h1>
          <div className=" text-2xl md:pt-7 md:text-[40px]">Learn
            <ReactTyped
              className='pl-4'
              strings={["Web Devleopmemt", "Digital Marketing", "Andriod Development", "IOS Deveopment"]} backSpeed={80} typeSpeed={100} loop={true} />
          </div>


        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to Example Inc.
        </h1>
        <p className="text-lg text-white mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log('Get Started!')}
        >
          Get Started!
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="https://via.placeholder.com/300" alt="Feature 1" />
          <h2 className="text-lg font-bold mb-2 text-white">
            Feature 1
          </h2>
          <p className="text-sm text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="https://via.placeholder.com/300" alt="Feature 2" />
          <h2 className="text-lg font-bold mb-2 text-white">
            Feature 2
          </h2>
          <p className="text-sm text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img src="https://via.placeholder.com/300" alt="Feature 3" />
          <h2 className="text-lg font-bold mb-2 text-white">
            Feature 3
          </h2>
          <p className="text-sm text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
