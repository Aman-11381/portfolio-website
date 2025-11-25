function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>

          {/* Content */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              I'm a passionate software engineer with 2 years of professional
              experience building modern web applications. I specialize in
              creating scalable, user-friendly solutions that solve real-world
              problems.
            </p>

            <p>
              My journey in software development began during my college years,
              where I discovered my love for coding and problem-solving. Since
              then, I've worked on various projects ranging from e-commerce
              platforms to data visualization tools, constantly learning and
              growing with each challenge.
            </p>

            <p>
              I believe in writing clean, maintainable code and staying updated
              with the latest technologies and best practices. When I'm not
              coding, you can find me exploring new frameworks, contributing to
              open-source projects, or sharing my knowledge with the developer
              community.
            </p>
          </div>

          {/* Skills or Technologies (optional section) */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'JavaScript',
                'React',
                'TypeScript',
                'Node.js',
                'Python',
                'SQL',
                'Git',
                'AWS',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
