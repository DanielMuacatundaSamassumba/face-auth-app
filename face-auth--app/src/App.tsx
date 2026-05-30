import { ScanFace } from 'lucide-react'
import { Link } from "react-router-dom"
import FaceRecognitionComponent from './components/FaceRecognitionComponent'
import LoaderComponent from './components/LoaderComponent'
import useLogin from './hooks/useLogin'
export default function App() {
  const { handleChangeVAlue, formData , loginAuth, isOpened} = useLogin()
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

        <h1 className=' text-2xl mt-2'> Welcome back</h1>
        <p className='mt-2 text-zinc-500'>Enter your details to access your vault</p>
        <form action="" className='mt-4' onSubmit={loginAuth}>
          <label htmlFor=""> Email
          </label>
          <div className='flex bg-[#191B1E]  p-4 rounded-xl mt-2 border border-zinc-500'>
            <p>@</p> 
             <input
              onChange={handleChangeVAlue}
              value={formData.email}
              required
              type="email" name="email"  className='w-full  outline-none ml-2' placeholder='exemplo@dev.com' />
          </div>

          <div className='w-full  mt-4'>
            <button  type='submit' className='bg-[#00F0FF] w-full p-3 rounded-xl  cursor-pointer'>
              Continue
            </button>
          </div>

          <div className='flex  mt-2 gap-2'>
            <p className='text-zinc-500'>You Don´t Have a Account?</p>
            <Link to={"/sign-up"} className='text-[#00F0FF] font-semibold'>Sign-up</Link>
          </div>
        </form>
          {
             isOpened  && <FaceRecognitionComponent/> 
          }
      </div>
      {/* <LoaderComponent /> */}
    </div>
  )
}
