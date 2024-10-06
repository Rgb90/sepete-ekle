interface CartProps {
  cart: { id: number; name: string; price: number }[]; // cart'ın türü
}

const Cart = ({ cart }: CartProps) => {
  // Eğer sepet boşsa, bir mesaj göster
  if (cart.length === 0) {
    return (
      <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
        <hr className="my-4" />
        <p>Sepetiniz boş.</p>
      </div>
    );
  }

  // Toplam fiyatı hesapla
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {/* Sepetteki ürünleri listele */}
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price} TL</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      {/* Dinamik Toplam Fiyat */}
      <p className="font-semibold text-xl">Toplam: {totalPrice} TL</p>
      <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded w-full mt-4 transition-all">
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;
