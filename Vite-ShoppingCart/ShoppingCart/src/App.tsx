import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const PageContent = viewCart ? <Cart /> : <ProductList />;

  const Content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {PageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return Content;
}

export default App;
