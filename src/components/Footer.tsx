const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 h-90">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Logo */}
          <div className="flex">
            <img src=".public/logo.jpeg" alt="Supreme Group" className="w-50" />
          </div><br/>

          {/* Navigation Sections */}
          <div 
          className="grid grid-cols-8 md:grid-cols-4 gap-20 w-full md:w-auto"
          >
            
            {/* Applications */}
            <div>
              <h3 className="font-semibold mb-3">APPLICATIONS</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#">Apparel</a></li>
                <li><a href="#">Automotive</a></li>
                <li><a href="#">Filtration</a></li>
                <li><a href="#">Customised Solutions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">COMPANY</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#">Innovation</a></li>
                <li><a href="#">Global Competency</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="font-semibold mb-3">MORE</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold mb-3">FOLLOW US</h3>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-600">Medium</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <br/>
        <div className="mt-10 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme House: 110, 16th Road, Chembur, Mumbai - 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
