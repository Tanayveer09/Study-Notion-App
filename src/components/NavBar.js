
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";
import Login from "../pages/Login";

function NavBar(props){
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    const navigate=useNavigate();
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            {/* logo */}
            <Link to="/">
                <img src={logo}/>
            </Link>

            {/* 3 links */}
            <nav>
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* 4 buttons */}

            <div className="flex items-center gap-x-4">
                {   !isLoggedIn &&
                    <Link to="/logIn">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700">
                            Log In 
                        </button>
                    </Link>
                }

                {   !isLoggedIn &&
                    <Link to="/signUp">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700">
                            Sign Up 
                        </button>
                    </Link>
                }   

                {   isLoggedIn &&
                    <Link to="/logOut">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }} className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700">
                            Log Out 
                        </button>
                    </Link>
                }

                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700">
                            Dashboard 
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}


export default NavBar;