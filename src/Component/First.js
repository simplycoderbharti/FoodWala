import React, { useState } from "react";
import upper from '../images/upper.webp'
import one from '../images/one.webp'
import two from '../images/two.webp'
import three from '../images/three.webp'
import up from '../images/up.png'
import low from '../images/low.png'
import google from '../images/google.png'
import apple from  '../images/apple.webp'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import logo from '../images/logo2.png'


function First() {
    const [status, setStatus] = useState(false);
    const Navigate = useNavigate();

    const handleClicked = () => {
      
        Navigate('/home')
    }
    return (
        <>
           
            <div className=" first-section flex max-w-screen-2xl ms-auto ">
                <div className=" p-4 m-auto mt-3 ">
                  

                    <div className="mt-5">
                        <h1 className="text-3xl font-semibold capitalize">Cooking gone wrong?</h1>
                        <h3 className="mt-3 text-gray-400 capitalize text-2xl">
                            order food from favourite restaurant near you.{" "}
                        </h3>
                        <form>
                            <div className="mt-12 h-12 w-6/6 flex  ">
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    value=""
                                    className="border-solid border-[1px] text-light  border-black p-1 w-full h-full m-b-4"
                                />
                                <button className="px-6 bg-orange-400 text-white location-btn  right-0 text-bold h-full  rounded-tl-none rounded-bl-none ml-10
                             "onClick={handleClicked}>
                                    FIND FOOD
                                </button>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-xl text-gray-400 capitalize">POPULAR CITIES IN INDIA</h3>
                                <p className="mt-5 text-xl ">
                                    Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata
                                    Mumbai Pune & more.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="m-auto ">
                    <img src={upper} property="true" className="h-50" />
                </div>
            </div>

            <section className="bg-yellow-950  pb-12">
                <div className="max-w-screen-2xl ms-auto flex">
                    
                    <div className="m-auto text-white">
                        <img src={one} property="true" className="ml-28 w-5/12 first-first-img" />
                        <h1 className="text-center mt-8 text-2xl ">No minimum order</h1>
                        <p className="text-center mt-4 text-xl">Order in for yourself or for the group, <br />with no restrictions on order value. </p>
                    </div>
                    <div className="vertical"></div>
                    <div className="m-auto text-white">
                        <img src={two} property="true" className="ml-28 w-5/12 first-first-img" />
                        <h1 className="text-center mt-8 text-2xl ">Live Order Tracking</h1>
                        <p className="text-center mt-4 text-xl">Know where your order is all times,<br/>from the restaurants to your doorstep</p>
                    </div>
                    <div className="vertical"></div>
                    <div className="m-auto text-white first-third-section">
                        <img src={three} property="true" className="ml-28 w-5/12 first-first-img" />
                        <h1 className="text-center mt-8 text-2xl">Lightning-Fast Delivery</h1>
                        <p className="text-center mt-4 text-xl">Experience superfast delivery for food <br /> delivered fresh & on time</p>
                    </div>
              
             </div>
            </section>

            <section className="flex justify-center flex-wrap">
                <div className="pt-11 rest pocket">
                    <h1 className="text-4xl font-bold"> Restraurant in your pocket</h1>
                    <p className="mt-8 text-xl text-gray-500"> Order from your favourite restraurant & track <br/> on the go.With the all-new Swiggy app.</p>
                    <div className="flex bg-white mt-11 apple-goole-btn">
                        <img src={apple} property="true" className='mt-5' />
                        <img src={google} property="true" className='' />
                    </div>
                </div>

                <div className="flex justify-center flex-wrap up-low-btn">
                    <img src={up} property="true" className='' />
                    <img src={low} property="true" className='mt-20' />
                </div>
            </section>
            <Footer/>
           
        </>
        
    );
}

export default First;
