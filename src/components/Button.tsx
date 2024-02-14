import { AnimatePresence, motion } from "framer-motion";

interface Props {
  label: string;
  onClick?: () => void;
  className: string;
}

const Button = ({ className, label, onClick }: Props) => {
  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        exit={{ opacity: 0 }}
        className={className}
        onClick={onClick}
      >
        {label}
      </motion.button>
    </AnimatePresence>
  );
};

export default Button;
