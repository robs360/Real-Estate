import React from "react";
import bannerImage from "../assets/images/banner.jpg";
import Slider from "./slider";
import JsonHolder from "./jsonHolder";
import Footer from "./footer";

const Home = () => {
    // this is banner style
    const bannerStyle = {

        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    }
    return (
        <div className="w-[95%] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end" style={bannerStyle}>

                <div className=" ml-3 p-3 bg-blue-400">
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
            <Footer></Footer>
        </div>
    )
}
export default Home