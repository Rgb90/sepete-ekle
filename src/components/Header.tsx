import CartIcon from "./CartIcon"

interface HeaderProps {
  cart: { id: number; name: string; price: number }[]; 
}

const Header = ( {cart}: HeaderProps ) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">React + Vite + Tailwind CSS ile Sepet Uygulaması</h1>
        <CartIcon cart={cart}/>
    </div>
  )
}

export default Header