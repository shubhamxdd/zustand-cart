import { motion } from "framer-motion";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";

const pageVariants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
};

const CartPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        variants={pageVariants}
        animate="enter"
        initial="exit"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Cart />
      </motion.div>
    </>
  );
};

export default CartPage;
