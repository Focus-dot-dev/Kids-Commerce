import React from "react";



export default function AboutSection() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Happy children playing with toys"
                className="object-cover h-full w-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-yellow-300 opacity-20 z-0"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-pink-300 opacity-20 z-0"></div>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About KidsTrad</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, KidsTrad is dedicated to celebrating cultural heritage by providing high-quality, beautifully crafted traditional clothing for children of all ages. We believe that embracing tradition is essential for fostering a sense of identity and pride, and we carefully select each item in our collection to ensure it meets our standards for quality, comfort, and authenticity.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts includes parents, educators, and child development specialists who are passionate
              about helping children learn and grow through play. We're committed to offering products that inspire
              creativity, curiosity, and joy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 hover:bg-stone-700 rounded-full p-2 text-white cursor-pointer">Learn More</button>
              <button variant="outline" className="text-white p-2 bg-purple-600 text-purple-600 rounded-full">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
