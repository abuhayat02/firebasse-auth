import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { MyContext } from "../contex";
import { useState } from "react";

export default function Root() {

  let [loginData , setData] = useState({})


  return (
    <MyContext.Provider value={{setData , loginData}} >
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </MyContext.Provider>
  )
}
