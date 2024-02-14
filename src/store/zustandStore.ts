import { create } from "zustand";
import { type Product } from "../components/ProductList";
import toast from "react-hot-toast";

interface State {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const getLocalStorage = () => {
  try {
    const item = localStorage.getItem("cart");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const cartStore = create<State>((set) => ({
  cart: getLocalStorage(),
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (!existingItem) {
        const newCart = [...state.cart, { ...item }];
        window.localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      } else {
        toast.error("Item already in cart");
        return state;
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        cart: newCart,
      };
    });
  },
  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },
}));

export default cartStore;
