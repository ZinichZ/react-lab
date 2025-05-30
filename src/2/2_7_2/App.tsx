// #2_7_2
// Удаление товара из корзины, когда счетчик достигает 1

import { useState } from 'react';

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 }
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId)
          return {...product, count: product.count + 1};
        else return product;
      })
    );
  }

  function handleDecreaseClick(productId: number) {
    setProducts((prevProducts) =>
      prevProducts.flatMap((product) => {
        if (product.id === productId) {
          if (product.count === 1) 
            return []; 
          else 
            return [{ ...product, count: product.count - 1 }];
        }
        return [product];
      })
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}