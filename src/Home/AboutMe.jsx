import React from 'react';
import Faysal from '../assets/faysal.jpeg'
const AboutMe = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-8 md:px-16 md:py-20">
      <div className="w-full lg:items-start   items-center
       max-w-6xl flex flex-col lg:flex-row gap-14">
        
        {/* Image Section */}
        <div className="w-full border rounded-xl  md:w-[40%] flex justify-center">
          <img
            src={Faysal}
            alt="Portrait"
            className="w-full rounded-xl max-w-xs md:max-w-sm  shadow-2xl"
          />
        </div>
        
        {/* Text Content Section */}
        <div className="w-full flex flex-col md:gap-10 lg:gap-16 text-white">
          
          {/* Heading Section */}
          <div className='space-y-2.5'>
            <h3 className="text-lg sm:text-xl text-[rgb(243,94,89)] font-bold">Discover</h3>
            <h1 className="text-3xl sm:text-5xl font-bold">About Me</h1>
           <div className="md:w-12 w-8 border-t-2 mt-6 border-[rgb(243,94,89)] "></div>
          </div>

          {/* Info Table */}
          <div className="border border-[rgb(243,94,89)]  rounded-lg p-4 sm:p-6 text-sm sm:text-base">
            <table className="w-full table-auto">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Name: Md Faysal Ahmed</td>
                  <td className="py-2">Age: 22</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Phone: +880 1779161032</td>
                  <td className="py-2">Address: Dhaka, Bangladesh</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Email: fr.abir.ahemd.faysal@gmail.com</td>
                  <td className="py-2">Freelance: Available</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
