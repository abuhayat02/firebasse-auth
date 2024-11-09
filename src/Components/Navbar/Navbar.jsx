import { NavLink } from "react-router-dom"

export default function Navbar() {

    let myPages = [
        {
            pathName: '/',
            pageName: 'Home'
        },
        {
            pathName: '/about',
            pageName: 'About'
        },
        {
            pathName: '/contact',
            pageName: "Contact"
        },

    ]


    return (
        <div className="flex flex-row container mx-auto justify-between py-3">
            <div className="hidden md:flex">
                HELLO WORLD
            </div>
           
            <div>
                {
                    myPages.map((pages, index) => <NavLink className="px-4 py-1" key={index} to={pages.pathName}>{pages.pageName}</NavLink>)
                }
            </div>
            <div className="flex flex-row gap-3">
                <NavLink className="px-3 py-[2px] hover:bg-blue-300 cursor-pointer duration-700 border-blue-400 border" to="/login">Login</NavLink>
                <NavLink className="px-3 py-[2px] hover:bg-blue-300 cursor-pointer duration-700 border-blue-400 border" to="/register">Register</NavLink>
            </div>
        </div>
    )
}
