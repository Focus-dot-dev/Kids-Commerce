import React from 'react';

const Promo = () => {
  return (
    <section 
      className="bg-stone-600 text-white p-6 flex flex-col items-center justify-between overflow-hidden"
      aria-label="Promotion Banner"
    >
      {/* Scrolling Text */}
      <div className="w-full mb-6">
        <marquee className="text-lg font-semibold">
          🌞 Summer Sale is Here! Enjoy up to 50% OFF on selected items! 🌴
          &nbsp;&nbsp;&nbsp;&nbsp;
          
        </marquee>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        {/* Text Content */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl font-bold">
            Summer Sale is Here!
          </h1>
          <p className="text-lg">
            Refresh your wardrobe with our exclusive summer collection. <br /> Enjoy up to <span className="font-bold">50% OFF</span> on selected items!
          </p>
          <button 
            className="bg-yellow-400 text-blue-500 font-semibold py-2 px-6 rounded hover:bg-yellow-900 hover:text-white transition cursor-pointer"
            onClick={() => window.location.href = '/shop'}
          >
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="my-6 md:mt-0 md:ml-8">
          <img 
            src="/src/assets/summer-clothes.webp" 
            alt="Summer Clothes Collection" 
            className="w-64 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;