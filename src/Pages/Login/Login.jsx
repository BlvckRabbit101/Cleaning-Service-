import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../Handler/useForm'
import Swal from 'sweetalert2'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(true)
    const { handleChange, values, errors } = useForm()
    
    const handleShwoPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        
        await axios.post('https://cleaning-service-0mh2.onrender.com/api/users/signin',values).then((res)=>{
            console.log(res)
            setIsLoading(false)
            localStorage.setItem('usertoken', JSON.stringify(res.data.data))
            if(res?.data.data.isAdmin){
                Swal.fire({
            title: "Good job!",
            text: "Admin Login successfully",
            icon: "success"
        });
                navigate('/Admin')
            } else {
                Swal.fire({
            title: "Good job!",
            text: "User Login successfully",
            icon: "success"
        });
                navigate('/Account')
            }
        }).catch((error)=>{
            setIsLoading(false)
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        })
    }
    
    

  return (
    
    <div className='flex justify-center items-center w-full h-[100vh] mobile:py-0 mobile:h-full tablet:py-0 tablet:h-full'>
        <div className='flex justify-center items-center w-full font-[16px] mobile:w-full mobile:h-full tablet:w-full tablet:h-full '>
           <div className='flex justify-center items-center w-screen h-screen bg-white text-white mobile:flex-col mobile:w-full mobile:h-screen tablet:flex-col tablet:w-full tablet:h-screen'>
                <div className='w-[50%] h-full bg-[url("C:\Users\USER\Desktop\ReactJs\Cleaning\Cleaning-Service-\src\assets\images\bluebg.jpg")] bg-cover flex flex-col justify-center items-center gap-[0px] opacity-90 mobile:w-full mobile:text-[14px] mobile:py-[20px] tablet:w-full tablet:text-[16px] tablet:py-[40px] mobile:hidden tablet:hidden'>
                    <div className='text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Welcome back!</div>
                    <div>Dont have an account?</div>
                    <Link to='/Signup'><button className='py-[8px] px-[50px] mt-[15px] bg-[#4291FD] rounded-[25px] text-[white] font-medium text-[16px] border-[2px] border-solid border-[#4291FD] hover:bg-transparent hover:text-[white] duration-700 mobile:text-[14px] mobile:py-[5px] mobile:px-[20px] mobile:mt-[5px] tablet:text-[16px] tablet:py-[5px] tablet:px-[20px] tablet:mt-[5px]' >Sign Up</button></Link>
                </div>
                <div className='w-[50%] h-full text-[#333] flex flex-col justify-center items-start p-[50px] gap-[30px] mobile:w-full mobile:px-[20px] tablet:w-full tablet:py-[20px] '>
                    <div className=' text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Sign In</div>
                    <form className='w-full' onSubmit={handleSubmit} required>
                        <div className="relative z-0 w-full mb-5 group">
                        <input type="email"  onChange={handleChange}  name="email" id="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 ${errors?.email? 'border-red-600': 'focus:border-[#34f6f2] border-gray-300'} peer`} placeholder=" " required />
                        {errors?.email && <div className='text-red-600'>{errors?.email}</div>}  
                        <label className="peer-focus:font-medium absolute t ext-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type={showPassword ? 'password' : 'text'} onChange={handleChange} name="password" id="password" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 ${errors?.password? 'border-red-600': 'focus:border-[#34f6f2] border-gray-300'} peer`} placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            {/* <div className='text-red-500' >
                            {data.error? 'Incorrect Email or Password' : null}
                            </div> */}
                            {errors?.password && <div className='text-red-600'>{errors?.password}</div>}  
                            <div className='flex items-center justify-start gap-2 pt-2'>
                                <input className='cursor-pointer' type="checkbox" checked={!showPassword} onChange={handleShwoPassword}/>
                                  <label htmlFor='showPassword'>{ showPassword? "Show Password": "Hide Password"}</label>
                            </div>
                        </div>
                        
                        <button disabled={isLoading} className="rounded-3xl w-full bg-[#4291FD] hover:bg-transparent border-[2px] border-solid border-[#4291FD] hover:text-[#4291FD] duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit">
                                {isLoading? 'Signing In...': 'Sign In'}
                            </button>
                            <Link to='/Forgotpss' ><a className="inline-block align-baseline font-bold text-sm text-[#333] hover:text-[#4291FD]" href="#">
                                Forgot Password?
                            </a></Link>
                    </form>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Login