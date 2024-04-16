import React from "react";
import bannerImage from "../assets/images/banner.jpg";
import Slider from "./slider";
import JsonHolder from "./jsonHolder";
import Footer from "./footer";
import Map from "./Map";
import animte4 from '../assets/images/animate4.jpg'
import 'animate.css';
import Discount from "./Discount";
const Home = () => {
    // this is banner style

    const subStyle = {
        backgroundImage: `url(${animte4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '94%',
        height: '100vh',
    };
    const bannerStyle = {

        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    }
    return (

        <div>
           
            <div className="w-[95%] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end" style={bannerStyle}>

                    <div className="ml-3 p-3 bg-blue-900" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <h1 className="text-2xl text-white md:text-4xl font-medium">
                            Choose your best like
                            <br />and express your individuality</h1>
                        <p className="text-white font-medium text-[18px]">
                            Any property used for residential purposes.
                            Examples include single-family homes, condos, cooperatives,
                            <br />
                            duplexes, townhouses, and multifamily residences.</p>

                    </div>
                    <div className="w-[280px] md:w-[320px]">
                        <Slider></Slider>
                    </div>

                </div>

               
                <JsonHolder></JsonHolder>
                 
                <Discount></Discount>

                <div className="mt-10">
                     <Map></Map>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Home