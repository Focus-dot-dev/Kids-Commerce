import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FeaturedProducts from "../../components/featured-product";
import CategorySection from "../../components/category-section";
import PromotionBanner from "../../components/promotion-banner";
import AboutSection from "../../components/about-section";
import BlogSection from "../../components/blog-section";
import NewsletterSignup from "../../components/newsletter-signup";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <div className="">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-amber-950 text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-white">Kids<span className="text-amber-500">T</span>< span className="text-yellow-500">r</span><span className="text-red-500">a</span><span className="text-teal-500">d</span> </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-white hover:text-purple-600 font-medium">
                Shop
              </Link>
              <Link to="/categories" className="text-white hover:text-purple-600 font-medium">
                Categories
              </Link>
              <Link to="/about" className="text-white hover:text-purple-600 font-medium">
                About Us
              </Link>
              <Link to="/blog" className="text-white hover:text-purple-600 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* Search, Cart, Account, Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center relative  outline-none rounded-sm">
                <input
                  type="search"
                  placeholder="Search for attires..."
                  className="w-64 pr-8 rounded-sm border-1 border-black shadow-lg outline-none p-2"
                />
                <Search className="absolute right-3 h-4 w-4 text-gray-200" />
              </div>

              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-200" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  3
                </span>
              </Link>

              <Link to="/account" className="hidden sm:block">
                <User className="h-6 w-6 text-gray-200" />
              </Link>

              <button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Banner */}
        <section className="bg-amber-900 -mb-16 py-5">
          <div className="overflow-hidden">
            <div className="flex p-5 justify-around items-center">
              <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-300">
                  Elegant Traditional Attires for kids
                </h1>
                <p className="text-lg text-gray-400">
                  Discover our collection of fashionable, creative traditional designs for kids.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-amber-600 p-3 hover:bg-teal-700 text-white rounded-full px-8 cursor-pointer">
                    Shop Now
                  </button>
                  <button className="  bg-teal-600 text-black-600 rounded-full px-8 hover:bg-gray-700 cursor-pointer">
                    Explore Categories
                  </button>
                </div>
              </div>

              {/* Carousel */}
              <div className="alawo shadow-2xl rounded-full h-64 w-64 md:h-96 md:w-96 overflow-hidden relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                //   navigation
                //   pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="h-full w-full"
                >
                  <SwiperSlide>
                    <img
                      src="/src/assets/ookan.png"
                      alt="Image 1"
                      className="object-contain h-full w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/src/assets/eji.png"
                      alt="Image 2"
                      className="object-contain h-full w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/src/assets/iketa.png"
                      alt="Image 3"
                      className="object-contain h-full w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/src/assets/small-pikin.png"
                      alt="Image 4"
                      className="object-contain h-full w-full"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <CategorySection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Promotion Banners */}
        <PromotionBanner />

        {/* About Us Section */}
        <AboutSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      {/* Footer with Contact */}
      <Footer />
    </div>
  );
}
