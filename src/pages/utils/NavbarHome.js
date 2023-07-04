import React from 'react'
import { Link } from 'react-router-dom';


export default function NavbarHome() {
  return (
    <div className="navbar z-50 sticky top-0 backdrop-blur-sm">
        <div className='container'>
            <div className="flex-1"> 
                <Link to='/' className='flex items-center gap-x-1'>
                    <img src='/media/logo.svg' />
                    <p className="text-md">Ciap</p>
                </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/25717454?v=4" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
