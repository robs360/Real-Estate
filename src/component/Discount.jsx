import React from "react";
import animate4 from '../assets/images/animate4.jpg'
import discount from '../assets/images/discount.png'
import json from '../assets/images/json6.jpeg'
import room from '../assets/images/room.jpeg'
const Discount=()=>{
    return(
        <div className="mt-16 w-[98%] mx-auto">
             <div className="bg-blue-900 p-2 rounded-md w-[94%] mx-auto">
             <h1 className="text-white text-3xl text-center
                 font-semibold">Discounted Place</h1>
                 <p className="text-white text-[17px] text-center
                 font-medium mt-3">Currently, flat price in Dhaka starts
                  from TK 38,00,000 which is 950 square feet in size 
                  and generally in used condition. </p>
             </div>

             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3">
                    <div className="bg-white rounded-md w-[320px] mx-auto p-2 shadow-lg">
                        <img className="w-[300px] h-[320px] rounded-lg"
                         src={animate4} alt="" srcset="" />
                         <h1 className="text-xl font-semibold text-center">
                            chikago Vacation</h1>
                            <p className="text-[17px] mt-3">
                                The city of Chicago is located in Illinois</p>
                        <img src={discount} className="w-[60px] h-[60px] mx-auto" alt="" srcset="" />
                    </div>
                    <div className="bg-white rounded-md w-[320px] mx-auto p-2 shadow-lg">
                        <img className="w-[300px] h-[320px] rounded-lg"
                         src={room} alt="" srcset="" />
                         <h1 className="text-xl font-semibold text-center">
                            Luxury Room</h1>
                            <p className="text-[17px] mt-3">
                                The city of Chicago is located in Illinois</p>
                        <img src={discount} className="w-[60px] h-[60px] mx-auto" alt="" srcset="" />
                    </div>
                    <div className="bg-white rounded-md w-[320px] mx-auto p-2 shadow-lg">
                        <img className="w-[300px] h-[320px] rounded-lg"
                         src={json} alt="" srcset="" />
                         <h1 className="text-xl font-semibold text-center">
                           Guatemala Vacation </h1>
                            <p className="text-[17px] mt-3">
                                The city of Chicago is located in Illinois</p>
                        <img src={discount} className="w-[60px] h-[60px] mx-auto" alt="" srcset="" />
                    </div>
             </div>
        </div>
    )
}
export default Discount