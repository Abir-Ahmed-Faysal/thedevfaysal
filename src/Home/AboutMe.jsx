import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center px-4 py-8 md:px-20 md:py-28">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-14">
        
        {/* Image Section */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Portrait"
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Text Content Section */}
        <div className="w-full flex flex-col gap-5 text-white">
          
          {/* Heading Section */}
          <div>
            <h3 className="text-lg sm:text-xl text-orange-700 font-bold">Discover</h3>
            <h1 className="text-3xl sm:text-5xl font-bold">About Me</h1>
          </div>

          {/* Info Table */}
          <div className="border border-orange-700 rounded-lg p-4 sm:p-6 text-sm sm:text-base">
            <table className="w-full table-auto">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Name: Faysal Ahmed</td>
                  <td className="py-2">Age: 23</td>
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
