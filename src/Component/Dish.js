import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cakes from '../images/Cakes.jpeg'
import Chinese from '../images/Chinese.webp'
import Chole_Bature from '../images/Chole_Bature.webp'
import Dhokla from '../images/Dhokla.jpeg'
import Kachori from '../images/Kachori.jpeg'
import North_Indian_4 from '../images/North_Indian_4.webp'
import Pakodas from '../images/Pakodas.jpeg'
import Pasta from '../images/Pasta.jpeg'
import Pav_Bhaji from '../images/Pav_Bhaji.webp'
import Pure_Veg from '../images/Pure_Veg.jpeg'
import Sandwich from '../images/Sandwich.jpeg'
import Shakes from '../images/Shakes.webp'
import './Dish.css';


// import './Crausel.css';

function Dish() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div>
            <div>
                <h1 className=' best-offer p-10  ml-36 font-bold text-5 text-3xl '>What's on your mind ?</h1>
            </div>
            <div className=' Carousel w-11/12 absolute right-0 container'>
            
            <Carousel responsive={responsive} className='w-4/4 dishes'>
                <div>
                    <img src={Cakes} />

                </div>
                <div>
                    <img src={Chinese} />

                </div>
                <div>
                    <img src={Chole_Bature} />

                </div>
                <div>
                    <img src={Dhokla} />

                </div>
                <div>
                    <img src={Kachori} />

                </div>
                <div>
                    <img src={North_Indian_4} />

                </div>
                <div>
                    <img src={Pakodas} />

                </div>
                <div>
                    <img src={Pasta} />

                </div>
                <div>
                    <img src={Pav_Bhaji} />

                </div>
                <div>
                    <img src={Pure_Veg} />

                </div>
                <div>
                    <img src={Shakes} />

                </div>
                <div>
                    <img src={Sandwich} />

                </div>
            </Carousel>
        </div>
        </div>

    )
}

export default Dish