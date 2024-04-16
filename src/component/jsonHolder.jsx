import React, { useEffect, useState } from "react";
import JsonData from "./jsondata";

const JsonHolder = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    console.log(info)
    return (
        
        <div className="mt-10">
            <div className="w-[95%] mx-auto rounded-md bg-blue-900 p-3">
                <h1 className="text-white text-3xl text-center
         font-semibold">Let's Choose your Best</h1>
                <p className="text-white text-[17px] text-center
                 font-medium mt-3">It's the idea that you should budget a minimum
                    of 30% of your gross monthly income

                    for housing costs, and it's practically a personal finance gospel</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 mx-auto mt-20 gap-16">
                {
                    info.map(item => <JsonData item={item}></JsonData>)
                }
            </div>
        </div>
    )
}
export default JsonHolder