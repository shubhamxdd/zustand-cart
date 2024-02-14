import { useStore } from "zustand";
import { type Product } from "./ProductList";
import cartStore from "../store/zustandStore";
import toast from "react-hot-toast";
import Button from "./Button";
import { motion } from "framer-motion";

interface Props {
  item: Product;
  fromCart?: boolean;
}

const ProductCard = ({ item, fromCart }: Props) => {
  const { addToCart, removeFromCart } = useStore(cartStore);

  const handleAddToCart = (item: Product) => {
    try {
      addToCart(item);
      toast.success("Added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Error adding to cart");
    }
  };

  const handleRemoveFromCart = (id: number) => {
    try {
      removeFromCart(id);
      toast.success("Removed from cart");
    } catch (error) {
      console.log(error);
      toast.error("Error removing from cart");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id={item.id.toString()}
        className="mb-3 flex flex-col items-center justify-center border-2 border-gray-300 p-6 rounded-lg shadow-lg mx-auto w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-contain object-center mb-6 rounded sm:w-3/4 md:w-1/2 max-lg:w-3/4 "
        />
        <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-700 mb-2 text-center">$ {item.price}</p>
        {/* <p className="text-gray-600 text-sm mb-2 text-center">
          {item.description}
        </p> */}
        <p className="text-gray-500 text-xs mb-2 text-center">
          {item.category.split("")[0].toUpperCase() + item.category.slice(1)}
        </p>
        {/* <p className="text-gray-500 text-xs mb-2 text-center">
          {item.rating.rate}
        </p>
        <p className="text-gray-500 text-xs text-center">{item.rating.count}</p> */}
        <div className="flex gap-3">
          <Button
            label="Add to cart"
            onClick={() => {
              handleAddToCart(item);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          />

          {fromCart ? (
            <Button
              label="Remove from cart"
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
            />
          ) : (
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
              label="Read more"
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
