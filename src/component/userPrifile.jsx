import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import img from '../assets/images/img.jpeg'
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [status, setStatus] = useState(false);
    return (
        <div>
            <div className="bg-[#ffffff] mx-auto item-center flex w-[95%] md:w-[80%] justify-evenly flex-col md:flex-row">
                <div>
                    <img src={user?.photoURL}
                        className="w-[100px] h-[100px] rounded-[50%] mx-auto" alt="" srcset="" />
                    <h1 className="text-xl font-medium pt-3 border-gray-500 pb-3">Name: {user?.displayName}</h1>
                    <h1 className="text-xl font-medium pt-3 border-t-2 border-gray-500 pb-3">Email: {user?.email}</h1>

                    <h1 className="text-xl font-medium border-t-2 pt-3 border-gray-500">Services_Provider: {user?.providerId}</h1>
                    {
                        status ? (<div>
                            <h1 className="text-xl font-medium border-t-2 pt-3 border-gray-500">Profession:Student and Deploper (learning) </h1>
                            <h1 className="text-xl font-medium border-t-2 pt-3 border-gray-500">Hobby:Playing Cricket and Fighting and Travelling</h1>
                            <h1 className="text-xl font-medium border-t-2 pt-3 border-gray-500">Skill:Nothing</h1>
                        </div>) : (<div></div>)
                    }

                    {status ? <div></div> : <button onClick={() => {
                        setStatus(true)
                    }} className="btn glass bg-blue-900 text-xl font-semibold mt-3">See more</button>}


                </div>
                <img src={img} className="w-[350px]" alt="" srcset="" />
            </div>

            <h1 className="text-xl font-semibold text-center mt-10">Good Bye</h1>
        </div>
    )
}

export default Profile