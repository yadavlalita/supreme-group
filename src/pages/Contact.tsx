import { motion } from "framer-motion";

const Contact = () => {
  return (
 <motion.section 
  // className="w-full max-w-screen-2xl mx-auto py-16 px-24 bg-[#0066B2] text-white"
   className="py-16  text-gray-800 bg-[#0066B2] text-white h-200"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-7xl font-bold">Get in touch</h2>
          <br/>
          <div className="w-16 border-b-2 border-white my-4"></div>
          <br/>
          <p className="text-3xl">For general enquiries</p>
          <br/>
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-3xl">Address :</h4><br/>
              <p className="text-3xl">110, 16th Road, Chembur, Mumbai - 400071</p><br/>
            </div>
            <div>
              <h4 className="text-3xl">Phone :</h4><br/>
              <p className="text-3xl">+91 22 25208822</p><br/>
            </div>
            <div>
              <h4 className="text-3xl">Email :</h4><br/>
              <p className="text-3xl">info@supremegroup.co.in</p>
            </div>
          </div>
        </div>


        <motion.form 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col">
            <label className="text-2xl">Full name</label>
            <input type="text" className="bg-transparent border-b border-white p-2 focus:outline-none" />
          </div><br/>
          <div className="flex flex-col">
            <label className="text-2xl">Email</label>
            <input type="email" className="bg-transparent border-b border-white p-2 focus:outline-none" />
          </div><br/>
          <div className="flex flex-col">
            <label className="text-2xl">Company</label>
            <input type="text" className="bg-transparent border-b border-white p-2 focus:outline-none" />
          </div><br/>
          <div className="flex flex-col">
            <label className="text-2xl">Message</label>
            <textarea className="bg-transparent border-b border-white p-2 focus:outline-none h-24"></textarea>
          </div><br/>
          <motion.button 
            className="mt-4 px-8 py-5 border border-white text-white rounded-full hover:bg-white hover:text-[#0066B2] transition w-45"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold">Send</span>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
