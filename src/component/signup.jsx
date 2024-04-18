import React, { useContext, useState } from "react";
import sec from '../assets/images/regis.jpg'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import eye from '../assets/images/eye.png'
import hidden from '../assets/images/hidden.png'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import app from "./firebase.config";
const auth=getAuth(app);
const Signup = () => {
    const { createUser, setUrl, url,user } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [Success, setSuccess] = useState('')
    const [show, setShow] = useState(false);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('')
     
     
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const photo = e.target.photo.value;
        const Password = e.target.password.value;
        if (!Name || !Email || !photo || !Password) {
            setError('Please fill all fields');
            return;
        }
       else if (Password.length < 6) {
            setError('Password should be gatherthen 6 len')
            return
        }
        else if (!/[A-Z]/.test(Password)) {
            setError('Password should be contain atleast one Uppercase letter')
        }
        else if (!/[a-z]/.test(Password)) {
            setError('Password should be contain atleast one lowercase letter')
        }
        setUrl(photo);
        console.log(url);
        console.log(Name, ' ', Email, ' ', photo, ' ', Password)
        createUser(Email, Password)
            .then(res => {
                console.log(res.user)
                setSuccess('Register done Successfully')

              
               alert('Wow!you are in here')
                updateProfile(auth.currentUser, {
                    displayName:Name, photoURL: photo
                  }).then(() => {
                      console.log('yes')
                  }).catch((error) => {
                    console.log('No')
                  });
            })
            .catch(error => {
                console.error(error)
                setError('Something Went Wrong')

                alert('something went worng')
            })
    }


    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '95%',
        height: '80vh',
    };


    return (
        <div className="w-[95%] mx-auto" style={subStyle}>
            
            <Helmet>
                <title> Register</title>
            </Helmet>
            <h1 className="text-5xl text-blue-900 font-semibold text-center mt-5 mb-5">
                Register Here
            </h1>
            <div className="relative bg-[#ffffff80] w-[360px] md:w-[540px] mx-auto rounded-md p-4">
                <form onSubmit={handleSubmit}>

                    <input type="text" name="name" placeholder="Name" className="input input-bordered mb-3 w-full" />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-full" />
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered mb-3 w-full" />
                    <div className="w-full relative">
                        <input type={show ? 'text' : "password"} name="password" placeholder="Password" className="input input-bordered mb-3 w-full" />

                    </div>
                    <button type="submit" className="btn glass text-xl glass font-semibold text-center w-full">Register
                    
                    </button>
                     
                     
                </form>

                <span className="absolute top-[208px] right-6">
                    {show ? <button type="button" onClick={() => {
                        setShow(false)
                    }}>
                        <img className="w-[20px] h-[20px]"
                            src={eye} alt="" srcset="" />
                    </button>
                        : <button type="button" onClick={() => {
                            setShow(true)
                        }}>
                            <img className="w-[20px] h-[20px]"
                                src={hidden} alt="" srcset="" />
                        </button>}
                </span>
                {
                    error ? <h1 className="text-red-500">{error}</h1>
                        : <h1 className="text-green-400">{Success}</h1>
                }

                <Link to={'/log'}>
                    <div className="w-full flex justify-center">
                        <button className="text-center mx-auto text-[18px] font-semibold">
                            Already have an account?</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Signup