import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({item}) => {
  const {cartItem, addToCart, removeCartItem,url, token, VND} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        {/* <img className='food-item-image' src={url+ '/images/'+ image} alt={name} /> */}
        <img className='food-item-image' src={item.image} alt={item.name} />
        {/* {token ? !cartItem[id] ?
         <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white}/>
        :<div className='food-item-counter'>
            <img onClick={() => removeCartItem(id)} src={assets.remove_icon_red}/>
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green}/>
          </div> : ''} */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{item.name}</p>
            <img src={assets.rating_star} alt='rate_star'/>
        </div>
        <p className="food-item-price">{VND.format(item.price)}</p>
  
        <button className={cartItem[item._id] ? 'order-btn active' : 'order-btn'} onClick={() => addToCart(item._id)} > Order Now </button> 
      </div>
    </div>
  )
}

export default FoodItem
