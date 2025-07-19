import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Educational Toys That Make Learning Fun",
    excerpt: "Discover toys that help children develop essential skills while having a blast.",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 15, 2023",
    category: "Educational",
  },
  {
    id: 2,
    title: "The Importance of Outdoor Play for Children",
    excerpt: "Why spending time outside is crucial for your child's physical and mental development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "May 28, 2023",
    category: "Child Development",
  },
  {
    id: 3,
    title: "Age-Appropriate Toys: A Parent's Guide",
    excerpt: "How to choose the right toys for your child's developmental stage.",
    image: "/placeholder.svg?height=200&width=300",
    date: "April 10, 2023",
    category: "Parenting Tips",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">From Our Blog</h2>
          <p className="text-gray-600 mt-2">Tips, guides, and inspiration for parents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button variant="outline" className="border-purple-600 text-purple-600 rounded-full px-8">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
