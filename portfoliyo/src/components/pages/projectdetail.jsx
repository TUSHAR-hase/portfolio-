import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project One',
    desc: 'A stunning e-commerce platform with React and Node.js',
    details: 'This project features a fully responsive e-commerce platform with user authentication, product filtering, and a secure payment gateway. Built with React, Node.js, and MongoDB, it delivers a seamless shopping experience.',
    image: '/assets/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Project Two',
    desc: 'A creative portfolio app with animations',
    details: 'A dynamic portfolio showcasing advanced animations using Framer Motion. It includes a responsive design, smooth transitions, and a modern UI built with React and Tailwind CSS.',
    image: '/assets/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Project Three',
    desc: 'A real-time chat app with WebSocket',
    details: 'A real-time chat application with WebSocket for instant messaging. Features include private chats, group chats, and push notifications, built with React, Node.js, and Socket.io.',
    image: '/assets/images/project3.jpg',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <section className="pt-0 pb-20 w-full mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <p className="text-lg mb-6">{project.desc}</p>
        <p className="text-gray-300 mb-6">{project.details}</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;