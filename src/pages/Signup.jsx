import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

function Signup() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [err, setErr] = useState("")
    const { signup } = useAuthStore()
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        if (!fullName || email || !password) {
            console.log("something is missing")
        }
        const authData = { fullName, email, password }
        const response = await signup(authData)
        if (response.success) {
            navigate("/publish")
        }
    }

    return (
        <div className='w-full h-[calc(100vh-112px)]  flex justify-center items-center'>
            <form className='flex flex-col bg-white p-4 w-[350px] h-[300px] rounded-md'>
                <h4 className='text-center text-2xl mb-4'>SIGNUP</h4>
                <input type="text" value={fullName} className='border-2 rounded-md mb-4 p-2' onChange={(e) => setFullName(e.target.value)} placeholder='John Doe' />
                <input type="email" value={email} className='border-2 rounded-md mb-4 p-2' onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
                <div className='w-full relative '>
                    <input type={showPass ? "text" : "password"} value={password} className='w-full border-2 rounded-md mb-4 p-2' onChange={(e) => setPassword(e.target.value)} placeholder='* * * * * * *' />
                    {showPass ? <FaRegEye className=' absolute top-4 right-5' onClick={() => setShowPass(!showPass)} /> : <LuEyeClosed className='absolute top-4 right-5' onClick={() => setShowPass(!showPass)} />}
                </div>
                <button onClick={handleSignup} className='bg-blue-500 text-white p-2 rounded-md'>SIGNUP</button>
            </form>
        </div>
    )
}

export default Signup