"use client";

import React, { useState, useEffect } from "react";
import { Coffee, Star, Menu, X } from "lucide-react";

const HavanaCafe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      name: "Classic Espresso",
      price: "$3.50",
      description: "Rich, bold espresso shot",
    },
    {
      name: "Havana Latte",
      price: "$4.75",
      description: "Creamy latte with Cuban coffee beans",
    },
    {
      name: "Cortadito",
      price: "$4.25",
      description: "Cuban-style cortado with steamed milk",
    },
    {
      name: "Café Bombón",
      price: "$4.50",
      description: "Espresso with condensed milk",
    },
    {
      name: "Cuban Sandwich",
      price: "$8.95",
      description: "Traditional pressed sandwich",
    },
    {
      name: "Tres Leches Cake",
      price: "$5.50",
      description: "House-made Cuban dessert",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#d2b48c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-[#d2b48c]" />
              <span className="text-xl font-bold font-playfair text-[#d2b48c]">
                Havana Cafe
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {["HOME", "ABOUT", "MENU", "CONTACT"].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`px-2 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-gray-300 hover:text-[#d2b48c]`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
            filter: "brightness(40%)",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-7xl sm:text-8xl lg:text-9xl font-bold mb-4 tracking-wide">
              HAVANA
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <Star className="h-6 w-6 text-[#d2b48c] animate-pulse" />
              <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
                CAFE
              </h2>
              <Star className="h-6 w-6 text-[#d2b48c] animate-pulse" />
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-snug">
              Experience the authentic taste of Cuban coffee culture in the
              heart of the city. Every cup tells a story of tradition, passion,
              and excellence.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold 
                hover:bg-[#d2b48c]/90 hover:text-black 
                transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Explore Our Menu
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-black to-gray-900 border-t border-[#d2b48c]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-playfair text-5xl font-bold mb-6 text-[#d2b48c] tracking-wide">
                About Havana Cafe
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in the heart of Havana's coffee district, our cafe
                brings authentic Cuban coffee culture to your neighborhood. We
                source the finest beans from the mountains of Cuba and roast
                them with traditional methods passed down through generations.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our skilled baristas craft each cup with precision and passion,
                ensuring that every sip transports you to the bustling cafes of
                old Havana. From the bold cortadito to the sweet café bombón, we
                celebrate the rich heritage of Cuban coffee.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-10">
                {[
                  { num: "25+", label: "Coffee Varieties" },
                  { num: "15", label: "Years Experience" },
                  { num: "1000+", label: "Happy Customers" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-[#d2b48c]">
                      {stat.num}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image / Mission */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#d2b48c]/20">
              <img
                src="/about.jpg"
                alt="Cuban coffee"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 text-center">
                <Coffee className="h-14 w-14 text-[#d2b48c] mb-4" />
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  To share the authentic flavors and warm hospitality of Cuban
                  coffee culture, creating a community space where every cup
                  brings people together and every moment is savored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-24 bg-black border-t border-[#d2b48c]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6 text-[#d2b48c] tracking-wide">
              Our Menu
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Cuban coffee
              and traditional delicacies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Cortadito",
                price: "$4",
                desc: "Bold espresso with a splash of warm milk.",
                img: "/cortadito.jpg",
              },
              {
                name: "Café Bombón",
                price: "$5",
                desc: "Sweet harmony of espresso and condensed milk.",
                img: "/bombon.jpg",
              },
              {
                name: "Cuban Sandwich",
                price: "$8",
                desc: "Traditional pressed sandwich with ham & cheese.",
                img: "/sandwich.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-md hover:shadow-[#d2b48c]/20 transition-transform transform hover:scale-105 border border-[#d2b48c]/20"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-playfair text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-[#d2b48c]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-t from-black to-gray-900 border-t border-[#d2b48c]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6 text-[#d2b48c] tracking-wide">
              Visit Us
            </h2>
            <p className="text-lg text-gray-300">
              Experience authentic Cuban coffee in a warm, welcoming atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-[#d2b48c]">
                Location
              </h3>
              <p className="text-gray-300">
                123 Havana Street <br /> Coffee District <br /> Miami, FL 33101
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-[#d2b48c]">
                Hours
              </h3>
              <p className="text-gray-300">
                Mon – Fri: 6:00 AM – 9:00 PM <br /> Sat – Sun: 7:00 AM – 10:00
                PM
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-[#d2b48c]">
                Contact
              </h3>
              <p className="text-gray-300">
                Phone: (305) 123-4567 <br /> Email: info@havanacafe.com <br />
                Follow @HavanaCafe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#d2b48c]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-6 w-6 text-[#d2b48c]" />
            <span className="font-playfair text-lg font-bold text-[#d2b48c]">
              Havana Cafe
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Havana Cafe. All rights reserved. Bringing authentic Cuban
            coffee culture to your neighborhood.
          </p>
        </div>
      </footer>

      {/* <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style> */}
    </div>
  );
};

export default HavanaCafe;
