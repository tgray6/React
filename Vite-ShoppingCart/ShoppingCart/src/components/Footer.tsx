import useCart from "../hooks/useCart";

interface IPropsType {
  viewCart: boolean;
}

const Footer = ({ viewCart }: IPropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  );

  const Content = <footer className="footer">{pageContent}</footer>;

  return Content;
};
export default Footer;
