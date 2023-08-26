import React, { useState } from 'react'


export default function Form() {
const [name, setname] = useState("");
const [email, setemail] = useState("")
const [message, setmessage] = useState("")
const [error, seterror] = useState([])
  const handlesubmit=(e)=>{

e.preventDefault();

if (!name || !email ||!message) {

  const newarr=["* Please fill all feilds "];
    seterror(newarr); 
    return;
}

else{
  
   alert("Form submitted");
    setname("");
    setemail("");
    setmessage("")
    seterror([]);
  
}
  }
  return (
    <div>  
     
      
       <form > 
      {error.length>0?<span>

        {error.map((err,i)=>{return(<p className='text-red-500 py-1' key={i}>
        {err}
        </p>)})}
      </span>:<></>}
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="text"
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-3/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Name"
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
      />
     
    </div>
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="email"
       
        id="floating_password"
        className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Email "
        required=""
        value={email}
        onChange={(e)=>{setemail(e.target.value)}}
      />
   
     
    </div>
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="text"
      
        id="floating_repeat_password"
        className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Message"
        value={message}
        onChange={(e)=>{setmessage(e.target.value)}}
        
      />
     
    </div>
   
  
    <button
      onClick={(e)=>{handlesubmit(e)}}
      className=" float-right text-orange-500 rounded-full text-xl font-bold border  border-orange-500  p-8 mr-8 "
    >
     SEND
    </button>
  </form></div>
  )
}
