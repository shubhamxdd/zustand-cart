import Button from "./Button";

interface Props {
  setCategory: (category: string | null) => void;
}

const CategoryButton = ({ setCategory }: Props) => {
  const categoriesArray = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <>
      {categoriesArray.map((category) => {
        return (
          <Button
            key={category}
            onClick={() => {
              setCategory(category);
            }}
            className="bg-blue-500 capitalize hover:bg-blue-700 transition-all duration-300 text-white p-2 rounded-md"
            label={category}
          />
        );
      })}
      <Button
        onClick={() => {
          setCategory(null);
        }}
        className="p-2 rounded bg-purple-500 hover:bg-purple-700 text-white transition-all duration-300"
        label="Reset filter"
      />
    </>
  );
};

export default CategoryButton;
