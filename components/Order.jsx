
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className="text-2xl mt-12 p-12 w-full h-full md:w-120 md:max-w-full mx-auto">
      <span className='text-xl md:text-5xl font-semibold text-gray-500 ml-8'>Book your motorbike</span>
      <div className="mt-4 p-6 border border-gray-300 sm:rounded-md">
        <form ref={form} onSubmit={sendEmail} action="">
          <label className="block mb-6">
            <span className="text-gray-700">Your name</span>
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
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
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
              placeholder="joe@example.com"
              required
            />

            <label className="block mb-6 mt-4">
              <span className="text-gray-700">Phone number</span>
              <input
                name="phone"
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
                placeholder="+66 123 456" required
              />
            </label>


          </label>
          <label className="block mb-6">
            <span className="text-gray-700">When you want rent bike?</span>
            <input
              name="day"
              type="date"
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
          " required
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700">How many days</span>
            <input
              name="days"
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
              placeholder="Days" required
            />
          </label>


          <label className="block mb-6">
            <span className="text-gray-700"
            >Chose model you would like to rent ?</span
            >
            <select
              name="model"
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
          " required
            >
              <option>New Yamaha NMAX</option>
              <option>New Honda PCX </option>
              <option>New Yamaha XMAX</option>
              <option>New Harley Davidson</option>
            </select>
          </label>
          <div className="mb-6">
            <div className="mt-2">
              <div>
              
              </div>
              <div>
               
              </div>
            </div>
          </div>
          <div className="mb-6">
           

            <button className='mt-8 bg-slate-400 text-black hover:bg-black/50 hover:text-white'>Reserve Motorbike</button>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>

  )
}

export default Booking;