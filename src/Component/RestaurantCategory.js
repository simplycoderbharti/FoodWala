import React from "react";
import "./ResCategory.css";
import { CDN_URL, Menu_API } from "./utills/constant";
import { useDispatch } from "react-redux";
import { addItem } from "./utills/cartSlice";

function RestaurantCategory({ menu }) {
    console.log(menu)
    const dispatch = useDispatch();
    

    return (
        <div className="mx-auto my-4 text-lg">

    
            {menu.itemCards ? (
                
                <>
                    {menu?.itemCards?.map((item) => (
                        <div key={item.card.info.id} className="res-category md:flex relative">
                            <div className="md:w-2/3 mt-12 name-price">
                                <div>
                                    <span className="font-bold">{item.card.info.name}</span>
                                    <span>
                                        {" "}
                                        - ₹{" "}
                                        {item.card.info.defaultPrice / 100 || item.card.info.price / 100}{" "}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs description">{item.card.info.description}</p>
                                    <p className="text-xs">{item.card.info.itemAttribute.vegClassifier}</p>
                                </div>
                            </div>
                            <div className="md:w-1/3 md:flex md:flex-col md:items-center img-container">
                               
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    className="w-8/12 md:max-w-40 p-4 object-cover md:object-contain"
                                    alt={item.card.info.name}
                                /> 
                                <div className="mt-4 md:mt-0 absolute bottom-0  right-0 add-btn">
                                    <button
                                        className="bg-black text-white p-2 shadow-lg w-full md:w-24 res-btn"
                                        onClick={() => dispatch(addItem(item))}
                                    >
                                        add+
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    {menu.categories?.map((item) => (
                        <div key={item.title}>
                            <h2 className="font-bold mt-10">{item.title}</h2>
                            {item.itemCards.map((subitem) => (
                                <div key={subitem.card.info.id} className="res-category md:flex relative">
                                    <div className="md:w-2/3 mt-12 name-price">
                                        <div>
                                            <span className="font-bold">{subitem.card.info.name}</span>
                                            <span>
                                                {" "}
                                                - ₹{" "}
                                                {subitem.card.info.defaultPrice / 100 ||
                                                    subitem.card.info.price / 100}{" "}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-xs description">{subitem.card.info.description}</p>
                                            <p className="text-xs">{subitem.card.info.itemAttribute.vegClassifier}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 md:flex md:flex-col md:items-center img-container">
                                    <img
                                            src={CDN_URL + subitem.card.info.imageId}
                                            className="w-8/12 md:max-w-40 p-4 object-cover md:object-contain"
                                            alt={subitem.card.info.name}
                                        />
                                        
                                    
                                        <div className="mt-4 md:mt-0 absolute bottom-0 add-btn right-0">
                                            <button
                                                className="bg-black text-white p-2 shadow-lg w-full md:w-24 res-btn"
                                                onClick={() => dispatch(addItem(subitem))}
                                            >
                                                add+
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default RestaurantCategory;




