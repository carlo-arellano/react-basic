import { useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  useEffect(() => {
    console.error("Fetching products in " + category);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
