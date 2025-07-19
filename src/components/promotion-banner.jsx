import React from "react";


export default function PromotionBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Promotion */}
        <div className="bg-brown-400 rounded-3xl overflow-hidden shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Summer Sale!</h2>
              <p className="text-white/90 mb-6 text-lg">
                Get up to 40% off on selected outdoor toys and games. Perfect for summer adventures!
              </p>
              <button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8">Shop the Sale</button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Summer sale promotion"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Secondary Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promotion 1 */}
          <div className="bg-yellow-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">New Arrivals</h3>
                <p className="text-gray-600 mb-4">Check out our latest educational toys for all ages</p>
                <button
                  variant="outline"
                  className="border-yellow-500 text-yellow-700 hover:bg-yellow-200 rounded-full"
                >
                  Explore Now
                </button>
              </div>
              <div className="sm:w-1/2 relative h-40 w-full">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="New educational toys"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Promotion 2 */}
          <div className="bg-green-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
                <p className="text-gray-600 mb-4">On all orders over $50. Limited time offer!</p>
                <button variant="outline" className="border-green-500 text-green-700 hover:bg-green-200 rounded-full">
                  Shop Now
                </button>
              </div>
              <div className="sm:w-1/2 relative h-40 w-full">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Free shipping promotion"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
