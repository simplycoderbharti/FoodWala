import React from "react";
import "./Rescard.css";
import Rescard, { withPromotedLabel } from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import About from "./About";
import { Link } from "react-router-dom";
import OnlineStatus from "./utills/OnlineStatus";
import Login from "./Login";
import Crausel from "./Crausel";
import Dish from "./Dish";
import offline from '../images/offline.png'
import {Main_API} from './utills/constant'


function Body() {
    const [ListOfRestraurant, setListOfRestraurant] = useState([]);
    const [filteredRestraurant, setFilteredRestraurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    



    const fetchdata = async () => {
        // const data = await fetch(
        //     Main_API
        // );

        // const json = await data.json();

        const json = require('./utills/Main_Api.json')

        

        const rawdata2 = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        const rawdata1 = await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        const rawdata3 = await json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        const newdata = (rawdata2 || rawdata1 || rawdata3)



        setListOfRestraurant(newdata);
        setFilteredRestraurant(newdata);
        newdata.forEach((item) => (item.info.quantity = 1));
        
    };

    
    useEffect(() => {
        fetchdata();
    }, []);

    const onlineStatus = OnlineStatus();

    if (onlineStatus === false)
        return (
            <div className="mt-12"> 
            <img src={require("../images/offline.png")} className="w-6/12 m-auto mt-9"/>
                <h1 className="m-auto font-bold text-center mt-5 text-2xl"> please check your Internet connection</h1>
            </div>
        );




    return ListOfRestraurant.length === 0 ? (
        <Shimmer />
    ) : (
        <section className="body">
            <div className="input-btn">
                <div className=" mt-10  flex justify-center m-auto  ">
                    <input
                        type="text"
                        className=" search-text border w-6/12 rounded-full h-12 absolute shadow-xl input-top"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn px-4   bg-orange-400 text-white font-bold relative  rounded-full "

                        onClick={() => {
                            const filteredRestraurants = ListOfRestraurant.filter((res) => {
                                return res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase());
                              
                            });
                            setListOfRestraurant(filteredRestraurants);
                    
                        }}
                    >
                        Search
                    </button>
                 
                </div>
                <div className="relative avgR-btn">
                    <button
                        className=" avgRating mt-1  mr-5 px-4 py-2 flex justify-center bg-orange-400 text-white font-bold rounded-lg h-10 absolute top-0 right-0 "
                        onClick={() => {
                            const filteredmenu = ListOfRestraurant.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setListOfRestraurant(filteredmenu);
                        }}
                    >
                        Top rated rastaurants
                    </button>
                </div>
                <Crausel />
            </div>
            <div className="dish">
                <Dish />
            </div>
            <div className="margin">
                <div className="border border-gray-300 mx-20 mb-10"></div>
                <div className="Rescontainer flex  justify-center  ">
                    {ListOfRestraurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={`/restaurants/${restaurant.info.id}`}
                        >
                            <Rescard menu={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Body;