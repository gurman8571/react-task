import React, { useEffect, useState } from 'react'


export default function Product() {
const [products, setproducts] = useState([]);
const [error, seterror] = useState("")
const getproducts=async()=>{
try {
const data=await fetch('https://api.escuelajs.co/api/v1/products');
setproducts(await data.json() );
} catch (error) {

seterror("Api error: " + error.message);
}
}

useEffect(() => {
getproducts();
}, [])

return (
<section className="text-gray-600 body-font">
    <div className='text-black text-6xl font-bold mx-12 mt-6'> New products</div>
    <div className='flex'>
        <div className='w-1/6 container px-5 py-16 mx-auto'>
            <ul className='pt-6 px-6'>

                <li className='font-bold text-black text-4xl'>Accesorries</li>
                <li className='font-bold text-black text-2xl'>Best sellers</li>
                <li className='font-bold text-black text-2xl'>50% off</li>
            </ul>
        </div>
        <div className="container px-5 py-16 mx-auto w-5/6">

            {error?<p className='flex justify-center'> {error}</p>: <div>


                { products?.map((product) => {
                return(

                <div key={product?.id}>

                    <div className="p-4 ">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={product?.category?.image} alt="blog" />
                            <div className="p-6">

                                <h1 className="title-font text-2xl font-extrabold  text-black mb-3">
                                    {product?.category?.name}
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    {product?.description}
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <span
                                        className="text-black text-2xl font-extrabold  inline-flex items-center md:mb-2 lg:mb-0">
                                        ${product?.price}

                                    </span>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )
                })
                }
            </div>}
        </div>
    </div>
</section>



)
}
