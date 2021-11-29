import { ArrowLeftIcon } from '@heroicons/react/solid';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate()

    const handleLogin = async (e)=> {
      e.preventDefault();

      try {
        let bodyFormData = new FormData();
        bodyFormData.append('username', 'muhammadharis');
        bodyFormData.append('userpass', 'muhammadharis');
        const res = await axios({
          method: "post",
          url: "http://www.homiee.a2hosted.com/api/v1/index.php/user/login",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
        console.log(res)
        // router.push({
        //   pathname:"/"
        // })
      }
      catch (err){
        console.log(err)
      }
    }
    return (
        <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className='flex justify-start cursor-pointer items-center ' onClick={()=>navigate("/")}>
              <ArrowLeftIcon className='h-6 w-10 text-green-900'  />
              <p className='text-green-900 font-bold text-xl'>Back to Home</p>
          </div>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-green-900">Sign in to your account</h2>              
            </div>
  
            <div className="mt-8">              
              <div className="mt-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-700">
                      Email address
                    </label>
                    <div className="mt-1">
                        <input type="text" name="" id="" 
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                  </div>
  
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-green-700">
                      Password
                    </label>
                    <div className="mt-1">
                        <input type="text" name="" id="" 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                       
                    </div>
                  </div>
                  <div>
                    <p className='text-green-600 font-bold hover:underline cursor-pointer'>Forgot your password?</p>
                  </div>
                  <div>
               
                  <button    
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                   >        
                        Login  
                    </button>

                    <div className='flex space-x-2 mt-5 font-semibold'>
                        <h1>Don't have an account?</h1>
                        <Link to='/signup' className='font-bold text-green-600 underline cursor-pointer'>Sign up</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://links.papareact.com/4cj"
            alt=""
          />
        </div>
      </div>
    )
}

export default Login