import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {

    const navigate = useNavigate();

    const [isPassWordVisible, setPasswordVisiblity] = useState(false);
    const [formData, setFormData] = useState({
        emaila: '',
        passwords: ''
    });

    function changeHandler(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function passWordVisiblityHandler() {
        setPasswordVisiblity(!isPassWordVisible);
    }


    function submitHandler() {
        console.log(formData);
        toast.success('Logged In Sucessfully!');
        navigate('/dashboard');
        props.setIsLoggedIn(true);
        
    }


    return (
        <form onSubmit={submitHandler} className="flex-col w-full gap-y-4 mt-6">
            <label htmlFor="emaila" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Email Address <sup className="text-pink-200">*</sup></label>
            <br />
            <input type="email" placeholder="Enter email address"
             id="emaila" required name="emaila" onChange={changeHandler} value={formData.emaila} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
            <br />
            <label htmlFor="passwords" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Password <sup className="text-pink-200">*</sup></label>
            <br />
            <div className="relative">
                <input type={(!isPassWordVisible) ? 'password' : 'text'} placeholder="Enter Password"
                 id="passwords" required name="passwords" onChange={changeHandler} value={formData.passwords} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
                <span onClick={passWordVisiblityHandler} className="absolute top-[14px] cursor-pointer right-5 ">
                    {(!isPassWordVisible) ? (<AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={22} fill="#AFB2BF" />)}
                </span>

            </div>
            <div className="text-xs mt-1 text-blue-100 max-w-max ml-auto"> Forgot Password</div>
            <br />
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] w-full focus:outline-none focus:ring-1 focus:ring-yellow-100">Sign In</button>

        </form>
    );
};

export default LoginForm;