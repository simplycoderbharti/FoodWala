import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDN_URL, Menu_API } from './utills/constant';
import { useDispatch } from 'react-redux';
import { addItem } from './utills/cartSlice';
import RestaurantCategory from './RestaurantCategory';
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
    const dispatch = useDispatch();
    const [resinfo, setResinfo] = useState(null);
    const [menu, setMenu] = useState([]);
    const { resId } = useParams();
    
  
    // console.log(Menu)
    const fetchResMenu = async () => {
        // const MenuData = await fetch(Menu_API + resId);
        // const json = await MenuData.json();
        
        // console.log(json)
        
        const Menu = require("./utills/Menu_Api.json")

console.log("res id",resId)
        const json = Menu.find((product)=>{


            console.log(product?.cards[2]?.card?.card?.info?.id )
            return  product?.cards[2]?.card?.card?.info?.id == resId
        })

     

    

 console.log(json)
        


        const Rinfo =  json?.cards[2]?.card?.card?.info 
     ;
        setResinfo(Rinfo)
        console.log(Rinfo)
        


        const NewMenu = (json?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || json?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || json?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
       setMenu(NewMenu);
        // console.log(NewMenu)
        // json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    
        
    };
   

    useEffect(() => {
        fetchResMenu();
    }, []);

    if (resinfo === null) return <ShimmerMenu />;

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className='text-center bg-white'>
            <div className='flex justify-center flex-col md:flex-row p-3 mt-5 m-auto res-menu-top w-full md:w-6/12'>
                <div className='text-start md:w-6/12'>
                    <h1 className='font-bold text-2xl'>{resinfo.name}</h1>
                    <h3 className='mt-1'>{resinfo.cuisines.join(',')}</h3>
                </div>

                <div className='flex flex-col justify-evenly border mt-3 p-3'>
                    <h3 className='mb-2'>⭐ {resinfo.avgRating}</h3>
                    <hr className='w-full text-gray-300 my-2' />
                    <h3 className='mt-2'>{resinfo.costForTwoMessage}</h3>
                </div>
            </div>

            <hr className='w-10/12 md:w-6/12 text-gray-300 m-auto mt-4' />

            <RestaurantCategory menu={menu}  />
        </div>
    );
};

export default RestaurantMenu;
