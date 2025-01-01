import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5 '>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
      <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='mt-2 text-sm'>{data.taskDescription}</p>
    
    <div className="mt-4">
        <button className='w-full  bg-green-600 py-1 px-2 text-sm font-semibold rounded'>Accept Task</button>
    </div>
    </div>  
  )
}

export default NewTask