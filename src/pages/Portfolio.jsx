import { useState } from 'react'

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    { 
      id: 1,
      title: 'Brand Identity Project', 
      category: 'Branding', 
      description: 'Complete brand identity design for a modern tech company',
      image: 'https://plus.unsplash.com/premium_photo-1706152482843-e8da9cfef167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      fullImage: 'https://plus.unsplash.com/premium_photo-1706152482843-e8da9cfef167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      client: 'TechCorp',
      year: '2024'
    },
    { 
      id: 2,
      title: 'Mobile App Design', 
      category: 'UI/UX', 
      description: 'User interface design for a fitness tracking mobile app',
      image: 'https://images.unsplash.com/photo-1584448097764-374f81551427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      fullImage: 'https://images.unsplash.com/photo-1584448097764-374f81551427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      client: 'FitLife',
      year: '2024'
    },
    { 
      id: 3,
      title: 'Print Materials', 
      category: 'Print Design', 
      description: 'Brochures, business cards, and marketing materials',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format',
      fullImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format',
      client: 'PrintHub',
      year: '2023'
    },
    { 
      id: 4,
      title: 'Social Media Campaign', 
      category: 'Digital Design', 
      description: 'Instagram and Facebook social media graphics',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format',
      fullImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format',
      client: 'SocialBoost',
      year: '2024'
    },
    { 
      id: 5,
      title: 'Packaging Design', 
      category: 'Packaging', 
      description: 'Eco-friendly product packaging design',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format',
      fullImage: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&auto=format',
      client: 'EcoBrands',
      year: '2023'
    },
    { 
      id: 6,
      title: 'Website Redesign', 
      category: 'Web Design', 
      description: 'Modern responsive website redesign',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format',
      fullImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format',
      client: 'WebSolutions',
      year: '2024'
    },
        { 
      id: 7,
      title: 'Website Redesign', 
      category: 'Web Design', 
      description: 'Modern responsive website redesign',
      image: 'https://plus.unsplash.com/premium_photo-1682125191965-80aef56da033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      fullImage: 'https://plus.unsplash.com/premium_photo-1682125191965-80aef56da033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      client: 'WebSolutions',
      year: '2024'
    },
        { 
      id: 8,
      title: 'Website Redesign', 
      category: 'Web Design', 
      description: 'Modern responsive website redesign',
      image: 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      fullImage: 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvc3RlcnN8ZW58MHx8MHx8fDA%3D',
      client: 'WebSolutions',
      year: '2024'
    },
        { 
      id: 9,
      title: 'Website Redesign', 
      category: 'Web Design', 
      description: 'Modern responsive website redesign',
      image: 'https://images.unsplash.com/photo-1584448141569-69f342da535c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      fullImage: 'https://images.unsplash.com/photo-1584448141569-69f342da535c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      client: 'WebSolutions',
      year: '2024'
    },
  ]

  const openImage = (index) => {
    setCurrentIndex(index)
    setSelectedImage(projects[index])
    document.body.style.overflow = 'hidden'
  }

  const closeImage = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(newIndex)
    setSelectedImage(projects[newIndex])
  }

  const previousImage = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(newIndex)
    setSelectedImage(projects[newIndex])
  }

  // Handle keyboard navigation
  useState(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      if (e.key === 'Escape') closeImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') previousImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex])

  return (
    <>
      <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects. Click on any image to view in fullscreen.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openImage(index)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                    <p className="text-blue-400 text-xs mt-2">Click to expand →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              previousImage()
            }}
            className="absolute left-6 z-50 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-6 z-50 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-4 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.fullImage || selectedImage.image} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{selectedImage.category}</p>
                  <p className="text-gray-400 text-sm">{selectedImage.description}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-gray-400">Client: {selectedImage.client}</span>
                    <span className="text-xs text-gray-400">Year: {selectedImage.year}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{currentIndex + 1} / {projects.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm bg-black/50 px-4 py-2 rounded-full">
            ← → Navigate | ESC Close
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Portfolio