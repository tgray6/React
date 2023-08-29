import { IProduct } from "../context/ProductsProvider";
import {
  IREDUCER_ACTION,
  ReducerActionCasesType,
} from "../context/CartProvider";

interface IPropsType {
  product: IProduct;
  dispatch: React.Dispatch<IREDUCER_ACTION>;
  REDUCER_ACTIONS: 
}

const Product = () => {
  return <div>Product</div>;
};
export default Product;
