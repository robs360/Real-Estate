import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import img from '../assets/images/img.jpeg'
const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-[#ffffff] mx-auto flex w-[95%] md:w-[80%] justify-evenly flex-col md:flex-row">
            <div>
                <img src={user?.photoURL}
                    className="w-[100px] h-[100px] rounded-[50%] mx-auto" alt="" srcset="" />
                <h1 className="text-xl font-medium pt-3 border-gray-500 pb-3">Name: {user?.displayName}</h1>
                <h1 className="text-xl font-medium pt-3 border-t-2 border-gray-500 pb-3">Email: {user?.email}</h1>

                <h1 className="text-xl font-medium border-t-2 pt-3 border-gray-500">Services_Provider: {user?.providerId}</h1>
            </div>
            <img src={img} className="w-[350px] h-[500px]" alt="" srcset="" />
        </div>
    )
}

export default Profile