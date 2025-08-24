import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Casual Wear",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-amber-200",
  },
  {
    id: 2,
    name: "Formal Wear",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-gray-200",
  },
  {
    id: 3,
    name: "Party Wear",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-cyan-600",
  },
  {
    id: 4,
    name: "Winter Clothing",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-purple-100",
  },
  {
    id: 5,
    name: "Summer Clothing",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-yellow-100",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-orange-100",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 ">
      <div className="container px-4 bg-stone-600 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Clothing Categories for Kids</h2>
          <p className="text-gray-300 my-5">Explore a wide range of clothing options for kids of all ages</p>
        </div>

        {/* Display only the first 3 categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.slice(0, 3).map((category) => (
            <Link to={`/category/${category.id}`} key={category.id} className="group">
              <div
                className={`${category.color} rounded-md p-15 transition-all duration-300 group-hover:shadow-lg text-center h-full flex flex-col items-center justify-center`}
              >
                
                <h1 className="font-medium text-xl text-gray-800">{category.name}</h1>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to view more categories */}
        <div className="text-center mt-8">
          <Link
            to="/categories"
            className="text-white font-medium hover:text-yellow-400 transition-colors"
          >
            View More Categories
          </Link>
        </div>
      </div>
    </section>
  );
}