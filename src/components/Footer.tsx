import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2024 Portfolio. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/mahesh-vardhan-kanakala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-vardhan-kanakala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:maheshvardhank@gmail.com"
              className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;