import React from "react";
import reg from '../assets/images/reg.jpg';
const Register=()=>{
    const subStyle = {
        backgroundImage: `url(${reg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '94%',
        height: '100vh',
    };
    return(
        <div className="w-[95%] mx-auto" style={subStyle}>
             
        </div>
    )
}
export default Register