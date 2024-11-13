import { GraduationCap, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
}

interface Certification {
  name: string;
}

const Education = () => {
  const education: Education[] = [
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      institution: 'Aditya Engineering College',
      location: 'Surampalem, East Godavari Dist, A.P'
    },
    {
      degree: 'Diploma in Electrical & Electronics Engineering',
      institution: 'Aditya Engineering College',
      location: 'Surampalem, East Godavari Dist, A.P'
    }
  ];

  const certifications: Certification[] = [
    { name: 'The Complete 2024 Web Development Bootcamp' },
    { name: 'Introduction to Front End Development' },
    { name: 'Introduction to Programming Using Python' },
    { name: 'Python for Beginners' },
    { name: 'Learning Amazon Web Services (AWS) for Developers' },
    { name: 'Learning Git and GitHub (2021)' },
    { name: 'Career Essentials in GitHub Professional Certificate' },
    { name: 'Git Essential Training' },
    { name: 'Programming Foundations: Databases' },
    { name: 'Advanced Golang' },
    { name: 'Learn Ansible Basics - Beginners Course' },
    { name: 'Grafana Loki' },
    { name: 'Prometheus Certified Associate (PCA)' },
    { name: 'GitOps with ArgoCD' },
    { name: 'Terraform Basics Training Course' },
    { name: 'Kubernetes for the Absolute Beginners' },
    { name: 'Docker Training Course for the Absolute Beginner' },
    { name: 'Jenkins for Beginners' },
    { name: 'GIT for Beginners' },
    { name: 'Helm for Beginners' },
    { name: 'Learning Linux Basics Course & Labs' },
    { name: 'Fundamentals of DevOps' },
    { name: 'Shell Scripts for Beginners' },
    { name: 'Python Basics' },
    { name: 'Introduction to Web Development [HTML, CSS, JavaScript]' },
    { name: 'Web Development Bootcamp with HTML CSS PHP MySQL Wordpress' }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Education & Certifications</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center mb-6 space-x-3">
                <div className="p-2 text-white bg-blue-600 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 transition-shadow duration-300 bg-gray-50 rounded-xl hover:shadow-md"
                  >
                    <h4 className="mb-1 text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="mb-2 font-medium text-blue-600">{edu.institution}</p>
                    <div className="text-gray-600">
                      <p>{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 space-x-3">
                <div className="p-2 text-white bg-blue-600 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-6 transition-shadow duration-300 bg-gray-50 rounded-xl hover:shadow-md"
                  >
                    <h4 className="mb-1 text-lg font-semibold text-gray-900">
                      {cert.name}
                    </h4>
                    <div className="text-gray-600"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
