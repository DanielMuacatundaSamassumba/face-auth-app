import {  ScanFace } from 'lucide-react'

import { Link } from "react-router-dom"
import useSignUp from '../../hooks/useSignUp'
import FaceRecognitionComponent from '../../components/FaceRecognitionComponent'
import useFaceRecognition from '../../components/useFaceRecognition'
export default function App() {
    const {    handleChangeVAlue, formData,handleSubmit,
        isOpened} = useSignUp()
        const  {  isOpenedFace } = useFaceRecognition()
    return (
        <div
            className='flex  flex-col items-center justify-center bg-[#020A0F]  min-h-svh  text-white'
        >


            <div className='flex items-center justify-center flex-col'>
                <ScanFace size={50} color='#00F0FF' />
                <h1 className='text-center text-4xl mt-2'>FaceAuthApp</h1>
                <p className='mt-2 text-zinc-500'>Welcome to the future of Auth  Tendece

                </p>


            </div>
            <div className='bg-[#0E1014] w-11/12  rounded-xl mt-4 p-6 md:w-1/3'>

                <h1 className=' text-2xl mt-2'> Create Account and be happy</h1>
                <p className='mt-2 text-zinc-500'>Enter your details to  create your account</p>
                <form action="" className='mt-4' onSubmit={
                    handleSubmit
                }>
                    <div>
                        <label htmlFor=""> Email
                        </label>
                        <div className='flex bg-[#191B1E]  p-4 rounded-xl mt-2 border border-zinc-500'>
                            <p>@</p>  <input required type="email" name="email" id="" className='w-full  outline-none ml-2' placeholder='exemplo@dev.com'
                            onChange={handleChangeVAlue} value={formData.email}
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor=""> Name
                        </label>
                        <div className='flex bg-[#191B1E]  p-4 rounded-xl mt-2 border border-zinc-500'>
                              <input type="text" required name="name" id="" className='w-full  outline-none ml-2' placeholder='exemplo@dev.com'
                              onChange={handleChangeVAlue} value={formData.name}
                              />
                        </div>
                    </div>

                    <div className='w-full  mt-4'>
                        <button className='bg-[#00F0FF] w-full p-3 rounded-xl  cursor-pointer'  type='submit'>
                            Continue
                        </button>
                    </div>

                    <div className='flex  mt-2 gap-2'>
                        <p className='text-zinc-500'>Do you Have a Account?</p>
                        <Link to={"/"} className='text-[#00F0FF] font-semibold'>Sign-in</Link>
                    </div>
                </form>

                {
                    isOpened || isOpenedFace ? <FaceRecognitionComponent/> :""
                }
            </div>
        </div>
    )
}
  