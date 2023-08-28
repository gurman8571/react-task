import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
export default function Product() {
    const [products, setproducts] = useState([]);
    const [error, seterror] = useState("")
    const [categories, setcategories] = useState([])
    const [filtered, setfiltered] = useState([]);
    const colors=['blue','green','yellow','red'];

const getcategories=async()=>{
  try {
    const data=await fetch('https://fakestoreapi.com/products/categories');
    setcategories(await data.json() );
   } catch (error) {
    
    seterror("Api error: " + error.message);
   }

}

const filterProducts=(value)=>{
const newarr = products.filter((product) => product.category === value);
setfiltered(newarr);
}
const getproducts=async()=>{
   try {
    const data=await fetch('https://fakestoreapi.com/products');
   const res=await data.json() ;
   setproducts(res)
    setfiltered(res );
   } catch (error) {
    
    seterror("Api error: " + error.message);
   }
}

    useEffect(() => {
     getproducts();
    }, [])
    useEffect(() => {
     getcategories();
    }, [])
    
    
  return (
    <section className="text-gray-600 body-font">
<div className='mx-12 mt-6 '> 
<div className='text-black lg:text-6xl font-bold '> New products</div>

<div className='px-12 mt-2'><>
{categories?.map((value,i)=>{
  return ( <button
  key={i}
    type="button"
    className={`border border-${colors[i]}-200 bg-${colors[i]}-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline`}
    onClick={()=>filterProducts(value)}
  >
    {value}
  </button>)
})}
         
       
</>
</div>
</div>

  <div className='flex'>

  <div className="container px-5 lg:py-16 mx-auto w-5/6">
    
   {error?<p className='flex justify-center'> {error}</p>: <Swiper
     
      
      spaceBetween={0}
      slidesPerView={3}
    navigation 
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      400:{
        slidesPerView:2,
      },
      639: {
        slidesPerView: 3,
      },
     
    }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
        >
       
        
          { filtered?.map((product) => {
     return(
     
        <>
     

     <SwiperSlide className='p-4 md:w-1/3' key={product?.id}>
  
     <>
        <div className="h-full border-2 lg:h-96 md:h-96 border-gray-200 border-opacity-60 rounded-lg ">
          <img
            className="lg:h-48 md:h-36  md:w-full w-72 px-4 lg:w-full object-fit object-center"
            src={product?.image}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
             {product?.category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {product?.title}
            </h1>
            <p className="leading-relaxed mb-3">
            {product?.description.substring(1, 40)}
            </p>
            <div className="flex items-center flex-wrap ">
              <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            
            </div>
          </div>
        </div>
      </>
   </SwiperSlide>
     
           </>
        
        )
     })
        }
        
        
       
        
     
     
      
      </Swiper>}
    </div>
  </div>
</section>
  
  
  
  )
}
