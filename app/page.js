import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col my-24 mx-10'>
      <div className='flex  md:mx-10 mx-3 mt-32 justify-start'>
        <div>
          <h1 className='text-white text-bold lg:text-5xl  md:text-3xl text-2xl font-bold  capitalize'>
            Building Your <br /> resume has never<br /> been easier 🪄
          </h1>
          <p className='lg:text-xl md:text-lg text-lg text-gray-300 my-10'>
            Custom Resumes for many and much more! To differentiate you<br/> from the crowd.
          </p>
          <button type="button" className="text-violet-300 p-5 btn-purple hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-base  px-4 py-3 text-center dark:focus:ring-blue-800">Create My Resume</button>
        </div>
      </div>
    </main>
  )
}
