import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import Button from "../components/Button";
import CheckoutList from "../components/CheckoutList";

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
        className="mx-3"
        variants={pageVariants}
        animate="enter"
        initial="exit"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <CheckoutList />
      </motion.div>
    </>
  );
};

export default CheckoutPage;
