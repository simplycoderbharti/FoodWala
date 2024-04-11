import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './utills/cartSlice';
import { CDN_URL } from './utills/constant';
import { clearCart } from './utills/cartSlice';
import empty_cart from '../images/empty_cart.webp';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (curItem) => {
        dispatch(removeItem(curItem));
    };

    let totalCartPrice = 0;
    const GST = 39;
    const ServiceCharge = 20;

    cartItems.map((item) => {
        totalCartPrice += item.card.info.price/100
    })




    return (
        <>
            <div className='text-center m-10 p-10 cart-start'>
                
                <h1 className='text-2xl font-bold'> Cart</h1>
                
                {cartItems.length === 0 ? (
                    <>
                        <img src={empty_cart} className='m-auto' />
                        <h1 className='mt-10'> uff your cart is empty add item</h1>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded mt-10 font-bold '>
                            <Link to='/home'>Add Items</Link>
                        </button>
                    </>
                ) : (
                    <div className='cart-box md:w-12/12 lg:w-6/12 sm:w-12/12 m-auto'>
                        <button
                            className='p-2 m-2 bg-black text-white rounded-lg'
                            onClick={handleClearCart}
                        >
                            Clear
                        </button>
                        {cartItems.map((item, index) => {
                           

                            return (
                                <div
                                    key={item.card.info.id}
                                    className='flex p-2 m-2 border border-b-black sm:flex-row'
                                >
                                    <div className='flex-shrink-0 text-center mr-4'>
                                        <img
                                            src={CDN_URL + item.card.info.imageId}
                                            className='w-32 h-auto mx-auto'
                                            alt='item-img'
                                        />
                                        <button
                                            className='bg-black text-white px-2 py-1 shadow-lg mt-2'
                                            onClick={() => handleRemoveItem(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className='flex-grow text-left'>
                                        <span className='font-bold'> {item.card.info.name}</span>
                                        <span> - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100} </span>
                                        <p className='text-xs description'> {item.card.info.description}</p>
                                        <p className='text-xs'>
                                            {' '}
                                            {item.card.info.itemAttribute.vegClassifier ||
                                                item.card.info.itemAttribute.nonvegClassifier}
                                        </p>
                                    </div>



                                </div>


                            );
                        })}
                            <div>
                                <div className='border mt-10 w-5/12 m-auto bill-tab '>
                                    <div className="Bill-deatils text-center font-bold">Bill Details</div>
                                    <div className="My-order flex justify-center">
                                        <div className="Food-container">
                                            <div className="subtotal mt-4">Item Total:</div>
                                            <hr />
                                            <div className="subtotal mt-4">Delivery partner fee:</div>
                                            <hr />
                                            <div className="subtotal mt-4">Govt Taxes & Other Charges:</div>
                                            <hr />
                                            <div className="totalorder mt-4">TO PAY:</div>

                                        </div>
                                        <div className="Food-container">
                                            <div className="subtotal mt-4">Rs {totalCartPrice} /-</div>
                                            <hr />
                                            <div className="subtotal mt-4">Rs {GST}/-</div>
                                            <hr />
                                            <div className="subtotal mt-4">Rs {ServiceCharge}/-</div>
                                            <hr />
                                            <div className="totalorder mt-4">
                                                Rs {totalCartPrice + ServiceCharge + GST}/-
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                )}

            </div>
            <Footer />
        </>
    );
}

export default Cart;
