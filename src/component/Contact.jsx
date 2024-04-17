import React from "react";
import sec from '../assets/images/conta.jpg';
const Contact = () => {

    const subStyle = {
        backgroundImage: `url(${sec})`,
        backgroundSize: 'cover',
        
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        width: '94%',
        minHeight: '60vh'
    };
    return (
        <div className="mx-auto flex items-center pl-6" style={subStyle}>
            <div className="rounded-md w-[350px] p-2 h-[400px] md:w-[470px] bg-[#ffffff80]">
                <form>
                     <textarea className="w-full h-[200px]" placeholder="Type our opinion">

                     </textarea>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered mb-3 w-full " />
                    <input type="number" name="number" placeholder="Password" className="input input-bordered mb-3 w-full" />
                    <button type="submit" className="btn glass text-xl font-semibold text-center w-full">Submit</button>
                </form>
            </div>

        </div>
    )
}
export default Contact