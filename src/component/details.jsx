import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const info = useLoaderData();
    const { id } = useParams();
    console.log(id);
    const singleInfo = info.find(item => item.id == id);
    console.log(singleInfo);
    return (
        <div className="w-[95%] mx-auto mt-16">
            <div className="w-full min-h-[80vh] flex md:flex-row flex-col space-x-3 md:space-x-6 justify-center mt-11">
                <div className=" bg-gray-100 rounded-lg px-2 md:px-6 py-4" data-aos="flip-left">
                    <img src={singleInfo.relevant_image}
                        className="w-[320px] h-[330px] lg:w-[360px] lg:h-[380px] mx-auto"
                        alt="" srcset="" />
                </div>
                <div className="p-1 md:p-2 space-y-5 w-[98%] md:w-[50%]">
                    <div className="border-b-2 border-gray-400 pb-8">
                        <h1 className="text-3xl font-medium">{singleInfo.segment_name}</h1>
                      <div className="flex flex-col mt-4 md:flex-row justify-between">
                         <h1 className="text-gray-500 text-[18px] font-semibold">For: {singleInfo.status}</h1>
                         <h1 className="text-gray-500 text-[18px] font-semibold">
                            Location: {singleInfo.location}</h1>
                      </div>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-400 pb-8 mt-6">
                        <h1 className="text-gray-500 text-xl font-medium">Area:{singleInfo.area} sqft</h1>
                        <h1 className="text-gray-500 text-xl font-medium">Price:{singleInfo.price}$</h1>
                    </div>
                    <div>
                        <h1 className="text-[18px]"><span className="text-xl font-medium">Title:</span>{singleInfo.estate_title}</h1>
                    </div>
                    <div className="border-b-2 border-black pb-8">
                        <h1 className="text-center text-2xl font-semibold">Facilities</h1>
                        <h1 className="text-[18px] font-medium">{singleInfo.facilities[0]}</h1>
                        <h1 className="text-[18px] font-medium">{singleInfo.facilities[1]}</h1>
                        <h1 className="text-[18px] font-medium">{singleInfo.facilities[2]}</h1>
                    </div>
                    <div className="border-b-2 border-black pb-8">
                        <h1 className="text-[18px]"><span className="text-xl font-medium">Description:</span>{singleInfo.description}</h1>
                    </div>
                    <div className="border-b-2 border-black pb-8">
                        <h1 className="text-[18px]"><span className="text-xl font-medium">Description:</span>{singleInfo.description}</h1>
                    </div>

                  <div className="w-[70%] mx-auto">
                  <button className="p-2 bg-green-400 
                  text-xl w-full rounded-md font-semibold">
                        Contact For Buy</button>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Details