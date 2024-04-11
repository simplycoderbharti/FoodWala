import React from 'react'
import './Shimmer.css'
function Shimmer() {
  return (
    <>
      <div className='shimmer-input-box flex justify-center m-auto'>
        <input type='text' className=' mt-28 shimmer-search search-text border w-6/12 rounded-full h-12 absolute shadow-xl' />
        <button className='shimmer-search-btn'></button>
      </div>

      <div >
        <button className=" avgRating mt-1  mr-5 px-4 py-2 flex justify-center font-bold rounded-lg h-10 absolute top-0 right-0 ">

        </button>
      </div>
      <button className='shimmer-top-rated'></button>

      <div className='flex justify-end '>
      
        <div className='box-1 '></div>
        <div className='box-1'></div>
        <div className='box-1'></div>
      </div>

      <div className='flex justify-end'>

        <div className='box-2 '></div>
        <div className='box-2'></div>
        <div className='box-2'></div>
        <div className='box-2'></div>
      </div>
      <div className='shimmer-container animate-pulse'>
        <div className='shimmer-card'>Cards</div>
        <div className='shimmer-card'>Cards</div>
        <div className='shimmer-card'>Cards</div>
      </div>

    </>
  )
}

export default Shimmer
