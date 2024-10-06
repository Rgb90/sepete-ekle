export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const productData: Product[] = [
  {
    id: 1,
    name: "Ürün 1",
    price: 100,
    img: "https://placehold.co/250x250"
  },
  {
    id: 2,
    name: "Ürün 2",
    price: 200,
    img: "https://placehold.co/250x250"
  },
  {
    id: 3,
    name: "Ürün 3",
    price: 300,
    img: "https://placehold.co/250x250"
  }
];

export default productData;
