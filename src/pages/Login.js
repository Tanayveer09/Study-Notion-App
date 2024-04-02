import Template from "../components/Template";

import loginImg from "../assets/login.png"


function Login(props){
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formType="logInForm"
            formImg={loginImg}
            setIsLoggedIn={setIsLoggedIn}

        />
    );
}


export default Login;