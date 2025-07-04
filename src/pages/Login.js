import Template from "../components/Template";
import loginImage from '../assets/login.png';


function Login(props) {

    function intermediator1(data) {
        props.setIsLoggedIn(data);
    }


    return (
        <Template
            title='Welcome Back'
            desc1='Build skills for today, tomorrow, and beyond.'
            desc2='Education to future—proof your career.'
            image={loginImage}
            formtype='login'
            intermediator1={intermediator1}
        />
    );
};

export default Login;