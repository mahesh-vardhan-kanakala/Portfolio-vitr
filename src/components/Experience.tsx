import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'Innomatics Research Labs',
      period: '08/2024 - 10/2024',
      location: 'Remote',
      description: [
        'Collaborated on web applications with React, Flask, and SQL databases',
        'Integrated RESTful APIs ensuring data consistency',
        'Conducted code reviews to maintain high-quality standards',
        'Optimized application performance and user experience'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-lg p-2 text-white mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <div className="text-gray-600 mt-1 mb-4">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;