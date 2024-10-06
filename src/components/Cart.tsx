interface CartProps {
  cart: { id: number; name: string; price: number }[];
  emptyCart: () => void; 
}

const Cart = ({ cart, emptyCart }: CartProps) => {
  // Toplam fiyatı hesapla
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
        <hr className="my-4" />
        <p>Sepetinizde ürün yok.</p>
      </div>
    );
  }

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price} TL</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: {totalPrice} TL</p>
      <button
        className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded w-full mt-4 transition-all"
        onClick={emptyCart} 
      >
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;
