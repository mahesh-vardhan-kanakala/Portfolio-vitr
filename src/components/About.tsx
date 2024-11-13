import { Code, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">About Me</h2>
          
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="mb-12 text-center text-gray-600">
              I'm a passionate DevOps Engineer and Full Stack Developer with expertise in cloud infrastructure,
              automation, and web development. I specialize in creating efficient CI/CD pipelines and building
              scalable web applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="p-3 text-white bg-blue-600 rounded-lg">
                  <Server className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">DevOps</h3>
              <p className="text-gray-600">
                Expertise in containerization, orchestration, and automated deployment pipelines
              </p>
            </div>

            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="p-3 text-white bg-blue-600 rounded-lg">
                  <Code className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Full Stack</h3>
              <p className="text-gray-600">
                Building responsive web applications with modern frameworks and technologies
              </p>
            </div>

            <div className="p-6 text-center bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="p-3 text-white bg-blue-600 rounded-lg">
                  <Cpu className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cloud Native</h3>
              <p className="text-gray-600">
                Designing and implementing scalable cloud infrastructure solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;