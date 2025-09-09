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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-white-400" />
              <span className="text-xl font-bold text-white-400">
                Havana Cafe
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {["HOME", "ABOUT", "MENU", "CONTACT"].map((item) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className={`px-2 py-2 text-sm font-medium tracking-wider transition-colors duration-200 ${
                        currentSection === sectionId
                          ? "text-white border-b-2 border-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["HOME", "ABOUT", "MENU", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", ""))
                  }
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black/70 backdrop-blur-sm"
          style={{
            backgroundImage: "url('/hero.jpg')",
            filter: "brightness(40%)",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="font-[var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wider">
              HAVANA
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <Star className="h-6 w-6 text-white-400 animate-pulse" />
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
                CAFE
              </h2>
              <Star className="h-6 w-6 text-white-400 animate-pulse" />
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience the authentic taste of Cuban coffee culture in the
              heart of the city. Every cup tells a story of tradition, passion,
              and excellence.
            </p>
            <button
              onClick={() => scrollToSection("menu")}
              className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Menu
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-400">
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
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">25+</div>
                  <div className="text-sm text-gray-400">Coffee Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">1000+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="bg-amber-500/10 rounded-lg p-8 border border-amber-500/20">
              <Coffee className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 text-center">
                To share the authentic flavors and warm hospitality of Cuban
                coffee culture, creating a community space where every cup
                brings people together and every moment is savored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-400">Our Menu</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Cuban coffee
              and traditional delicacies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-400">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-t from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-400">Visit Us</h2>
            <p className="text-lg text-gray-300">
              Experience authentic Cuban coffee in a warm, welcoming atmosphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Location
              </h3>
              <p className="text-gray-300">
                123 Havana Street
                <br />
                Coffee District
                <br />
                Miami, FL 33101
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Hours
              </h3>
              <p className="text-gray-300">
                Monday - Friday: 6:00 AM - 9:00 PM
                <br />
                Saturday - Sunday: 7:00 AM - 10:00 PM
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Contact
              </h3>
              <p className="text-gray-300">
                Phone: (305) 123-4567
                <br />
                Email: info@havanacafe.com
                <br />
                Follow @HavanaCafe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-6 w-6 text-amber-400" />
            <span className="text-lg font-bold text-amber-400">
              Havana Cafe
            </span>
          </div>
          <p className="text-center text-gray-400 text-sm">
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
      `}</style> */}
    </div>
  );
};

export default HavanaCafe;
