import React from 'react';

const EndOfSample = ({started, onStart}) => {
  return (
    <div className=" text-[#ffffff] text-xl mt-10 mx-10 md:mx-20 lg:mx-40 xl:mx-[20rem] 2xl:mx-[30rem]">
        <div className='text-center space-y-10'>
        <p>That was a simulation of the upcoming task. Are there any questions?
        </p>
        <p>The first taks will be the African American Female trial.</p>
        <p>Click <span className='font-bold'>Start</span> to Continue</p>
        </div>
        <div className='w-fit mx-auto'>
        <button className="text-white bg-blue-500 px-6 py-1 rounded-md" onClick={() => onStart(true)}>
          Start
        </button>
      </div>
    </div>
  )
}

export default EndOfSample