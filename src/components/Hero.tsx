import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 py-32 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
            Soma Mahesh Vardhan Kanakala
          </h2>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            DevOps Engineer & Full Stack Developer
          </h1>
          <p className="mb-12 text-xl text-gray-600 md:text-2xl">
            Building scalable infrastructure and creating exceptional web experiences
          </p>

          <div className="flex justify-center mb-12 space-x-6">
            <a
              href="https://github.com/mahesh-vardhan-kanakala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-vardhan-kanakala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:maheshvardhank@gmail.com"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors duration-200 bg-blue-600 rounded-full hover:bg-blue-700 animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;