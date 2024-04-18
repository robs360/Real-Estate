import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Update = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="w-[100%]">

            <div className="w-[96%] mx-auto">
                <div className="w-full bg-blue-900 mx-auto">
                    <img className="w-[80px] h-[80px] mx-auto rounded-[50%] mt-2 mb-2" src={user?.photoURL} alt="" srcset="" />
                </div>
                <div className="w-[320px] mx-auto">
                    <details className="dropdown mx-auto">
                        <summary className="m-1 btn">Dashboard</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>{user?.displayName}</a></li>
                            <li><a>Male</a></li>
                            <li><a>Devloper of Web</a></li>
                        </ul>
                    </details>
                    <details className="dropdown mx-auto">
                        <summary className="m-1 btn">Acount Details</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Vulnerable</a></li>
                            <li><a>Will destroy</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="w-[350px] md:w-[420px] mx-auto">
                <form>

                    <input type="text" name="name" placeholder="Name"
                     className="input input-bordered mb-3 w-full " />
                    <input type="text" name="photo"  placeholder="Photo Url" 
                    className="input input-bordered mb-3 w-full "/>
                    <button type="submit" className="bg-blue-900 btn glass text-xl font-semibold text-center w-full">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Update