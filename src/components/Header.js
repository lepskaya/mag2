import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa/index.js";
import Order from './Order.js';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>Pink Elephant</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
      
        {cartOpen && (
          <div className='shop-cart'>
              {props.orders.length? props.orders.map(el => <Order key={el.id} item={el}/> ):'Корзина пуста'}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
