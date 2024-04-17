import React from "react";
import sec from '../assets/images/regis.jpg';
import { Helmet } from "react-helmet-async";

const Register = () => {
    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '94%',
        height: '80vh',
    };
   const handleSubmit=(e)=>{
    e.preventDefault();
       const Name=e.target.name.value;
       const Email=e.target.email.value;
       const photo=e.target.photo.value;
       const Password=e.target.password.value;
       console.log(Name,' ',Email,' ',photo,' ')
   }
    return (
        <div className="w-[95%] mx-auto" style={subStyle}>
            <Helmet>
                <title> Register</title>
            </Helmet>
            <h1 className="text-5xl text-blue-900 font-semibold text-center mt-5 mb-5">
                Register Here
            </h1>
            <div className="bg-[#ffffff80] w-[360px] md:w-[540px] mx-auto rounded-md p-4">
                <form onSubmit={handleSubmit}>

                    <input type="text"  name="name" placeholder="Name" className="input input-bordered mb-3 w-full" />
                    <input type="email" name="email"  placeholder="Email" className="input input-bordered mb-3 w-full" />
                    <input type="text"  name="photo" placeholder="Photo Url" className="input input-bordered mb-3 w-full" />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered mb-3 w-full" />
                    <button type="submit" className="btn glass text-xl font-semibold text-center w-full">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register
