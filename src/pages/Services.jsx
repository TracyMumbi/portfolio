import { useRef, useEffect, useState } from 'react'

function Services() {
  const scrollContainerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollSpeed, setScrollSpeed] = useState(1)
  const [hoveredService, setHoveredService] = useState(null)
  
const services = [
    { 
      title: 'Brand Identity', 
      description: 'Creating unique brand identities that stand out', 
      fullDescription: 'Complete brand identity design including logos, color palettes, typography, and brand guidelines that tell your unique story.',
      icon: '🎨', 
      color: 'from-blue-500 to-cyan-500',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
      turnaround: '5-7 days',
      price: 'Starting at $299'
    },
    { 
      title: 'Carousel Design', 
      description: 'Beautiful and functional user interfaces', 
      fullDescription: 'Multi-slide designs optimized for Instagram, Facebook, and LinkedIn engagement with stunning visuals.',
      icon: '💻', 
      color: 'from-purple-500 to-pink-500',
      features: ['Instagram Posts', 'Facebook Carousels', 'LinkedIn Slides', 'Story Designs'],
      turnaround: '2-3 days',
      price: 'Starting at $149'
    },
    { 
      title: 'Print Design', 
      description: 'High-quality print materials and packaging', 
      fullDescription: 'Professional print-ready designs for business cards, brochures, flyers, and packaging materials.',
      icon: '🖨️', 
      color: 'from-green-500 to-emerald-500',
      features: ['Business Cards', 'Brochures', 'Flyers', 'Packaging'],
      turnaround: '3-5 days',
      price: 'Starting at $199'
    },
    { 
      title: 'Poster Design', 
      description: 'Eye-catching posters for events', 
      fullDescription: 'Creative poster designs that capture attention and communicate your message effectively.',
      icon: '📜', 
      color: 'from-red-500 to-orange-500',
      features: ['Event Posters', 'Movie Posters', 'Promotional', 'Advertising'],
      turnaround: '2-4 days',
      price: 'Starting at $99'
    },
    { 
      title: 'Logo Branding', 
      description: 'Memorable logos that capture essence', 
      fullDescription: 'Unique logo designs with multiple variations, color schemes, and formats for every application.',
      icon: '⭐', 
      color: 'from-yellow-500 to-amber-500',
      features: ['Icon Design', 'Wordmarks', 'Mascots', 'Brand Marks'],
      turnaround: '4-6 days',
      price: 'Starting at $249'
    },
    { 
      title: 'Flyer Design', 
      description: 'Effective flyer designs for marketing', 
      fullDescription: 'Marketing-focused flyer designs that drive action and deliver measurable results for your campaigns.',
      icon: '📄', 
      color: 'from-indigo-500 to-purple-500',
      features: ['Sales Flyers', 'Event Flyers', 'Informational', 'Promotional'],
      turnaround: '1-2 days',
      price: 'Starting at $79'
    },
    { 
      title: 'Photography', 
      description: 'Professional photography for events, products, and portraits', 
      fullDescription: 'High-quality photography services including event coverage, product photography, professional portraits, and commercial shoots.',
      icon: '📷', 
      color: 'from-pink-500 to-rose-500',
      features: ['Event Coverage', 'Product Photography', 'Portraits', 'Commercial Shoots'],
      turnaround: '3-5 days',
      price: 'Starting at $199/session'
    },
    { 
      title: 'Videography', 
      description: 'High-quality video production and editing', 
      fullDescription: 'Professional video production including corporate videos, event coverage, promotional videos, and complete post-production editing.',
      icon: '🎥', 
      color: 'from-violet-500 to-purple-500',
      features: ['Corporate Videos', 'Event Coverage', 'Promotional', 'Post-Production'],
      turnaround: '5-10 days',
      price: 'Starting at $499/project'
    },
    { 
      title: 'Creative Design', 
      description: 'Innovative design solutions for unique projects', 
      fullDescription: 'Custom creative design services including illustration, digital art, concept development, and unique visual solutions.',
      icon: '✨', 
      color: 'from-amber-500 to-yellow-500',
      features: ['Illustration', 'Digital Art', 'Concept Development', 'Custom Projects'],
      turnaround: 'Varies',
      price: 'Custom Quote'
    },
]

  // Triple the services for seamless infinite scroll
  const duplicatedServices = [...services, ...services, ...services]

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return
    
    const container = scrollContainerRef.current
    if (!container) return

    const scrollInterval = setInterval(() => {
      if (container && !isHovered) {
        container.scrollLeft += scrollSpeed
        
        // Reset to beginning when reaching the end
        if (container.scrollLeft >= container.scrollWidth / 1.5) {
          container.scrollLeft = container.scrollWidth / 3
        }
      }
    }, 30)

    return () => clearInterval(scrollInterval)
  }, [isHovered, scrollSpeed])

  // Enable mouse wheel scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        container.scrollLeft += e.deltaY
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section className="min-h-screen py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my creative services by scrolling horizontally
        </p>
      </div>

      {/* Speed Control */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <span className="text-gray-400 text-sm">Auto-scroll Speed:</span>
        <input
          type="range"
          min="0"
          max="3"
          step="0.5"
          value={scrollSpeed}
          onChange={(e) => setScrollSpeed(parseFloat(e.target.value))}
          className="w-32 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-blue-400 text-sm">{scrollSpeed === 0 ? 'Paused' : `${scrollSpeed}x`}</span>
        {scrollSpeed === 0 && (
          <button
            onClick={() => setScrollSpeed(1)}
            className="px-3 py-1 text-xs bg-blue-500 rounded-lg text-white"
          >
            Resume
          </button>
        )}
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-4 pb-8 cursor-grab active:cursor-grabbing relative"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#3b82f6 #1f2937',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedServices.map((service, index) => (
          <div
            key={index}
            className="relative flex-none w-80 md:w-96"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Main Card */}
            <div
              className={`bg-gradient-to-br ${service.color} bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 border border-white/10 shadow-xl ${
                hoveredService === index ? 'opacity-0 scale-95' : 'opacity-100 hover:scale-105'
              }`}
            >
              <div className="text-7xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-200 mb-4">{service.description}</p>
              
              <button className="mt-4 px-4 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition-all duration-300">
                Learn More →
              </button>
            </div>

            {/* Hover Card with More Details */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.color} bg-opacity-20 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 border border-white/20 shadow-2xl ${
                hoveredService === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                
                {/* Full Description */}
                <p className="text-gray-200 text-sm mb-3">{service.fullDescription}</p>
                
                {/* Features List */}
                <div className="mb-3">
                  <h4 className="text-white text-sm font-semibold mb-2">What's included:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Turnaround Time */}
                <div className="mb-2">
                  <span className="text-gray-300 text-xs">⏱️ Turnaround: </span>
                  <span className="text-white text-xs font-semibold">{service.turnaround}</span>
                </div>
             
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => {
            const container = scrollContainerRef.current
            if (container) container.scrollLeft -= 300
          }}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 text-white"
        >
          ←
        </button>
        <button
          onClick={() => {
            const container = scrollContainerRef.current
            if (container) container.scrollLeft += 300
          }}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 text-white"
        >
          →
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">
          💡 Tip: Hover over any card to see more details | Use mouse wheel or drag to scroll horizontally
        </p>
      </div>

      <style jsx>{`
        .flex {
          scroll-behavior: smooth;
        }
        .flex::-webkit-scrollbar {
          height: 8px;
        }
        .flex::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .flex::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        .flex::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #2563eb, #7c3aed);
        }
      `}</style>
    </section>
  )
}

export default Services
