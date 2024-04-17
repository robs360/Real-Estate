import React, { useContext } from "react";
import sec from '../assets/images/login.jpg';
import google from '../assets/images/google.png'
import git from '../assets/images/github.png'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location=useLocation()
    const navigate=useNavigate();
    console.log(location)
    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '94%',
        minheight: '80vh',
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        const Email=e.target.email.value;
        const Password=e.target.password.value;
        console.log(Email,' ',Password)
        signIn(Email,Password)
        .then(res=>{console.log(res.user)
           navigate(location?.state? location.state:'/')
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className="w-[95%] mx-auto" style={subStyle}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className="text-5xl text-blue-900 font-semibold text-center mt-5 mb-5">
                Login Here</h1>
            <div className="bg-[#ffffff80] w-[360px]
                 md:w-[540px] mx-auto rounded-md p-4">

                <form onSubmit={onSubmit}>

                    <input type="email"    name="email" placeholder="Email" className="input input-bordered mb-3 w-full " />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered mb-3 w-full" />
                    <button type="submit" className="btn glass text-xl font-semibold text-center w-full">Login</button>
                </form>
                <div className="w-full mt-5 border-t-2 border-gray-500">
                    <h1 className="text-xl text-center">Login With</h1>
                    <div className="w-full mt-3 flex justify-evenly">
                        <button>
                            <img src={google} alt="" srcset="" className="w-[50px] h-[50px]" />
                            <h1 className="text-center text-xl">Google</h1>
                        </button>
                        <button>
                            <img src={git} alt="" srcset="" className="w-[50px] h-[50px]" />
                            <h1 className="text-center text-xl">Github</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login