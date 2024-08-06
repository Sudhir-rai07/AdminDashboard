import React from 'react'

const StopWatch = () => {

  return (
   <div className='flex items-center justify-center w-full h-full'>
        <div className='flex flex-col items-center'>
            <div className='text-2xl'>00:00</div>
            <div className='mt-8'>
                <button className='px-6 py-2 mr-4 text-xl transition-all duration-200 bg-red-300 rounded hover:bg-red-400 active:bg-red-500'>Stop</button>
                <button className='px-6 py-2 ml-4 text-xl transition-all duration-200 bg-green-300 rounded hover:bg-green-400 active:bg-green-500'>Start</button>
            </div>
        </div>
    
   </div>
  )
}

export default StopWatch