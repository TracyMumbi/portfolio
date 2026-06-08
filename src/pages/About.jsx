import React from 'react'

function About() {
  const skills = [
    { name: 'Brand Identity', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Print Design', level: 88 },
    { name: 'Photography', level: 85 },
    { name: 'Videography', level: 80 },
    { name: 'Motion Graphics', level: 75 },
  ]

  const experiences = [
    {
      title: 'Senior Graphic Designer',
      company: 'Creative Agency Kenya',
      period: '2022 - Present',
      description: 'Leading design projects for major brands, mentoring junior designers, and ensuring quality standards across all deliverables.'
    },
    {
      title: 'Freelance Designer',
      company: 'Self-employed',
      period: '2019 - 2022',
      description: 'Worked with over 50 clients worldwide, delivering brand identities, marketing materials, and digital designs.'
    },
    {
      title: 'Junior Designer',
      company: 'PrintPlus Studios',
      period: '2018 - 2019',
      description: 'Assisted in print production, created marketing materials, and collaborated with senior designers on client projects.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Arts in Design',
      school: 'University of Nairobi',
      period: '2014 - 2018',
      description: 'Specialized in Graphic Design and Digital Media'
    },
    {
      degree: 'Certificate in UI/UX Design',
      school: 'Interaction Design Foundation',
      period: '2020',
      description: 'Advanced certification in user interface and experience design'
    }
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format"
                    alt="Collins"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Collins Omondi</h3>
                  <p className="text-blue-400 text-lg">Graphic Designer & Creative Director</p>
                  <div className="flex gap-3 mt-3 text-gray-400">
                    <span>📧</span>
                    <span>💼</span>
                    <span>🐦</span>
                    <span>📸</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t border-gray-700 pt-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📧</span>
                  <span>collins.designer@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📱</span>
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📍</span>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Who Am I?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Graphic Designer based in Nairobi, Kenya, with over 5 years of experience 
                in creating stunning visual designs that tell compelling stories and drive results. My journey 
                in design started when I realized the power of visual communication in shaping perceptions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in brand identity, digital design, and creative direction. I believe great design 
                solves problems and creates meaningful connections between brands and their audiences.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
              <p className="text-gray-300 italic">
                "Design is not just what it looks like. Design is how it works and how it makes people feel."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">🛠️ Tools I Use</h3>
              <div className="flex flex-wrap gap-3">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'After Effects', 'Premiere Pro'].map((tool, index) => (
                  <span key={index} className="px-3 py-2 bg-gray-700 rounded-lg text-gray-300 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">💼 Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-2">📅 {exp.period}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">🎓 Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-purple-400 text-sm mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-xs mb-2">📅 {edu.period}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">✨ Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-white font-semibold">150+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-3xl mb-2">☕</div>
                  <div className="text-white font-semibold">1000+</div>
                  <div className="text-gray-400 text-sm">Coffee Cups</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
            <p className="text-gray-300 mb-6">Have a project in mind? Let's create something amazing.</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About