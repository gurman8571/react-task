import React, { useState } from 'react'
import { navbar } from '../config/Navbar'

export default function Header() {
  const [showlinks, setshowlinks] = useState(false);
  const [dropdown, setdropdown] = useState(false)
  return (
   <> 
   <div className="bg-gray-900">
<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
<span className="text-gray-400 text-sm  flex  sm:text-left space-x-2">



 <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>
<p className='pt-1'> Free Delivery |  Return Policy </p> 

</span>
<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
 <span className='text-gray-400 px-2 text-md font-bold'> Follow us</span>
<span className="text-gray-400">
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
</span>
<span className="ml-3 text-gray-400">
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
</span>
<span className="ml-3 text-gray-400">
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
  </svg>
</span>
<span className="ml-3 text-gray-400">
  <svg
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={0}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path
      stroke="none"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    />
    <circle cx={4} cy={4} r={2} stroke="none" />
  </svg>
</span>
</span>
</div>
</div>
     <nav className="bg-black  w-full ">
   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
     <div className="relative flex items-center justify-between h-16">
       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
         {/* Mobile menu button*/}
         <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
      
           
         </button>
       </div>
       <div className="">
            <span className="font-extrabold  shadow-sm text-white text-2xl cursor-pointer">ShopKart</span>
         </div>
       <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
       
         <div className="hidden sm:block sm:ml-6">
           <div className="flex space-x-4">
             {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {navbar?.map(items=>{
return(
 
<>
{items.child?

<>
<button
  id="dropdownDefaultButton"
  data-dropdown-toggle="dropdown"
  className="text-white  focus:outline-none focus:ring-blue-300  
  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
  onClick={()=>{setdropdown(!dropdown)}}
>
  {items?.name}
  <svg
    className="w-2.5 h-2.5 ml-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 4 4 4-4"
    />
  </svg>
</button>

{/* Dropdown menu */}
<div
  id="dropdown" 
 className={dropdown?"z-10 absolute top-6  mt-4 ml-24 ":"hidden"}
 style={{left:247}}
>
  <ul
    className="py-2 text-sm text-gray-700 dark:text-gray-200"
    aria-labelledby="dropdownDefaultButton"
   
  >
   {items?.child?.map(child=>{

    return( <li>
      <span
        href="#"
        className=" font-bold p-1 text-md  text-white"
      >
       {child?.name}
      </span>
    </li>)
   })}
   
  </ul>
</div>
</>

:<button key={items?.id}  className=" text-white  focus:outline-none focus:ring-blue-300  
text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
{items?.name}</button>}
</>

)

  })}  
            
           </div>
         </div>
       </div>
       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             <span className="sr-only">View notifications</span>
           {/* Heroicon name: outline/bell */}
              <span className='text-white bg-transparent py-2 px-4'>wishlist(0)


              </span>
              <span className='text-white bg-transparent py-2'>Bag(0)


              </span>
       
         {/* Profile dropdown */}
         <div className="ml-3 relative">
           <div>
             <button type="button" className=" flex text-sm rounded-full sm:hidden w-full focus:outline-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="mobile-menu" aria-expanded="false" aria-haspopup="true"
             onClick={()=>{setshowlinks(!showlinks)}}
             >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
 </svg>
             </button>
           </div>
           {/*
       Dropdown menu, show/hide based on menu state.

       Entering: "transition ease-out duration-100"
         From: "transform opacity-0 scale-95"
         To: "transform opacity-100 scale-100"
       Leaving: "transition ease-in duration-75"
         From: "transform opacity-100 scale-100"
         To: "transform opacity-0 scale-95"
     */}
           
         </div>
       </div>
     </div>
   </div>
   {/* Mobile menu, show/hide based on menu state. */}
   <div className="sm:hidden w-full" id="mobile-menu">
     <div className="px-2 pt-2 pb-3 space-y-1">
       {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
   {showlinks? 
   <>
   {navbar?.map(items=>{
return(
<span key={items?.id}  className="text-white font-bold mr-2 hover:text-white"> 
{items?.name}


</span>
)

  })}
     </>
            :
            <p></p>
            }
      
     </div>
   </div>
 </nav></>
  )
}
