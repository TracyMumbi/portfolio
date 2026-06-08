// import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

function Home() {
  const [text] = useTypewriter({
    words: ['Collins', 'a Designer', 'an Artist'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <div className="inline-block">
                {/* <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div> */}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-6.5xl font-bold text-white leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {text}
                </span>
                <Cursor cursorStyle="|" cursorColor="#8b5cf6" />
              </h1>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-200">
                Graphic Designer
              </h2>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-200">
                based in <span className="text-blue-400">Kenya</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quaerat corrupti iusto ea quos. Facere dicta fuga nostrum, maxime recusandae beatae sapiente commodi sed, id sit sint nemo at? Repellat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-3 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:-translate-y-1">
                View my work
              </button>
            </div>
            
            {/* Social/Stats Section */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
                  alt="Collins - Graphic Designer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div id="services">
        <Services />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home