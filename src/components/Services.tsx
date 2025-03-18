import { motion } from "framer-motion";

const services = [
  { title: "Web Development", desc: "Cutting-edge websites and applications." },
  { title: "Digital Marketing", desc: "SEO, branding, and performance marketing." },
  { title: "Consulting", desc: "Expert guidance for business growth." },
];

const Services = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
