import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

function App() {
  // cart state'inin türü Product[] olarak tanımlandı (Product türünde bir dizi)
  const [cart, setCart] = useState<Product[]>([]);

  const emptyCart = () => {
    setCart([])
  }

  return (
    <div className="container mx-auto p-4">
      <Header cart={cart}/>
      {/* cart ve setCart props olarak Products ve Cart bileşenlerine geçiliyor */}
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
