import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function SignUpForm(props){
        let setIsLoggedIn=props.setIsLoggedIn
    
        const[formData, setFormData]=useState(
            {
                email:'', 
                password:'',
                confirmPassword:'',
                firstName:'',
                lastName:'',
                
            }
        )

        function changeHandler(event){
            setFormData((prevData)=>({
                ...prevData,
                [event.target.name]:event.target.value
            }))
        }

        const [isVisible, setIsVisible]=useState(false);
        const [isVisible2, setIsVisible2]=useState(false);

        const navigate=useNavigate();
        function submitHandler(event){
            event.preventDefault();
            if(formData.password!=formData.confirmPassword){
                toast.error("Passwords Dont Match");
            }
            else{
                navigate("/dashboard");
                toast.success("Account Created and Logged In Succesfully");
                setIsLoggedIn(true);
            }
        }

        const [accountType, setAccountType]=useState("");

        return(
            <form onSubmit={submitHandler}>

                {/* 2 tabs */}
                <div className="flex bg-richblack-800 gap-x-1 p-1 my-6 rounded-full max-w-max ">
                    <button 
                    className={`${accountType==="Student" ? 
                    "bg-richblack-900 text-richblack-5 " :
                    "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccountType("Student")}>
                        Student 
                    </button>
                    <button 
                    className={`${accountType==="Instructor" ? 
                    "bg-richblack-900 text-richblack-5 " :
                    "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccountType("Instructor")}>
                        Instructor
                    </button>
                </div>

                {/* first name and last name wali div */}
                <div className="flex justify-between">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            placeholder="Enter First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "
                        />
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "
                        />
                    </label>
                </div>

                {/* email address ki div */}
                <div className="w-full mt-4">
                    <label>
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
                </div>

                {/* password and confirm password ki div */}
                <div className="flex justify-between w-full mt-4">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={isVisible ? ("text"): ("password")}
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder="Enter Password"
                            className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "

                        />
                        <span onClick={()=>(setIsVisible((prev)=>(!prev)))}
                        className="absolute right-3 top-[38px] cursor-pointer">
                            {isVisible ?
                            (<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>) :
                            (<AiOutlineEye   fontSize={24} fill= "#AFB2BF"/>)
                            }
                        </span>
                    </label>
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                           Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={isVisible2 ? ("text"): ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            placeholder="Confirm Password"
                            className="w-full text-richblack-5 p-[12px] bg-richblack-800 rounded-[0.5rem] "

                        />
                        <span onClick={()=>(setIsVisible2((prev)=>(!prev)))}
                        className="absolute right-3 top-[38px] cursor-pointer">
                            {isVisible2 ?
                            (<IoEyeOffOutline fontSize={24} fill='#AFB2BF'/>):
                            (<AiOutlineEye   fontSize={24} fill= "#AFB2BF"/>)
                            }
                        </span>
                    </label>
                </div>

                {/* create account wala button */}
                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] w-full mt-10">
                    Create Account
                </button>
            </form>
        );

}
export default SignUpForm;