import React from 'react'
import Form from './Form'
import Image from '../18591063.png'
export default function Footer() {
  return (
    <> 
    <footer className="text-gray-400 body-font" style={{background:`url(${Image})`}}>
   
    <div className=" px-5  pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
          <span className=" text-xl text-gray-500">Newsletter</span>
        </span>
        <p className="mt-2 text-sm text-gray-500">
          Get News about articles and updates
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          
         
        </div>
        <div className="lg:w-full md:w-1/2 w-full px-4">
     <Form/>



        </div>
      
        
      </div>
    
    </div>
    <div className='text-white  lg:mx-24 lg:pt-0 md:pt-0 pt-16 mx-12  '>
    <p className=' font-extrabold  lg:text-9xl' >GET</p>
    <p className='lg:text-9xl font-extrabold' >IN TOUCH</p>
     </div>
     <div
  className="p-4 text-center mt-2"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
>
Copyright 2022 All Right Reserved By SG

</div>
  </footer>
  </>
  )
}
