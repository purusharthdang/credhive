import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('loggedIn')){
          navigate('/dashboard');
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const handleSubmit = () => {
        if(!email || !password){
            toast.error('Email or password cannot be empty!');
            return;
        }
        localStorage.setItem('loggedIn', 'true');
        navigate('/dashboard')
    }
    return (
        <div className='flex flex-col gap-4 w-full h-screen justify-center content-center items-center'>
            <div className='w-20 h-20'>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="34 25 132 150" viewBox="34 25 132 150" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                        <path d="M166 62.5L100 25 34 62.5v75l66 37.5 63.6-36.2v-.2l2.2-1.3V62.5h.2zM136.7 119V83l25.7 14.5v36.4L136.7 119zm-99-15.9V66l25.7 15v36.6l-25.7-14.5zM67 118.7V81.3l33-18.7 33 18.7v37.3l-33 18.7-33-18.6zm-1.5-40.8L40.2 63l30.4-17.2 25.8 14.5-30.9 17.6zm96.8-13.2v28.5l-88-49.4L100 29.2l62.3 35.5zM37.7 135.3v-28l87.8 49-25.5 14.5-62.3-35.5zm91.5 18.8l-25.9-14.5 31.4-17.7 25.5 14.6-31 17.6z" fill="#f7c902" data-color="1"></path>
                    </g>
                </svg>
            </div>
            <h3>CredHive</h3>
            <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md py-1 px-4 pr-10 focus:outline-none focus:border-blue-500"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md py-1 px-4 pr-10 focus:outline-none focus:border-blue-500"
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                className="px-4 bg-blue-600 text-white rounded"
                onClick={handleSubmit}
            >
                Login
            </button>
        </div>
    )
}

export default Login