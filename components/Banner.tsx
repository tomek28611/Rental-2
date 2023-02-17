import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-center  font-bold px-10 py-5 mb-10">
      <div>

        <div className="p-4 bg-orange-500 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="sm:text-xs md:text-2xl text-gray-900 dark:text-gray-900"><a href="" className="hover:underline">Welcome, choose your motorbike...</a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
           
            {/* <li>
              <a href="#" className="hover:underline">Contact</a>
            </li> */}
          </ul>
        </div>
        {/* <h1 className="sm:text-2xl md:text-4xl pb-4 ml-2">Welcome to Andaman Rental Motorbikes</h1>
        <h2 className="mt-5 md:mt-0">

          <span className="sm:text-xl md:text-2xl underline decoration-4 decoration-orange-400 text-center ml-2">
            Our Team will help you with chose motorbike for You
          </span>{" "}
        </h2>  */}

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
          <Link href="https://line.me/ti/p/7E4dATvcBe"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex rounded-full hover:bg-black-700 hover:text-orange-900">
            Line
          </Link>
          <Link href="https://t.me/Tomek1902"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex items-center rounded-full hover:bg-black-700 hover:text-orange-900">
            Telegram
          </Link>
          <Link href="http://wa.me/420607231628"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex items-center rounded-full hover:bg-black-700 hover:text-orange-900">
            WhatssApp
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