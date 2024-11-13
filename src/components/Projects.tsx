import React, { useState } from 'react';
import {  Github, ExternalLink, Server, Code } from 'lucide-react';

import project1 from "../assets/images/project-1.png";  
import project2 from "../assets/images/project-2.png";  
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";
import project10 from "../assets/images/project-10.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'devops' | 'fullstack';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'devops' | 'fullstack'>('all');

  const projects: Project[] = [
    // DevOps Projects
    {
      title: 'Developing and Deploying a Game with Docker on AWS Elastic Beanstalk',
      description: 'Deployed the 2048 game on AWS Elastic Beanstalk using Docker, achieving 99.9% uptime and reducing operational costs by 20% through optimized AWS management. CI/CD processes improved deployment speed by 30%.',
      image: 'https://images.unsplash.com/photo-1551033541-2075d8363c66?auto=format&fit=crop&q=80&w=800',
      technologies: ['Docker', 'AWS Elastic Beanstalk', 'AWS Management Console'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/2048-gh-pages',
      type: 'devops'
    },
    {
      title: 'Super Mario Game Deployment on AWS EKS',
      description: 'Deployed Super Mario on AWS EKS with Docker containers, enhancing scalability and performance. Implemented Kubernetes orchestration to achieve cost savings, reduced downtime by 25%, and ensured high availability and security.',
      image: project3,
      technologies: ['Docker', 'AWS EKS', 'AWS CLI', 'EKSCTL', 'Kubectl'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/k8-mario',
      type: 'devops'
    },
    {
      title: 'DevSecOps Pipeline for Netflix Clone Application',
      description: 'Architected a comprehensive DevSecOps pipeline for Netflix clone, implementing security scanning and automated deployments.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Jenkins', 'GitLab', 'Kubernetes', 'Docker'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/DevSecOps-Project-netflix',
      type: 'devops'
    },
    {
      title: 'Automated Infrastructure Management with GitLab CI/CD and Terraform',
      description: 'Implemented GitLab CI/CD and Terraform for automated infrastructure management, achieving 99.9% uptime, faster ticket resolution by 20%, and a 15% improvement in user satisfaction with fewer bugs.',
      image: project5,
      technologies: ['GitLab CI/CD', 'Terraform'],
      githubUrl: 'https://gitlab.com/devops7783952/cicdtf',
      type: 'devops'
    },
    {
      title: 'Peer Code Reviews for Optimization',
      description: 'Conducted peer code reviews, identifying optimization opportunities that improved application load times by 20%, significantly enhancing user experience across various devices.',
      image: project4,
      technologies: ['Git', 'GitHub'],
      type: 'devops'
    },
    {
      title: 'Automating Tetris Deployments with ArgoCD, Terraform, and Jenkins',
      description: 'Automated Tetris deployments with ArgoCD for Kubernetes, Terraform for IaC provisioning, and Jenkins CI/CD pipelines for efficient build, test, and deployment.',
      image: project6,
      technologies: ['ArgoCD', 'Terraform', 'Jenkins', 'Kubernetes', 'Docker'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/Tetris-main',
      type: 'devops'
    },
    
    // Full Stack Projects
    {
      title: 'React Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: project7, 
      technologies: ['React', 'Node.js', 'TypeScript', 'Material UI'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/portfolio-react',
      liveUrl: 'https://portfolio-react-lgkc.vercel.app/',
      type: 'fullstack'
    },
    
    {
      title: "Tetris Game (React)",
      description: "Built a classic Tetris game using React to handle the game state and logic. Features include real-time gameplay, scoring system, and keyboard controls for user interaction. The game board is dynamically rendered, and the game over screen appears when the pieces stack up.",
      image: project8,
      technologies: ["React", "JavaScript", "CSS", "HTML", "React Hooks"],
      githubUrl: "https://github.com/mahesh-vardhan-kanakala/Tetri-Game-React",
      liveUrl: 'https://vercel.com/maheshs-projects-61d83092/tetri-game-react',
      type: "fullstack"
    },
    {
      title: 'Student Management System',
      description: "Developed a responsive Student Management System with ReactJS, enabling registration, search, sorting, pagination, and CRUD operations, plus a statistics dashboard",
      image: project10,
      technologies: ['Vite', 'React', 'TypeScript', 'Bootstrap', 'Context API', 'React Router'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/student-management-system',
      liveUrl: 'https://student-management-system-mu-rose.vercel.app/',
      type: 'fullstack'
    },
    
    {
      title: 'AI Image Generator',
      description: 'Created an application that generates images based on custom text descriptions using machine learning models, with features for style and color customization to enhance user engagement.',
      image: project9,
      technologies: [ 'ReactJs', 'Node.js', 'Machine Learning', 'REST API'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/Ai-Image-Generator',
      type: 'fullstack'
    },
    {
      title: 'Chatbot AI',
      description: 'Developed a chatbot application with AI to provide interactive user experiences. Integrated natural language processing for improved conversation flow and user satisfaction.',
      image: project1, 
      technologies: ['AI', 'Natural Language Processing', 'React', 'Node.js'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/Chat-App',
      type: 'fullstack'
    },
    {
      title: 'To-Do List Application',
      description: 'Developed a dynamic to-do list application using ReactJS, allowing users to add, edit, and delete tasks. Utilized HTML, CSS, and Bootstrap for a responsive design.',
      image: project2,
      technologies: ['ReactJS', 'HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/mahesh-vardhan-kanakala/TODO-REACTJS',
      liveUrl: 'https://todo-reactjs-alpha.vercel.app/',
      type: 'fullstack'
    },
    
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.type === filter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Featured Projects</h2>
          
          <div className="flex justify-center mb-12 space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('devops')}
              className={`px-6 py-2 rounded-full ${filter === 'devops' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
            >
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4" />
                <span>DevOps</span>
              </div>
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-6 py-2 rounded-full ${filter === 'fullstack' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
            >
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Full Stack</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="flex gap-3 mt-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
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

export default Projects;
