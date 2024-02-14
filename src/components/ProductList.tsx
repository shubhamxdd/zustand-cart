import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CategoryButton from "./CategoryButton";
import RangeInput from "./RangeInputs";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductList = () => {
  const [data, setData] = useState<Product[] | null>(null);

  const [maxMin, setMaxMin] = useState({
    max: 0,
    min: 0,
  });

  const [minFilterAmtVal, setMinFilterAmtVal] = useState(0);
  const [maxFilterAmtVal, setMaxFilterAmtVal] = useState(Infinity);

  const [category, setCategory] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const dataF = await response.json();
      setData(dataF);
      const maxPrice = Math.max(...dataF.map((item: Product) => item.price));
      const minPrice = Math.min(...dataF.map((item: Product) => item.price));
      setMaxMin({ max: maxPrice, min: minPrice });
      console.log(maxMin);

      if (category) {
        setData(dataF.filter((item: Product) => item.category === category));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = data?.filter(
    (item) => item.price >= minFilterAmtVal && item.price <= maxFilterAmtVal
  );

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-center my-4">
          Products List
        </h1>
        <div className="flex flex-wrap justify-center items-center my-5 gap-3">
          <CategoryButton setCategory={setCategory} />
          <div className="flex justify-center gap-2">
            <RangeInput
              maxFilterAmtVal={maxFilterAmtVal}
              maxMin={maxMin}
              minFilterAmtVal={minFilterAmtVal}
              setMaxFilterAmtVal={setMaxFilterAmtVal}
              setMinFilterAmtVal={setMinFilterAmtVal}
            />
          </div>
        </div>
        <p className="text-center mb-2 -mt-4">
          Filtering products based on price between {minFilterAmtVal} and{" "}
          {maxFilterAmtVal}
        </p>
        <div className="flex flex-wrap gap-1">
          {data ? (
            filteredData?.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })
          ) : (
            <h1 className="text-2xl text-center">Loading....</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
