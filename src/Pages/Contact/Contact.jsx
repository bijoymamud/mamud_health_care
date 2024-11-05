import React from 'react';

const ContactForm = () => {
  return (
    <div
      className="min-h-screen px-4 md:px-20 lg:px-44 flex items-center justify-center p-4 md:p-8"
    
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Contact Information */}
        <div className="text-left w-full lg:w-1/2 text-white flex-1 space-y-4">
          <span className="uppercase text-3xl md:text-4xl font-extrabold tracking-[3px] md:tracking-[5px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 pb-2">
            Contact_
          </span>
          <div className="w-[120px] md:w-[200px] h-[3px] md:h-[4px] bg-gradient-to-r from-yellow-200 to-amber-500 mb-6 md:mb-10"></div>
          
          <p className="text-base md:text-lg text-black pb-10 md:pb-20">
            Get in touch with us today! Whether you have a question, feedback, or just want to say hello, We would love to hear from you. Fill out the form, and we will get back to you as soon as possible.
          </p>
          <div className="mt-4 md:mt-6 space-y-1 md:space-y-2 text-black text-sm md:text-base">
            <p><strong>Address:</strong> Jamalpur, Bangladesh</p>
            <p><strong>Mobile:</strong> +880 1712907897</p>
            <p><strong>Email:</strong> bijoymamud@gmail.com</p>
          </div>
          <div className="mt-4 md:mt-6 flex space-x-3 md:space-x-4">
            <a href="https://www.facebook.com/ip.bjoy/" className="text-white text-lg md:text-xl"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/almamudbijoy09/" className="text-white text-lg md:text-xl"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/bijoymamud" className="text-white text-lg md:text-xl"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 backdrop-blur-sm  p-6 md:p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-indigo-400 font-bold tracking-[2px] md:tracking-[3px]">Name</span>
              </label>
              <input type="text" placeholder="Name" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="text-indigo-400 font-bold tracking-[2px] md:tracking-[3px]">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="text-indigo-400 font-bold tracking-[2px] md:tracking-[3px]">Your Message</span>
              </label>
              <textarea placeholder="Message" className="textarea textarea-bordered w-full h-24 md:h-32"></textarea>
            </div>

            <button className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
