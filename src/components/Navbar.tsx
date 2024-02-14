import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-stone-600 text-white px-8 p-4  flex justify-between items-center sticky top-0">
        <Link to={"/"}>
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-xl font-semibold"
          >
            StoreName
          </motion.h1>
        </Link>
        <ul className="flex gap-4">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link className="hover:underline" to={"/cart"}>
              Cart
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
