import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

function Navbar(props) {
    let isLoggedIn = props.loggedInfo;
    let setLoggedIn = props.setLoggedIn;
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to='/'><img src={logo} alt="Sorry, img not available!" width={160} height={132} loading='lazy' /></Link>
            <nav>
                <ul className='text-white flex gap-x-6'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
            </nav>


            {/* Login - Sign Up - Logout - Dashboard */}

            {
                (!isLoggedIn) ?

                    <div className='flex items-center gap-x-4'>

                        <Link to='/login'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button></Link>
                        <Link to='/signup'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button></Link>

                    </div>

                    : <div className='flex gap-5'>

                        <Link to='/'><button onClick={() => {
                            setLoggedIn(false)
                            toast.success('Logged Out Succesfully!')
                        }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log Out</button></Link>

                        <Link to='/dashboard'><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button></Link>
                    </div>
            }

        </div >
    );
};

export default Navbar;