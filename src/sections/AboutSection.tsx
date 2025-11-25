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
              Software Engineer with 2+ years of experience building scalable,
              secure, and high-performance systems across large-scale consumer
              platforms.
            </p>

            <p>
              At Microsoft, part of the Commerce Platform Experience team,
              developing cloud systems that power the Microsoft Store's customer
              support and commerce operations. Work spans API development, AI
              integration, and large-scale optimization, focused on improving
              performance, reliability, and user experience.
            </p>

            <p>
              Passionate about solving complex engineering problems, designing
              for scale, and creating systems that combine technical excellence
              with real-world impact. Always curious, data-driven, and motivated
              by opportunities to build products that make a difference.
            </p>
          </div>

          {/* Skills or Technologies (optional section) */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'C++',
                'C#',
                'JavaScript',
                'TypeScript',
                '.NET Core',
                'AngularJS',
                'React',
                'Node.js',
                'Azure',
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
