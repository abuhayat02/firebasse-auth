import { NavLink } from "react-router-dom"
import auth from './../../firebase.info';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";

export default function Regester() {

    let [wrongData, setWrongData] = useState('');
    let [success , setSuccess] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault();
        // let userEmail = getValueFormInputFild(event , email );
        let userEmail = event.target.email.value;
        let userPass = event.target.password.value;
        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then((data) => {


                sendEmailVerification(auth.currentUser)
                .then(()=>{

                    setWrongData('')
                    console.log(data.user);
                    setSuccess('Ok done your registration')
                })
            })
            .catch((error) => {
                setSuccess('')
                setWrongData(error.message);
            })

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>

                        <label className="block text-sm font-medium text-gray-700">Gmail</label>
                        <input
                            type="email"

                            name="email"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="you@gmail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-blue-500 hover:underline">Sign in</NavLink>
                </p>
                <p className="text-red-600">{wrongData}</p>
                <p className="text-green-500">{success}</p>

            </div>
        </div>
    )
}
