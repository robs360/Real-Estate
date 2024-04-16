import React from "react";
import { Link } from "react-router-dom";

const JsonData = ({ item }) => {
    console.log(item)
    return (
        <div className="rounded-md bg-white shadow-xl
        flex flex-col flex-grow-1 p-3 w-[346px] mx-auto space-y-4">
            <img className="w-[320px] h-[340px] rounded-md"
                src={item.relevant_image} alt="" srcset="" />
            <div className="flex justify-between">
                <h1 className="text-xl font-medium">
                    {item.segment_name}</h1>
                <h1 className="text-xl font-medium">For:{item.status}</h1>
            </div>
            <h1>{item.estate_title}</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-medium">Area:{item.area} sqrft</h1>
                <h1 className="text-xl font-medium">Price:{item.price} $</h1>
            </div>
          <Link to={`/details/${item.id}`}>
          <button className="p-2 rounded-md text-xl font-medium bg-green-400">
                View Property</button>
          </Link>
        </div>
    )
}
export default JsonData