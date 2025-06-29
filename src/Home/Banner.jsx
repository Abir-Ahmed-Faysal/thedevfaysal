import Faysal from '../assets/profile.jpg';

const Banner = () => {
    return (
      <section className="pt-20 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center relative">
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0"></div>
  <div className="text-center flex flex-col items-center p-6 z-10">
    <img
      src={Faysal}
      alt="Faysal Ahmed"
      className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg mb-6"
    />
    <h1 className="text-2xl sm:text-3xl font-bold text-orange-700">Faysal Ahmed</h1>
    <p className="text-base sm:text-lg mt-2 text-white font-semibold text-center max-w-lg">A creative Freelancer & MERN Stack Developer</p>
  </div>
</section>

    );
};

export default Banner;
