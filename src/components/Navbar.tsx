import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-stone-600 text-white px-8 p-4  flex justify-between items-center sticky top-0">
        <Link to={"/"}>
          <h1 className="text-xl font-semibold">StoreName</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to={"/cart"}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
