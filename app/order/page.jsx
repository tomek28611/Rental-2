'use client'
import React from 'react';
import '../../styles/globals.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Booking = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e5jqq2u', 'template_svrlb0k', form.current, 'ZddD9vteovHh0v3nR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div class="text-2xl mt-12 p-12 w-full h-full md:w-120 md:max-w-full mx-auto">
        <div className="flex items-center justify-between space-x-4">
            <Link href="/">
                <img
                    src="/IMG_5264.jpg"
                    width={150} height={150}
                    className="rounded-full"
                    alt="logo"
                />
            </Link>
            <h1 className='mt-4 ml-12 text-xl md:text-5xl font-bold text-orange-500'>Book Your Motorbike</h1>
        </div>
      <span className='mt-4 ml-12 text-xl md:text-5xl  font-semibold text-orange-500'></span>
      <div class="mt-4 p-6 border border-gray-300 sm:rounded-md">
        <form ref={form} onSubmit={sendEmail} action="">
          <label class="block mb-6">
            <span class="text-orange-500 font-bold font-2xl">Your name</span>
            <input
              name="name"
              type="text"
              className="
            block
            w-full          
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Full Name"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-orange-500 font-bold font-2xl">Email address</span>
            <input
              name="email"
              type="email"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="joe@example.com"
              required
            />

            <label class="block mb-6 mt-4">
              <span class="text-orange-500 font-bold font-2xl">Phone number</span>
              <input
                name="phone"
                type="text"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="+66 123 456" required
              />
            </label>


          </label>
          <label class="block mb-6">
            <span class="text-orange-500 font-bold font-2xl">When you want rent bike?</span>
            <input
              name="day"
              type="date"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            />
          </label>

          <label class="block mb-6">
            <span class="text-orange-500 font-bold font-2xl">How many days</span>
            <input
              name="days"
              type="text"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Days" required
            />
          </label>


          <label class="block mb-6">
            <span class="text-orange-500 font-bold font-2xl">Chose model you would like to rent</span>
            <select
              name="model"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            >
              <option>New Yamaha NMAX</option>
              <option>New Honda PCX </option>
              <option>New Yamaha XMAX</option>
              <option>New Harley Davidson</option>
            </select>
          </label>
          <div class="mb-6">
            <div class="mt-2">
              <div>
              
              </div>
              <div>
               
              </div>
            </div>
          </div>
          <div class="mb-6">
           
          <div className="flex">
            <button className='px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex rounded-full hover:bg-black-700 hover:text-orange-900'>Reserve Motorbike</button>

            </div>
          </div>
          <div>

          </div>
        </form>
        <Link href="/" className='px-5 py-3 justify-center text-center text-sm md:text-base bg-gray-900 text-orange-400 flex rounded-full hover:bg-black-700 hover:text-orange-900'>Go back to Home Page</Link>

      </div>
    </div>

   

  )
}

export default Booking;