export default function BlackButton() {
  return (
    <>
      <button
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-16 p-4 border border-black text-white bg-white 
                   flex items-center justify-between group 
                   transition-all duration-300 ease-in-out hover:bg-black hover:text-black"
      >
        <span className="text-base sm:text-lg md:text-xl font-roboto text-center text-black p-4 sm:p-6 md:p-8 group-hover:text-white transition-all duration-300 ease-in-out">
          Explore More
        </span>
        <span
          className="text-black font-bold text-xl sm:text-2xl transition-transform 
                     duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
        >
          →
        </span>
      </button>
    </>
  );
}
