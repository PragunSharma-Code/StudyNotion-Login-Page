import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formtype, intermediator1 }) {

    function intermediator2(data) {
        intermediator1(data);
    }

    return (
        <div className='flex w-11/12 max-w-[950px] py-10 mx-auto gap-x-12 gap-y-0 justify-between relative '>
            <div className='absolute -left-[7rem] w-1/2 top-[1px]'>
                <h1 className='text-richblack-5 font-semibold text-[1.75rem] leading-[1.2.375rem] '>{title}</h1>

                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {
                    (formtype === 'signup' ? (<SignupForm setLoggedInStatus={intermediator2} />) : (<LoginForm setIsLoggedIn={intermediator2} />))
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <span className='text-richblack-700 font-medium leading-[1.375rem]'>OR</span>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-4 mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-50'>
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px] left-[37rem] '>
                <img src={frameImage} alt="Sorry, img not available!" width={558} height={504} loading='lazy' />
                <img src={image} alt="Sorry, img not available!" width={558} height={490} loading='lazy' className='absolute -top-4 right-4'/>
            </div>
        </div>
    );
};

export default Template;