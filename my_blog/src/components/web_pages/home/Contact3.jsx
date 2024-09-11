import React from 'react';

const Contact3 = () => {
  return (
    <section className="py-32 dark:border-gray-700 dark:bg-gray-800">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat dark:bg-gray-800 "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="container px-2 md:px-12 w-full mx-auto">
        <div className="block mx-auto max-w-6xl rounded-lg bg-[hsla(0,0%,100%,0.8)] dark:bg-gray-900 px-4  py-12 
        shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300 dark:border-gray-700">
          
          
              <h3 className='text-gray-800 text-2xl mb-6 font-semibold dark:text-gray-300 lg:ml-6'>Get In Touch</h3>
          
          <div className="flex flex-wrap ">
            <div className=" mb-12 w-full shrink-0 grow-0 basis-auto  md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">


              

              <form className=''>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none 
                    transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    id="exampleInput90"
                  />
                  <label
                    className="peer-focus:bg-gray-900 px-3 leading-0 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]
                     text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                     peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] dark:text-gray-400"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    id="exampleInput91"
                  />
                  <label
                    className="peer-focus:bg-gray-900  px-3  pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] dark:text-gray-400"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <label
                    className="peer-focus:bg-gray-900  px-3  pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] dark:text-gray-400"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-gray-600"
                    type="checkbox"
                    value=""
                    id="exampleCheck96"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer dark:text-gray-300"
                    htmlFor="exampleCheck96"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="button"
                  className="mb-6 w-full rounded bg-indigo-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 flex gap-4">
                  <div className='w-16 h-16 bg-slate-300 rounded-xl dark:bg-slate-700'></div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 dark:text-white">Address</h2>
                    <p className="text-base text-neutral-600 dark:text-gray-400">City, Country</p>
                    <p className="text-base text-neutral-600 dark:text-gray-400">1234 Street Name</p>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 flex gap-4">
                  <div className='w-16 h-16 bg-slate-300 rounded-xl dark:bg-slate-700'></div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 dark:text-white">Address</h2>
                    <p className="text-base text-neutral-600 dark:text-gray-400">City, Country</p>
                    <p className="text-base text-neutral-600 dark:text-gray-400">1234 Street Name</p>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 flex gap-4">
                  <div className='w-16 h-16 bg-slate-300 rounded-xl dark:bg-slate-700'></div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 dark:text-white">Address</h2>
                    <p className="text-base text-neutral-600 dark:text-gray-400">City, Country</p>
                    <p className="text-base text-neutral-600 dark:text-gray-400">1234 Street Name</p>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 flex gap-4">
                  <div className='w-16 h-16 bg-slate-300 rounded-xl dark:bg-slate-700'></div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 dark:text-white">Address</h2>
                    <p className="text-base text-neutral-600 dark:text-gray-400">City, Country</p>
                    <p className="text-base text-neutral-600 dark:text-gray-400">1234 Street Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3;
