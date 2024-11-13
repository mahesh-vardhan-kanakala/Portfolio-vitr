import { 
  Cloud, 
  Database, 
  Code2, 
  GitBranch,
  Monitor,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: <Server className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'GitLab CI/CD']
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean']
    },
    {
      title: 'Frontend',
      icon: <Monitor className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Node.js', 'Python', 'Express', 'FastAPI']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Skills & Technologies</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center mb-4 space-x-3">
                  <div className="p-2 text-white bg-blue-600 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-blue-700 rounded-full bg-blue-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
