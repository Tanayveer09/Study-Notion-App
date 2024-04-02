import Template from "../components/Template";
import SignUpImg from "../assets/signup.png"

function SignUp(props){
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className=" bg-richblack-900">
            <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                formType="signUpForm"
                formImg={SignUpImg}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    );
}


export default SignUp;