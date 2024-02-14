import { useStore } from "zustand";
import cartStore from "../store/zustandStore";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, clearCart } = useStore(cartStore);

  const handleClearCart = () => {
    try {
      clearCart();
      toast.success("Cart cleared");
    } catch (error) {
      console.log(error);
      toast.error("Error clearing cart");
    }
  };

  if (cart.length === 0)
    return (
      <h1 className="text-4xl font-semibold text-center mt-3">
        No items here !
      </h1>
    );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="mx-3 mt-1">
        {cart && (
          <h1 className="text-2xl">Cart total : $ {Math.round(total)}</h1>
          // todo round 2 decimal places
        )}
        <div className="flex flex-wrap gap-1 mt-4 mx-3">
          {cart.map((item) => (
            <>
              <AnimatePresence key={item.id}>
                <ProductCard item={item} fromCart key={item.id} />
              </AnimatePresence>
            </>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button
          label="Click here to clear cart"
          onClick={handleClearCart}
          className="bg-red-500  mb-20 mt-8 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
        />
        <Link to={"/checkout"}>
          <Button
            label="Checkout"
            className="bg-blue-500  mb-20 mt-8 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
    </>
  );
};

export default Cart;
