"use client";

import React, { useState, useEffect } from "react";
import {
  Coffee,
  Star,
  Menu,
  X,
  Award,
  Clock,
  Users,
  Leaf,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const HavanaCafe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "story",
        "bestsellers",
        "experience",
        "contact",
      ];
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

  const bestsellerItems = [
    {
      name: "Signature Havana Cortadito",
      price: "$5.50",
      description:
        "Our premium house blend with perfectly steamed organic milk",
      image: "/cortadito.png",
      badge: "Most Popular",
    },
    {
      name: "Golden Café Bombón",
      price: "$6.25",
      description:
        "Artisanal espresso layered with Madagascar vanilla condensed milk",
      image: "/bombon.png",
      badge: "Chef's Choice",
    },
    {
      name: "Heritage Cuban Sandwich",
      price: "$12.95",
      description:
        "Traditional recipe with slow-roasted pork, aged ham & swiss",
      image: "/sandwich.png",
      badge: "Authentic",
    },
    {
      name: "Tres Leches Supremo",
      price: "$8.50",
      description: "House-made with organic cream and Caribbean rum essence",
      image: "/tres-leches.png",
      badge: "House Special",
    },
  ];

  const experienceFeatures = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Organic & Sustainable",
      description:
        "Direct trade beans from Cuban highlands, roasted fresh daily with zero-waste commitment",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Quality",
      description:
        "Recognized by Coffee Masters Association for excellence in traditional Cuban brewing",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Artisan Craftsmanship",
      description:
        "Master baristas trained in Havana's finest cafeterias, bringing authentic techniques",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time-Honored Tradition",
      description:
        "Four generations of family recipes and brewing secrets preserved and perfected",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-200/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Coffee className="h-10 w-10 text-amber-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-400 font-serif tracking-wide">
                  Havana Café
                </span>
                <div className="text-xs text-amber-200 tracking-widest">
                  EST. 1958
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {[
                  { name: "HOME", id: "home" },
                  { name: "OUR STORY", id: "story" },
                  { name: "BESTSELLERS", id: "bestsellers" },
                  { name: "EXPERIENCE", id: "experience" },
                  { name: "CONTACT", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="relative py-2 text-sm font-medium tracking-wider transition-all duration-300 text-stone-200 hover:text-amber-400 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-200 hover:text-amber-400 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-stone-900/98 backdrop-blur-md border-b border-amber-200/30">
              <div className="px-4 py-6 space-y-4">
                {[
                  { name: "HOME", id: "home" },
                  { name: "OUR STORY", id: "story" },
                  { name: "BESTSELLERS", id: "bestsellers" },
                  { name: "EXPERIENCE", id: "experience" },
                  { name: "CONTACT", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - UNCHANGED */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)),url('/hero.jpg')",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="translate-y-8">
            <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-bold mb-4 tracking-wide text-white">
              HAVANA
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <Star className="h-6 w-6 text-amber-400" />
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white">
                CAFÉ
              </h2>
              <Star className="h-6 w-6 text-amber-400" />
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-snug mb-8">
              Experience the authentic taste of Cuban coffee culture in the
              heart of the city. Every cup tells a story of tradition, passion,
              and excellence.
            </p>

            <button
              onClick={() => scrollToSection("bestsellers")}
              className="bg-amber-500 text-stone-900 px-10 py-4 rounded-lg font-bold text-lg
                hover:bg-amber-400 hover:shadow-2xl
                transition-all duration-300 transform hover:scale-105"
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

      {/* Our Story Section */}
      <section
        id="story"
        className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 relative overflow-hidden"
      >
        {/* Soft glow accents */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-stone-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/cafe.jpg"
              alt="Cafe heritage"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
              <span className="text-sm font-semibold text-stone-800">
                Since 1958 • Family Legacy
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
              OUR HERITAGE
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-stone-800 leading-snug mb-6">
              From Havana’s Heart <br /> to Your Cup
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              For four generations, our family has perfected the art of Cuban
              coffee— crafted with passion, tradition, and an unwavering love
              for the brew.
            </p>

            {/* Elegant Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">67</div>
                <p className="text-sm text-stone-600">Years of Tradition</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">4</div>
                <p className="text-sm text-stone-600">Generations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50K+</div>
                <p className="text-sm text-stone-600">Cups Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section id="bestsellers" className="py-32 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              CUSTOMER FAVORITES
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold mb-8 text-stone-800">
              Our Bestsellers
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover the flavors that have captured hearts and awakened senses
              for generations. Each dish tells a story of tradition, crafted
              with love and served with pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellerItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    {item.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-stone-800 leading-tight group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-600 ml-2">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="w-full bg-stone-800 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-amber-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-32 bg-gradient-to-b from-amber-50 to-stone-100 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-stone-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block bg-stone-200 text-stone-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              THE HAVANA DIFFERENCE
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold mb-8 text-stone-800">
              Why Choose Havana Café
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              More than just coffee, we offer an authentic cultural experience
              that connects you to the rich traditions of Cuban hospitality and
              craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {experienceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/50"
              >
                <div className="text-amber-600 mb-6 group-hover:scale-110 group-hover:text-amber-700 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-stone-800 mb-4 group-hover:text-amber-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-stone-800 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-stone-500/10"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-serif text-white mb-8 leading-relaxed italic">
                "This isn't just a café, it's a portal to Cuba. The moment you
                step inside, you're transported to the bustling streets of
                Havana. Absolutely magical."
              </blockquote>
              <div className="text-amber-400 font-bold text-lg">
                Maria Gonzalez
              </div>
              <div className="text-stone-400 text-sm">
                Food & Travel Writer, Miami Herald
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-stone-800 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-800 via-stone-900 to-amber-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              VISIT US TODAY
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold mb-8 text-white">
              Experience Havana
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Step into our world where every cup tells a story and every visit
              creates memories. We can't wait to welcome you to our family.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-600/30">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white mb-3">
                      Location
                    </h3>
                    <p className="text-stone-300 text-lg leading-relaxed">
                      1847 Calle Ocho
                      <br />
                      Little Havana, Miami
                      <br />
                      FL 33135
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-600/30">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white mb-3">Hours</h3>
                    <div className="text-stone-300 space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-amber-300">
                          6:00 AM - 10:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span className="text-amber-300">
                          7:00 AM - 11:00 PM
                        </span>
                      </div>
                      <div className="text-sm text-stone-400 mt-4">
                        Live music Friday & Saturday evenings
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-600/30">
                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white mb-3">
                      Get in Touch
                    </h3>
                    <div className="text-stone-300 space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-amber-400" />
                        <span>(305) 642-3562</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-amber-400" />
                        <span>hello@havanacafe.com</span>
                      </div>
                      <div className="text-sm text-stone-400 mt-4">
                        Follow @HavanaCafeMiami on social
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map/Image */}
            <div className="relative">
              <div className="bg-stone-700 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] relative">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Cafe exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="font-bold text-stone-800 text-lg mb-2">
                      Find Us in Little Havana
                    </h4>
                    <p className="text-stone-600 text-sm">
                      Located in the heart of Miami's most vibrant Cuban
                      neighborhood, just steps from Domino Park and the famous
                      Calle Ocho Festival route.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <button className="bg-amber-500 text-stone-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <Coffee className="h-10 w-10 text-amber-400" />
              <div>
                <span className="text-2xl font-bold text-amber-400 font-serif">
                  Havana Café
                </span>
                <div className="text-xs text-amber-200 tracking-widest">
                  EST. 1958
                </div>
              </div>
            </div>
            <p className="text-stone-400 text-center text-sm max-w-2xl">
              © 2025 Havana Café. All rights reserved. Proudly serving authentic
              Cuban coffee and culture in the heart of Miami for over six
              decades.
            </p>
          </div>
        </div>
      </footer>

      {/* <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </div>
  );
};

export default HavanaCafe;
