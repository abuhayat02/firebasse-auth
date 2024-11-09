import { useContext } from "react"
import { MyContext } from "../../contex"

export default function Home() {
  let { loginData } = useContext(MyContext);
  let { displayName, email, photoURL } = loginData;
  return (
    <div>
   {
    loginData.email ?    <div className=" w-full  ">
    <div className="w-3/5 flex items-center gap-4 flex-row shadow-lg rounded-md p-4 mx-auto">
      <img className="  rounded-full" src={loginData.photoURL} alt="" />
      <div className=" w-full ">
        <p className="text-3xl font-bold">{displayName}</p>
        <p className="text-md text-gray-500 font-bold">{email}</p>

      </div>
    </div>
  </div>
: " "
   }
    </div>
  )
}
