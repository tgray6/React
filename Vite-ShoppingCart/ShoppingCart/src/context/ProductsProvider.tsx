import {
  Children,
  createContext,
  ReactNode,
  ReactElement,
  useState,
  useEffect,
} from "react";

export interface IProduct {
  sku: string;
  name: string;
  price: number;
}

// const InitState: IProduct[] = [];

////Commented out initially because we use the data/products.json instead from the fetch
const InitState: IProduct[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 50.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 60.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 80.99,
  },
];

//this type is used because it is how our JSON looks, which is {products: []}
export type UseProductsContextType = { products: IProduct[] };

//this gives us an initial state of the above type, we need this because it provides a value, not just a type like above
const InitContextState: UseProductsContextType = { products: [] };

//create the context based on the type and value above
const ProductsContext = createContext<UseProductsContextType>(InitContextState);

interface ChildrenType {
  children?: ReactElement | ReactElement[];
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, SetProducts] = useState<IProduct[]>(InitState);

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<IProduct[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) {
  //           console.log(err.message);
  //         }
  //       });
  //     return data;
  //   };

  //   fetchProducts().then((products) => {
  //     SetProducts(products);
  //   });
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
