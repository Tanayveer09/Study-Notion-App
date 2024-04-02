import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";

import toast from "react-hot-toast";

function LoginForm(props){
    let setIsLoggedIn =props.setIsLoggedIn;

    const[formData, setFormData]=useState(
        {
            email:'', 
            password:''
        }
    )

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    const [isVisible, setIsVisible]=useState(false);

    const navigate=useNavigate();
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        
        
    }

    return(
        <form onSubmit={submitHandler}
        className=" flex flex-col w-full gap-y-4 mt-6">
            {/* email */}
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email id"
                    onChange={changeHandler}
                    value={formData.email}
                    className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "
                />
            </label>

            {/* password */}
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                   Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type={isVisible ? ("text"): ("password")}
                    name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    value={formData.password}
                    className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "
                />

                <span onClick={()=>(setIsVisible((prev)=>(!prev)))}
                className="absolute right-3 top-[38px] cursor-pointer">
                    {
                        isVisible ?
                        (<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>) :
                        (<AiOutlineEye    fontSize={24} fill= "#AFB2BF"/>)
                    }
                </span>
                <Link to="#" className="text-xs mt-1 text-blue-100 ml-[75%] ">
                    Forgot Password
                </Link>
            </label>      

            <br></br>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
                Sign In
            </button>    
   
        </form>
    );
}

export default LoginForm;