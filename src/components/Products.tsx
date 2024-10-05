import ProductItem from "./ProductItem"

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </div>
  )
}

export default Products