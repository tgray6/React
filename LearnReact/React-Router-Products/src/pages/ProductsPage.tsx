import { Products } from "../data/products";
import { Link, useSearchParams } from "react-router-dom";

export function ProductsPage() {
  const [searchParams] = useSearchParams();

  function getFilteredProducts() {
    const search = searchParams.get("search");
    if (search === null || search === "") {
      return Products;
    } else {
      return Products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }
  }

  return (
    <div>
      <h1 className="bg-[#3a0e55] text-white px-5 py-5 font-bold text-center">
        Here are some new games for sale at terrible prices that make no sense
        with no platform specified
      </h1>
      <div className="flex flex-wrap justify-between text-center">
        {getFilteredProducts().map((product) => (
          <div className="py-5 px-5 hover:underline mx-auto" key={product.id}>
            <Link to={`${product.id}`}>
              <img
                className="w-56 h-56 shrink-0 grow-0 border-[5px]"
                src={product.imageUrl}
              />
              <p className="font-bold text-black">{product.name}</p>
            </Link>

            <p>ID: {product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
