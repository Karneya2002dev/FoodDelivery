
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FaRupeeSign } from "react-icons/fa";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);





  return (
    <div className='food-item'>

      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="" srcset="" />
        {!cartItems[id]

          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
          : <div className='food-item-counter'>
            <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} srcset="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} srcset="" />



          </div>




        }




      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>

          <img src={assets.rating_starts} alt="" srcset="" />

        </div>
        <p className='food-item-desc'>{description}</p>
      </div>

      <p className="food-item-price"><FaRupeeSign />{price}</p>



    </div>
  )
}

export default FoodItem