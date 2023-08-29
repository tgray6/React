import Nav from "./Nav";
import useCart from "../hooks/useCart";

interface IPropsType {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ viewCart, setViewCart }: IPropsType) => {
  const { totalItems, totalPrice } = useCart();

  const Content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Steelseries Co.</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return Content;
};
export default Header;
