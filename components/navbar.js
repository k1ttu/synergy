'use client'
import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
export default function Navbar3() {
    const [show, setShow] = useState(false);
    const navlink2 = "block text-2xl text-gray-600 my-3 hover:underline hover:underline-offset-4 animate__animated";
    const navlink = "text-sm text-white no-underline hover:underline hover:transition-all hover:duration-100 hover:ease-in-out";
    const navlink3 = "text-xl text-white italic font-bold no-underline hover:underline hover:transition-all hover:duration-100 hover:ease-in-out";
    const handleClose = () => {
        setShow(false)
        router.refresh();
    };
    const handleShow = () => setShow(true);

    const navbarDB = [
        {
            title: "Build Your Resume",
            id: "build",
            link: "./build"
        },
        {
            title: "Tutorial",
            id: "tutorial",
            link: "./tutorial"
        },
        {
            title: "Contact Us",
            id: "contact",
            link: "./contact",
        },
        {
            title: "My Account",
            id: "account",
            link: "./account",
        }
    ]
    const buttons = [
        {
            title: "Log In",
            style: "bg-white text-violet-600 border-2 border-white",
        }, {
            title: "Sign In",
            style: "bg-violet-900 text-purple-300"
        }
    ]
    const router = useRouter();

    return (


        <nav className="backdrop-blur-2xl bg-white/10 fixed block w-full z-20 top-0 start-0 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10 p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center font-bold text-2xl whitespace-nowrap text-white">Logo</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="md:flex hidden text-violet-600 p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-base px-4 py-2 text-center mx-5 dark:focus:ring-blue-800">Log In</button>

                    <button type="button" className="md:flex hidden btn-purple text-violet-300 p-5 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-base mx-5 px-4 py-2 text-center dark:focus:ring-blue-800">Sign In</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="bg-transparent items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="self-end flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                       {
                        navbarDB.map((item, index)=>{
                            if(index == navbarDB.length -1){
                                return(
                                    <li className='mr-0' key={index}>
                                    <a href="#" className="block font-light py-2 px-3 text-white rounded bg-transparent  md:p-0 " aria-current="page">{item.title}</a>
                                </li>
                                )
                            }else{
                                return(
                                    <li key={index} className='mr-5'>
                                    <a href="#" className="block font-light py-2 px-3 text-white rounded bg-transparent  md:p-0 " aria-current="page">{item.title}</a>
                                </li>
                                )
                            }
                        })
                       } 
                       
                    </ul>
                </div>
            </div>
        </nav>

    );
}