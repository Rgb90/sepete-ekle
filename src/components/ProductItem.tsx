interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface ProductItemProps {
  product: Product;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductItem = ({ product, cart, setCart }: ProductItemProps) => {
  const addToCart = (product: Product) => {
    // setCart([...cart, product]);  // Sepete ürün ekleme işlemi
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover rounded-t-lg" src={product.img} alt={product.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price} TL</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          onClick={() => addToCart(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
