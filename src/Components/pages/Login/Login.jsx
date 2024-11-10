import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../../firebase.info"
import { useContext, useRef, useState } from "react"
import { MyContext } from "../../contex"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  let navigete = useNavigate()

  let [successfuly , setSuccessfuly] = useState('')

  let {setData} = useContext(MyContext);
  let googleProvider = new GoogleAuthProvider()


  let hendelLogin= (e)=>{
    e.preventDefault()
    let userEmail = e.target.email.value;
    let userPass = e.target.password.value;
    signInWithEmailAndPassword(auth , userEmail , userPass)
    .then((info)=>{
      console.log(info.user);
      setSuccessfuly('good job dear user')
    })
    .catch((error) => {
      setSuccessfuly('not working , try')
    })
  }


  let handleGoogleSignIn = ()=>{       
    signInWithPopup(auth , googleProvider)
    .then((users)=>{
      console.log(users.user);
      setData(users.user);
      navigete('/')
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  let emailRef = useRef() ;
  let hendelForgetPassword = ()=>{
    sendPasswordResetEmail(auth , emailRef.current.value)
    .then(() => {
      alert('check your email')
    })
    .catch((error)=>{
      console.log('error = ' , error)
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">Sign in to Your Account</h2>
      
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google icon"
          className="w-5 h-5 mr-2"
        />
        Sign in with Google
      </button>
      
      <div className="relative my-4">
        <span className="absolute inset-x-0 top-2/4 transform -translate-y-1/2 bg-white px-4 text-sm text-gray-500">Or continue with</span>
        <div className="border-t border-gray-300"></div>
      </div>

      <form onSubmit={hendelLogin} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
          ref={emailRef}
            type="email"
            name="email"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
        <p onClick={hendelForgetPassword} className="cursor-pointer hover:text-gray-500">forget password ?</p>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        Do not have an account? <Link to='/register' className=' className="text-indigo-600 hover:text-indigo-500'>Sign up</Link>
      </p>
      <p>{successfuly}</p>
    </div>
  </div>
  )
}
