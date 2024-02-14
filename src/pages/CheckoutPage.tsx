import { motion } from "framer-motion";
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

const CheckoutPage = () => {
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
        <h1 className="text-center text-xl mt-2">
          CheckoutPage is not implemented yet
        </h1>
        {/* Render items in cart as a list  */}
        {/* TODO */}
      </motion.div>
    </>
  );
};

export default CheckoutPage;
