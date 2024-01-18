import React from 'react'

const Card = () => {
    
  return (
    <div className='w-[400x] bg-red-500 rounded-xl flex flex-shrink-0 gap-x-4 py-5 px-5 font-roboto card z-[300]'>
        {/* text content */}
        <div className='w-1/2 flex flex-col gap-y-2 items-start relative'>
            <p className='text-sm text-slate-700'>
            Explore new arrivals
            </p>
            <h3 className='text-slate-900 font-semibold text-2xl'>
            Shop the latest <br/>from top brands
            </h3>
            <button className='absolute bottom-0 bg-slate-200 py-2 px-4 rounded-full shadow-[2px_8px_40px_rgba(0,0,0,.08)]'>
                Show me all
            </button>
        </div>
        {/* product image */}
        <div className='w-1/2 '>
            <img src="https://ciseco-reactjs.vercel.app/static/media/1.a586787f3de7735e65d3.png" alt="product" draggable="false"/>
        </div>
    </div>
  )
}

export default Card