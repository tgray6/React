interface IPropsType {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ viewCart, setViewCart }: IPropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View Products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  );

  const Content = <nav className="nav">{button}</nav>;

  return Content;
};
export default Nav;
