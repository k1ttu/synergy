import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

export default function Footer() {
    const website = [
        {
            title: "Build Your Resume",
            link: "#"
        },
        {
            title: "Tutorial",
            link: ""
        }

    ]
    const CompanyName = [
        {
            title: "Phone",
            content: "9758453647",
            icon: HiOutlinePhone
        },
        {
            title: "Email",
            content: "info@Companymail.com",
            icon: HiOutlineMail
        },
        {
            title: "Address",
            content: "Company Address",
            icon: HiOutlineLocationMarker
        }
    ]
    const JobSeekers = [
        {
            title:"Build a Resume",
            link:"#"
        },
        {
            title:"Samples",
            link:"#"
        },
        {
            title:"Cover Letter Samples",
            link:"#"
        },
        {
            title:"Apps",
            link:"#"
        }
    ]
    const needHelp = [
        {
            title:"About us",
            link:"#"
        },
        {
            title:"Contact Us",
            link:"#"
        },
        {
            title:"Help Center",
            link:"#"
        },
        {
            title:"Site Map",
            link:"#"
        }
    ]

    return (
        
        // <footer classNameName="bg-black flex justify-normal">
        //     <div className="flex flex-col justify-start align-top py-20 text-white">
        //         <p className="text-3xl italic font-extrabold">
        //             Logo
        //         </p>
        //         <p className="text-white text-center md:text-left text-base">
        //             A tempor locus turpis non mi a. Congue sed suspendisse etiam mauris iaculis. Eget orci, pousuere adipiscing at consectetur. Sed nulla lectus pellentesque in maecenas. In velit dignissim gravida morbi integer pulvinar blandit.
        //         </p>
        //     </div>
        //     <ul className="list-none flex flex-col justify-start w-auto">
        //         <hr />
        //         <h2>Company Name</h2>
        //         {
        //             CompanyName.map((item, index) => {
        //                 return (
        //                     <li key={index} className="text-base text-white flex">
        //                         {item.icon}
        //                         <div className='flex flex-col justify-start'>
        //                             <p className='text-base'>
        //                                 {item.title}
        //                             </p>
        //                             <p className='text-base'>
        //                                 {item.content}
        //                             </p>
        //                         </div>
        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>
        //     <ul className="list-none flex flex-col justify-start w-auto">
        //         <hr />
        //         <h2>Website</h2>
        //         {
        //             Array.map((item, index) => {
        //                 return (
        //                     <li key={index} className="text-base text-white">
        //                         {item.title}
        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>
        //     <ul className="list-none flex flex-col justify-start w-auto">
        //         <hr />
        //         <h2>Heading</h2>
        //         {
        //             Array.map((item, index) => {
        //                 return (
        //                     <li key={index} className="text-base text-white">
        //                         {item.title}
        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>
        //     <ul className="list-none flex flex-col justify-start w-auto">
        //         <hr />
        //         <h2>Heading</h2>
        //         {
        //             Array.map((item, index) => {
        //                 return (
        //                     <li key={index} className="text-base text-white">
        //                         {item.title}
        //                     </li>
        //                 )
        //             })
        //         }
        //     </ul>
        // </footer>





        <footer className="bg-black w-full block">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-evenly">
                    <div className="mb-10 md:mb-0 w-auto lg:w-1/3">
                        <a href="#" className="mb-6 flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
                        </a>
                        <p className='text-sm text-white'>
                        A tempor locus turpis non mi a. Congue sed suspendisse etiam mauris iaculis. Eget orci, pousuere adipiscing at consectetur. Sed nulla lectus pellentesque in maecenas. In velit dignissim gravida morbi integer pulvinar blandit.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                            <h2 className="mb-6 text-base font-semibold text-white">Website</h2>
                            <hr className='mb-6 bg-gray-300 border-gray-300 fill-gray-300' color='#00FFFF'/>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                {
                                    website.map((item, index) => {
                                        if (index == website.length - 1) {
                                            return (
                                                <li key={index} >
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={index} className="mb-4">
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-white">Job Seekers</h2>
                            <hr className='mb-6'/>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                {
                                    JobSeekers.map((item, index) => {
                                        if (index == JobSeekers.length - 1) {
                                            return (
                                                <li key={index} >
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={index} className="mb-4">
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-white">Need Help</h2>
                            <hr className='mb-6'/>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                {
                                    needHelp.map((item, index) => {
                                        if (index == needHelp.length - 1) {
                                            return (
                                                <li key={index} >
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={index} className="mb-4">
                                                    <a href={item.link} className="hover:underline">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>


    )
}