import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const ConfirmPage = () => {
  const orderId = Math.floor(Math.random() * 100000); // Generate a random order ID for demonstration purposes

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
        <p>
          Your order ID is: <span className="font-bold">{orderId}</span>
        </p>
        <Link to={"/"}>
          <Button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
            label="Continue Shopping"
          />
        </Link>
      </div>
    </>
  );
};

export default ConfirmPage;
