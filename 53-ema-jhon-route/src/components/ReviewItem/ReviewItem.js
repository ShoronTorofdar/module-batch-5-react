import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviewitem.css'


const ReviewItem = (props) => {
  const { product, handleremoveItem } = props;
  const { name, price, quantity, id, shipping, img } = product;
  return (
    <div className='review-item-details-container'>

      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className='product-name' title={name}>Review Items:
          {name.length > 20 ? name.slice(0, 20) + '...' : name}
        </h1>
        <h2>Price: ${price}</h2>
        <h3>Quantity: {quantity} pic</h3>
        <h3>Shipping: ${shipping}</h3>
      </div>
      <div>
        <button className='remove-button' onClick={() => handleremoveItem(id)}>
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>

        </button>
      </div>

    </div>
  );
};

export default ReviewItem;