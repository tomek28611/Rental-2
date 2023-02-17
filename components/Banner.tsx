import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-center  font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="sm:text-2xl md:text-4xl pb-4 ml-2">Welcome to Andaman Rental Motorbikes</h1>
        <h2 className="mt-5 md:mt-0">

          <span className="sm:text-xl md:text-2xl underline decoration-4 decoration-orange-400 text-center ml-2">
            Our Team will help you with chose motorbike for you
          </span>{" "}

        </h2>
        <div className="mt-6 justify-center">
          <img src="/IMG_5264.jpg" alt="/" />
        </div>

        <div className="text-center">
          <h1 className="text-3xl text-orange-500 mt-4">3 DAY MINIMUM RENTAL PERIOD</h1>
          <h2 className="text-2xl mt-2"> WE DO NOT HOLD YOUR PASSPORT</h2>
          <h2 className="text-2xl mt-2">WE DO NOT CHARGE FOR SMALL SCRATCHES</h2>
          <h2 className="text-2xl mt-2">FREE PHONE HOLDER & SANITIZED HELMETS</h2>
        </div>

        <div className="mt-8 flex items-center space-x-2 justify-between">
          <Link href="/"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex rounded-full hover:bg-black-700 hover:text-orange-900">
            Contact Line
          </Link>
          <Link href="/"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex items-center rounded-full hover:bg-black-700 hover:text-orange-900">
            Contact Messenger
          </Link>
          <Link href="/"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex items-center rounded-full hover:bg-black-700 hover:text-orange-900">
            Contact WhatssApp
          </Link>
        </div>
      </div>

      {/* <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Ecommerce | Blogs | Video | Chats | NFTs | MERN
        </p> */}
    </div>
  )
}

export default Banner