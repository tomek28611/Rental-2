import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-5xl pb-4">Welcome to Andaman Rental Motorbikes</h1>
            <h2 className="mt-5 md:mt-0">
                
                <span className="underline decoration-4 decoration-orange-400">
                Our Team will help you with chose motorbike for you
                </span>{" "}

            </h2>
            <div className="mt-4">
              <img src="/phuket.jpg" alt="/" />
            </div>

            <div className="text-center">
              <h1 className="text-3xl text-orange-500">3 DAY MINIMUM RENTAL PERIOD</h1>
              <h2 className="text-2xl"> WE DO NOT HOLD YOUR PASSPORT</h2>
              <h2 className="text-2xl">WE DO NOT CHARGE FOR SMALL SCRATCHES</h2>
              <h2 className="text-2xl">FREE PHONE HOLDER & SANITIZED HELMETS</h2>
            </div>
        </div>

        {/* <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Ecommerce | Blogs | Video | Chats | NFTs | MERN
        </p> */}
    </div>
  )
}

export default Banner