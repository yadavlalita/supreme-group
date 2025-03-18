
const Navbar = () => {

  return (
    <nav className="bg-white shadow-md fixed w-full p-5">
        <div className="col-span-12 md:col-span-2">
          <img
            src="./src/assets/logo.jpeg" // Replace with the actual logo path
            alt="Supreme Group"
            className="w-50 ml-40"
          />
        </div>
    </nav>
  );
};

export default Navbar;
