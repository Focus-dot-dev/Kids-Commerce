"use client";

import { useState } from "react";



export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to get special offers, free giveaways, and parenting tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full border-purple-200 focus:border-purple-400"
            />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 rounded-full">
              Subscribe
            </button>
          </form>

          {submitted && <p className="text-green-600 mt-4 animate-fade-in">Thank you for subscribing!</p>}

          <p className="text-gray-500 text-sm mt-4">We respect your privacy and will never share your information.</p>
        </div>
      </div>
    </section>
  );
}
