import ProductItem from "./ProductItem";
import productData, { Product } from "../productData"; // Product tipi import ediliyor

// Props tipi tanımlanıyor
interface ProductsProps {
  cart: Product[]; // cart, Product türünde bir array olacak
  setCart: React.Dispatch<React.SetStateAction<Product[]>>; // setCart, Product[] dizisini güncelleyen bir fonksiyon olacak
}

const Products = ({ cart, setCart }: ProductsProps) => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}           // cart prop'u buraya geçiliyor
          setCart={setCart}      // setCart prop'u buraya geçiliyor
        />
      ))}
    </div>
  );
};

export default Products;
