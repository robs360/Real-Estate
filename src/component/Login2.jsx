import React, { useContext, useState } from "react";
import sec from '../assets/images/login.jpg';
import google from '../assets/images/google.png'
import git from '../assets/images/github.png'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

import eye from '../assets/images/eye.png'
import hidden from '../assets/images/hidden.png'
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, googleSignin, gitSignin, url, setUrl } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location)
    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '94%',

    };
    const googleClicked = () => {
        googleSignin()
            .then(res => {
                console.log(res.user)
                setUrl(res.user.photoURL)
                console.log(url)
            })
            .catch(error => console.error(error))
    }
    const gitClicked = () => {
        gitSignin()
            .then(res => {
                console.log(res.user)

            })
            .catch(error => {
                console.error(error)

            })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, ' ', Password)
        signIn(Email, Password)
            .then(res => {
                console.log(res.user)
                alert('Wow!you are in here')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                alert('something went worng')
            })
    }

    return (
        <div className="w-[95%] mx-auto min-h-[80vh]" style={subStyle}>

            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className="text-5xl text-blue-900 font-semibold text-center mt-5 mb-5">
                Login Here</h1>
            <div className="relative bg-[#ffffffcc] w-[360px]
                 md:w-[540px] mx-auto rounded-md p-4">

                <form onSubmit={onSubmit}>

                    <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-full " />
                    <div className="w-full relative">
                        <input type={show ? 'text' : "password"} name="password" placeholder="Password" className="input input-bordered mb-3 w-full" />

                    </div>
                    <button type="submit" className="btn glass text-xl font-semibold text-center w-full">Login</button>
                </form>
                <span className="absolute top-[90px] right-5">
                    {show ? <button onClick={() => {
                        setShow(false)
                    }}>
                        <img className="w-[20px] h-[20px]"
                            src={eye} alt="" srcset="" />
                    </button>
                        : <button onClick={() => {
                            setShow(true)
                        }}>
                            <img className="w-[20px] h-[20px]"
                                src={hidden} alt="" srcset="" />
                        </button>}
                </span>
                <div className="w-full mt-5 border-t-2 border-gray-500">
                    <h1 className="text-xl text-center">Login With</h1>
                    <div className="w-full mt-3 flex justify-evenly">
                        <button onClick={googleClicked}>
                            <img src={google} alt="" srcset="" className="w-[50px] h-[50px]" />
                            <h1 className="text-center text-xl">Google</h1>
                        </button>
                        <button onClick={gitClicked}>
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