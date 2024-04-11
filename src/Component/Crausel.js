import React from 'react'
import './Dish.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c1 from '../images/c1.webp';
import c2 from '../images/c2.webp';
import c3 from '../images/c3.webp';
import c4 from '../images/c4.webp';
// import './Crausel.css';

function Crausel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div className=' carousel-box'>
            <div >
                <h1 className=' best-offer p-10 mt-10 ml-36 font-bold text-5 text-3xl '>Best Offers for you</h1>
          </div>     
            <div className=' w-10/12 slider absolute right-0 container Carousel '>
            <Carousel responsive={responsive} className='mb-20'>
                <div className='ml-5'>
                    <img src={c1}/>
                </div>
                <div className='ml-5'>
                    <img src={c2} />
                </div>
                <div className='ml-5'>
                    <img src={c3} />
                </div>
                <div className='ml-5'>
                    <img src={c4} />
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Crausel
