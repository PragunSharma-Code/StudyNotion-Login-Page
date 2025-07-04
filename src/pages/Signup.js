import Template from "../components/Template";
import signUpImage from '../assets/signup.png';

function Signup(props) {
    function intermediator1(data) {
        props.setIsLoggedIn(data);
    }

    return (
        <Template
            title="Join the millions learning to code  with StudyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond. "
            desc2='Education to future—proof your career.'
            image={signUpImage}
            formtype='signup'
            intermediator1={intermediator1}


        />
    );
};

export default Signup;