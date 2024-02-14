import { useStore } from "zustand";
import cartStore from "../store/zustandStore";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";
import Button from "./Button";

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

  return (
    <>
      <div className="flex flex-wrap gap-1 mt-4 mx-3">
        {cart.map((item) => (
          <ProductCard item={item} fromCart key={item.id} />
        ))}
      </div>

      <Button
        label="Click here to clear cart"
        onClick={handleClearCart}
        className="bg-red-500 mx-10 mb-20 mt-8 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
      />
    </>
  );
};

export default Cart;
