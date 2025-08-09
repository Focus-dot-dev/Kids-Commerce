import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Traditional Ankara Dress",
    price: 49.99,
    rating: 4.8,
    image: "/src/assets/pikiank.jpg",
    category: "girls",
    age: "3-6",
    isNew: true,
  },
  {
    id: 2,
    name: "Boys' Agbada Outfit",
    price: 59.99,
    rating: 4.7,
    image: "/src/assets/agbadachild.png",
    category: "boys",
    age: "4-8",
    isNew: false,
  },
  {
    id: 3,
    name: "Kente Wrap Dress",
    price: 39.99,
    rating: 4.9,
    image: "/src/assets/kenteee.jpg",
    category: "girls",
    age: "1-4",
    isNew: true,
  },
  {
    id: 4,
    name: "Boys' Dashiki Set",
    price: 44.99,
    rating: 4.6,
    image: "/src/assets/dashikichild.jpg",
    category: "boys",
    age: "8-12",
    isNew: false,
  },
  {
    id: 5,
    name: "Girls' Lace Gown",
    price: 54.99,
    rating: 4.9,
    image: "/src/assets/girl-lacegown.png",
    category: "girls",
    age: "3-8",
    isNew: false,
  },
  {
    id: 6,
    name: "Boys' Kaftan",
    price: 42.99,
    rating: 4.7,
    image: "/src/assets/kaftan.png",
    category: "boys",
    age: "5-10",
    isNew: true,
  },
  {
    id: 7,
    name: "Girls' Beaded Dress",
    price: 38.99,
    rating: 4.8,
    image: "/src/assets/beaded-dress.png",
    category: "girls",
    age: "2-5",
    isNew: false,
  },
  {
    id: 8,
    name: "Boys' Traditional Shirt",
    price: 29.99,
    rating: 4.5,
    image: "/src/assets/traditional-shirt.png",
    category: "boys",
    age: "4-10",
    isNew: false,
  },
];

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Attires" },
    { id: "boys", name: "Boys' Attires" },
    { id: "girls", name: "Girls' Attires" },
    { id: "new", name: "New Arrivals" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products.slice(0, 8)
      : activeFilter === "new"
      ? products.filter((p) => p.isNew).slice(0, 8)
      : products.filter((p) => p.category === activeFilter).slice(0, 8);

  return (
    <section className="py-6 -mt-17 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Traditional Attires for Kids</h2>
          <p className="text-white mt-2">
            Discover our collection of elegant and creative traditional attires for boys and girls.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-5  mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`rounded-full ${
                activeFilter === filter.id
                  ? "bg-amber-500 hover:bg-red-700 text-white cursor-pointer px-4 py-2"
                  : "border-purple-200 text-white cursor-pointer hover:border-purple-400"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-0 shadow-sm bg-yellow-100 rounded-lg"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative h-48 sm:h-56 bg-gray-100 p-4">
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                      New
                    </span>
                  )}
                  <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <img
                    src={product.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 h-full w-full"
                  />
                </div>
              </Link>

              <div className="p-4">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    Ages {product.age}
                  </span>
                  <div className="ml-auto flex items-center">
                    <Star className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-gray-800 hover:text-purple-600 transition-colors mt-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-bold text-gray-900 mt-1">${product.price.toFixed(2)}</p>
              </div>

              <div className="p-4 pt-0">
                <button className="w-full bg-black text-white hover:bg-purple-700 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-white text-orange-600 rounded-full px-8 hover:bg-purple-100 hover:text-blue-600 transition-colors font-medium py-2">
            View All Attires
          </button>
        </div>
      </div>
    </section>
  );
}
