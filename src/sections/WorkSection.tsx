function WorkSection() {
  // Work experience data
  const experiences = [
    {
      id: 1,
      company: 'Microsoft',
      position: 'Software Engineer',
      period: 'May 2024 - Present',
      description:
        'Developed cloud-native RESTful API ecosystem with 25+ endpoints handling 10M+ monthly transactions for Microsoft Store\'s customer support platform. Optimized customer search functionality achieving sub-200ms response times and co-led 70+ security and compliance initiatives.',
      technologies: ['C#', '.NET', 'Azure', 'REST APIs'],
      current: true,
    },
    {
      id: 2,
      company: 'BYJU\'S',
      position: 'Member of Technical Staff',
      period: 'Jan 2023 - May 2024',
      description:
        'Led backend ownership of Assessment Tech platform handling ~2M visits per page for scholarship and mock-test pages. Implemented A/B testing infrastructure using Unleash and developed automation modules for streamlined test creation and scheduling.',
      technologies: ['Node.js', 'JavaScript', 'Unleash', 'MongoDB'],
      current: false,
    },
    {
      id: 3,
      company: 'Samsung R&D Institute',
      position: 'PRISM R&D Intern',
      period: 'May 2021 - Nov 2021',
      description:
        'Built an automated browser tracking-protection evaluation framework implementing 10+ real-world tracking scenarios. Designed and deployed a live results dashboard delivering category-wise protection scores for privacy performance analysis.',
      technologies: ['React', 'Node.js', 'JavaScript'],
      current: false,
    },
    {
      id: 4,
      company: 'VidurAI',
      position: 'Machine Learning Intern',
      period: 'Nov 2021 - Jul 2022',
      description:
        'Built an ML-driven log anomaly detection system to automatically flag error logs from large-scale operational datasets. Applied AIOps concepts to automate incident detection workflows and improve system reliability.',
      technologies: ['Python', 'Machine Learning', 'AIOps'],
      current: false,
    },
  ];

  return (
    <section id="work" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey over the past 2 years
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    exp.current
                      ? 'bg-purple-600 border-purple-200'
                      : 'bg-white border-purple-300'
                  }`}
                ></div>

                {/* Experience card */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-600">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-purple-600 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
