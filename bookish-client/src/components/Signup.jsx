import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from "/src/assets/google-logo.svg";
//import fbLogo from "/src/assets/facebook-log.svg";
import bookLogo from '/src/assets/greenLogo.svg';

const Signup = () => {
    //const { authInfo } = useContext(AuthContext); // Destructure authInfo
    //const { createUser } = authInfo;
    const {createUser , loginWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState("error");
   

    const [emailValid, setEmailValid] = useState(true); // Track email validation
    const [passwordValid, setPasswordValid] = useState(true); // Track password validation
    const [email, setEmail] = useState(''); // Track email input value
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Validate the email as the user types
        setEmailValid(validateEmail(e.target.value));
    };

    // Handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Validate the password length as the user types
        setPasswordValid(e.target.value.length >= 8);
    };
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Check if email is valid
        if (!validateEmail(email)) {
            setEmailValid(false);
            setError('Invalid email format.');
            return;
        } else {
            setEmailValid(true);
        }
        // Check if password length is at least 8
        if (password.length < 8) {
            setPasswordValid(false);
            setError('Password must be at least 8 characters long.');
            return;
        } else {
            setPasswordValid(true);
        }

        createUser(email, password).then((userCredential) => {
           
            const user = userCredential.user;
            alert("Signed up successfully!!!!");
            navigate(from , {replace: true});
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            
          });
        
    
    };
    const handleRegister =() => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Logged in successfully!!!!");
            navigate(from, {replace: true});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            
          });
    };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-teal-300 to-emerald-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div className='text-center'>
                    <div className='flex font-bold text-green-700 space-x-6 text-center justify-center'>  <img src={bookLogo} alt=""  className=' w-20 h-20 rounded-full'/> {/*} <span className='text-4xl bg-gradient-to-r from-teal-400 via-pink-500 to-emerald-500 bg-clip-text text-transparent'> ParroBook </span>*/}
                    </div>
                    <h1 className="mt-5 text-2xl font-semibold text-green-900 underline ">Sign Up Form</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <label htmlFor="email" className='mx-1 py-6 font-semibold text-green-800'>Email Address</label>
                                <input autoComplete='off' id="email" name="email" type="text" onChange={handleEmailChange} className={`peer h-10 w-full border-b-2 ${emailValid ? 'border-gray-300' : 'border-red-500'} text-gray-900 focus:outline-none focus:border-rose-600`} placeholder="Email address" />
                                {!emailValid && <p className="text-red-500 text-sm">Invalid email</p>}
                                
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className='mx-1 py-6 font-semibold text-green-800'>Password</label>
                                <input autoComplete='off' id="password" name="password" onChange={handlePasswordChange} type="password" className={`peer h-10 w-full border-b-2 ${passwordValid ? 'border-gray-300' : 'border-red-500'} text-gray-900 focus:outline-none focus:border-rose-600`}  placeholder="Password" />
                                {!passwordValid && <p className="text-red-500 text-sm">Password must be at least 8 characters long</p>}
                            </div>
                            <p>If you have an account . Please <Link to="/login" className='text-blue-600 underline'>Login</Link> Here</p>
                            <div className="relative">
                                <button className="bg-teal-500 text-white rounded-md px-6 py-2">Sign Up</button>
                            </div>
                            
                        </form>
                    </div>

                    <hr />
                    <div className='flex w-full items-center flex-col mt-5 gap-3'>
                        <button onClick={handleRegister} className='block'><img  src={googleLogo} alt="" className='w-12 h-12 inline-block' />Sign in with Google</button>
                        {/*<button className='block'><img src={fbLogo} alt="" className='w-10 h-10 inline-block'/>Login with Facebook</button>*/}
                    </div>

                </div>
            </div>
        </div>
    </div>
    

  )
}

export default Signup
