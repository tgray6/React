import { useParams } from "react-router-dom";
import { Products } from "../data/products";

type Params = {
  productID: string;
};

export function SingleProductPage() {
  const params = useParams<Params>();

  const productID =
    params.productID === undefined ? undefined : parseInt(params.productID);

  const product = Products.find((product) => product.id === productID);

  return (
    <div className="text-center">
      {product === undefined ? (
        <h1>Ewps, product was undefined, ID did not exist</h1>
      ) : (
        <>
          <h1 className="bg-[#3a0e55] text-white px-5 py-5 font-bold">
            Here is an individual products page, shows one product based on
            product/:id using useParams
          </h1>
          <div className="py-5">
            <img
              className="w-56 h-56 rounded mx-auto border-[5px] "
              src={product.imageUrl}
            />
            <h1 className="font-bold">{product.name}</h1>
            <p>Score: {product.score}</p>
            <p>{product.description}</p>
            <p className="font-bold text-red-500">
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
              }).format(product.price)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
