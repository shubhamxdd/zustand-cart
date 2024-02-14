import { useStore } from "zustand";
import cartStore from "../store/zustandStore";
import Button from "./Button";
import toast from "react-hot-toast";
import { Link, redirect } from "react-router-dom";

const CheckoutList = () => {
  const { cart, removeFromCart, clearCart } = useStore(cartStore);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0)
    return <h1 className="text-center text-xl mt-2">No items in cart</h1>;

  return (
    <>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {cart.map((item) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100"
              key={item.id}
            >
              <td className="py-3 px-6 text-left">{item.title}</td>
              <td className="py-3 px-6 text-left">${item.price}</td>
              <td className="py-3 px-6 text-center">
                <Button
                  label="Remove"
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-3 px-6 text-right" colSpan={2}>
              Total
            </td>
            <td className="py-3 px-6 text-left font-semibold">
              $ {total.toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Link to="/confirmed">
        <Button
          className="bg-blue-500  mb-20 mt-8 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          label="Confirm your order"
          onClick={() => {
            toast.success("Order confirmed");
            clearCart();
          }}
        />
      </Link>
    </>
  );
};

export default CheckoutList;
