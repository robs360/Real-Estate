import React, { useEffect, useState } from "react";
import JsonData from "./jsondata";

const JsonHolder=()=>{
    const [info,setInfo]=useState([]);
    useEffect(()=>{
           fetch('/blog.json')
           .then(res=>res.json())
           .then(data=>setInfo(data))
    },[])
    console.log(info)
    return(
        <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 mx-auto mt-20 gap-16">
             {
                info.map(item=><JsonData item={item}></JsonData>)
             }
        </div>
    )
}
export default JsonHolder