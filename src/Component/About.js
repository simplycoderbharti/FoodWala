import React, { Component } from "react";
import about from '../images/about.jpg'
import about2 from '../images/about2.png'
import Footer from "./Footer";

class About extends Component {
  
    render() {
        return (
            <>
                <h1 className="text-center bg-orange-400 text-white p-20 text-2xl">″Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h1>
                <img src={about} />

                <h1 className="text-5xl text-center mt-5">What’s In Store For The Future?</h1>
                <div className="flex mt-7">
                    <div className=" m-auto w-12/12 p-10">
                        <h1 className='ml-6 text-2xl font-bold'>Hello Foodies,</h1>
                        <p className="mt-7 text-xl ">As the proud owner of [Your Food Delivery Service], I am thrilled to share our exciting future plans with you. Our journey is fueled by a passion for delivering delightful culinary experiences right to your doorstep.</p>
                        <div className="mt-7 text-xl p-8">
                            <ol className="list-decimal">
                                <li className="mt-5"> <span className="font-bold">Expanded Menu:</span> Get ready for an even more diverse and mouth-watering menu. We're constantly exploring new flavors and dishes to satisfy your cravings.</li>
                                <li className="mt-5"><span className="font-bold">Efficient Delivery Network: </span> We are working on optimizing our delivery network to ensure faster and more reliable service. Expect quicker deliveries without compromising on the freshness of your favorite meals.</li>
                                <li className="mt-5"> <span className="font-bold">Specialized Cuisines:</span> Stay tuned for curated selections of specialized cuisines. Whether it's international delights or regional favorites, we aim to bring a world of flavors to your table.</li>
                                <li className="mt-5"> <span className="font-bold"> Enhanced User Experience: </span>We're investing in technology to make your online ordering experience seamless and enjoyable. Look forward to a user-friendly interface, personalized recommendations, and convenient payment options.</li>
                            </ol>
                        </div>

                        
                    </div>
                    
                    <div>
                        <img src={about2} />

                    </div>
                  
                </div>
                <div className="p-10">
                    <h1 className="font-bold">  Your Feedback Matters:</h1>
                    <p className="text-xl">We value your feedback and suggestions. Your insights help us grow and improve. Keep an eye out for surveys, contests, and opportunities to share your thoughts on our service.</p>

                    <p className="text-xl mt-5"> Thank you for being a part of our culinary adventure. The best is yet to come, and we can't wait to continue serving you with excellence.</p>

                    <p className="text-xl mt-5">  Stay hungry for joyous moments and delicious bites!</p>
                </div>
                <Footer/>
            </>
        )
    }
}

export default About;