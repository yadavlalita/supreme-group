import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Supreme Group transformed our business with their expertise!",
  },
  {
    name: "Jane Smith",
    feedback: "Highly professional and innovative solutions. 10/10 service!",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic text-gray-600">"{testimonial.feedback}"</p>
              <h4 className="mt-4 text-lg font-semibold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
