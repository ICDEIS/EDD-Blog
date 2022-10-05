

import React from 'react';
import classes from './modale.module.css'
import './modal.scss'
import { useContext } from 'react';
import { shopContext } from '../../context';

function Modale() {
   const {modal, showModal, plusQuantity, minusQuantity, deleteOrder, cartItem} = useContext(shopContext)
   const modalClass = [classes.modal]
   if (modal) {
      modalClass.push(classes.active)
   }
   const totalPrice = cartItem.reduce((total, item) => {
      return total + item.price * item.quantity
   },0)

   return (
      <>
         <div className={modalClass.join(' ')}
            onClick={showModal}>
            <div className={classes.modalContent} onClick={ee => ee.stopPropagation()}>
               <h4 className='text-center'>edd Cart</h4>
               <div className='cart-body'>
                  <h4 className='text-center'>{cartItem.length ? 'Your orders' : "no order"}</h4>
                  <ul className='cart-ul-list'>
                     {cartItem.map((item, idx) => (
                        <li className='cart-list-item' key={item.id}>
                           <span className='list-item-title'>{item.name}</span>
                           <span className='list-item-amount mx-2'>
                              <span className='ps-2'>${item.quantity * item.price} </span>
                              <span className='px-2'> x {item.quantity}</span>
                           </span>
                           <button onClick={() => plusQuantity(item.id)} className='btn btn-secondary item-count '>+</button>
                           <button onClick={() => minusQuantity(item.id)}  className='btn btn-warning item-count '>-</button>
                           <button onClick={() => deleteOrder(item)} className='btn btn-danger item-delete '>delete</button>
                        </li>
                     ))}
                  </ul>
               </div>
               <pre className='total-price'>Total Price: ${totalPrice}</pre>
            </div>
         </div>
      </>
   );
}

export default Modale;