import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {FcGoogle} from "react-icons/fc"


function Template({title, desc1, desc2, formType, setIsLoggedIn, formImg}){
    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
            {/* form wala div */}
            <div className="w-11/12 max-w-[450px]">
                {/* title */}
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

                {/* 2 line description */}
                <div className="text-[1.25rem] leading[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 itlic">{desc2}</span>
                </div>

                {/* form */}
                {
                    formType==="logInForm" ?
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                {/* or wali line */}
                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-700"/>
                    <p className="text-richblack-700 font-medium leading[1.375rem]">
                        OR
                    </p>
                    <div className="h-[1px] w-full bg-richblack-700"/>
                </div>

                {/* google sign in button */}
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    Sign In with Google
                </button>
            </div>

            {/* image wala div */}
            <div className="relative w-11/12 max-w-[450px]">
                <img 
                    src={frameImage}
                    height={558}
                    width={504}
                    loading="lazy"
                />
                <img 
                    src={formImg}
                    height={558}
                    width={504}
                    loading="lazy"
                    className="absolute -top-4 right-4"
                />
            </div>
        </div>
    );

}



export default Template;