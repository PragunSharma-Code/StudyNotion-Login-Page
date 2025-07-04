import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignupForm(props) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emaila: '',
        confirmPassword: '',
    });


    const [isCreatePassWordVisible, setCreatePasswordVisiblity] = useState(false);
    const [isConfirmPassWordVisible, setConfirmPasswordVisiblity] = useState(false);


    function CreatePassWordVisiblityHandler() {
        setCreatePasswordVisiblity(!isCreatePassWordVisible);
    }

    function ConfirmPassWordVisiblityHandler() {
        setConfirmPasswordVisiblity(!isConfirmPassWordVisible);
    }


    function submitHandler(event) {
        event.preventDefault();
        if (event.target.createPassword.value !== event.target.confirmPassword.value) {
            toast.error('Both field of the password should match!');
            return;

        } else {
            toast.success('Account Created');
            const finalData = {
                ...formData,
                accountType
            }
            console.log(finalData);

            navigate('/dashboard');
            props.setLoggedInStatus(true);
        }
    }


    function changeHandler(event) {
        setFormData((prevFromData) => {
            return {

                ...prevFromData,
                [event.target.name]: event.target.value
            }
        })
    }

    const [accountType, setAccountType] = useState('student');
    return (
        <div>

            {/* Student-Instructor Tab */}
            <div className="flex bg-richblack-800 p-1 gap-z-1 my-3 rounded-full max-w-max">
                <button onClick={() => { setAccountType('student') }}
                    className={` ${(accountType === 'student') ? 'bg-richblack-900 text-richblack-5' : 'bg-transparent text-richblack-200 '}  py-2 px-5 rounded-full max-w-max transition-all duration-200`}
                >Student</button>
                <button onClick={() => { setAccountType('instructor') }}
                    className={` ${(accountType === 'instructor') ? 'bg-richblack-900 text-richblack-5' : 'bg-transparent text-richblack-200 '}  py-2 px-5 rounded-full max-w-max transition-all duration-200`}
                >Instructor</button>
            </div>

            <form onSubmit={submitHandler} className="flex-col w-auto">
                <div className="flex justify-between items-center gap-3 mb-2">

                    <div>
                        <label htmlFor="firstName" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">First Name <sup className="text-pink-200">*</sup></label>
                        <input type="text" placeholder="Enter first name" name="firstName" id='firstName' onChange={changeHandler} value={formData.firstName} required className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50"  />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] " >Last Name <sup className="text-pink-200">*</sup></label>
                        <input type="text" placeholder="Enter last name" name="lastName" id='lastName' onChange={changeHandler} value={formData.lastName} required className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="emaila" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Email Address <sup className="text-pink-200">*</sup></label>
                    <input type="email" placeholder="Enter email address" name="emaila" id='emaila' onChange={changeHandler} value={formData.emaila} required className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 mb-1 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
                </div>
                <div className="flex justify-center gap-3">
                    <div className="w-1/2">
                        <label htmlFor="createPass" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Create Password <sup className="text-pink-200">*</sup></label>
                        <div>
                            <input type={(!isCreatePassWordVisible) ? 'password' : 'text'} placeholder="Enter Password" name="createPassword" id='createPass' required className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
                            <span onClick={CreatePassWordVisiblityHandler} className="relative bottom-[35px] left-[12rem] ">
                                {(!isCreatePassWordVisible) ? (<AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={22} fill="#AFB2BF" />)}
                            </span>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="confPass" className="w-full text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ">Confirm Password <sup className="text-pink-200">*</sup></label>

                        <div>
                            <input type={(!isConfirmPassWordVisible) ? 'password' : 'text'} placeholder="Confirm Password" name="confirmPassword" id='confPass' onChange={changeHandler} value={formData.confirmPassword} required className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-[0.5px] border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-50" />
                            <span onClick={ConfirmPassWordVisiblityHandler} className="relative bottom-[35px] left-[12rem] ">
                                {(!isConfirmPassWordVisible) ? (<AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={22} fill="#AFB2BF" />)}
                            </span>
                        </div>
                    </div>
                </div>
                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[8px] py-[8px] w-full mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-100">Create Account</button>

            </form>
        </div>
    );
};

export default SignupForm;