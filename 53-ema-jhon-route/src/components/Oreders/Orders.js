import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (id) => {
    setCart(cart.filter(product => product.id !== id));
    removeFromDb(id);

  }

  return (
    <div>
      <h1>Allah is great</h1>
      <h2>This is Orders:{products.length}</h2>
      <h2>This is Cart:{cart.length}</h2>
      <div className='shop-container'>
        <div className="review-items-container">
         {
           cart.map(product =><ReviewItem
           key={product.id}
            product={product}
            handleremoveItem={handleRemoveItem}
           ></ReviewItem>)
         }
        </div>
        <div className="cart-container">
        <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;