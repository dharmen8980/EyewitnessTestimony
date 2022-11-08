import React, { useEffect, useState } from 'react'

const Questions = () => {

  const [currentQuestion, setCurrentQuestion] = useState(1);

  // const handleEasyAsian = (event) => {
  //   updateFormData({ easyAsian: event.target.value })
  // }

  // useEffect(() => {
  //   const timer = setTimeout(
  //     function () {
  //       console.log("here");
  //       setCurrentQuestion(currentQuestion + 1);
  //     },
  //     2000
  //   );
  //   return () => clearTimeout(timer);
  // });



  return (
    <div>
      <button onClick={() => setCurrentQuestion(currentQuestion + 1)} className="text-white">NEXT</button>
      <div></div>
      <Question1 show={currentQuestion == 1} />
      <Question2 show={currentQuestion == 2} />
    </div>
  )
}

const Question1 = ({ show }) => {
  console.log(show);
  return !show ? <></> : (
    <div id="question-1" className='mx-20'>
      <h3 className="text-white">Question 1</h3>
      <div className='py-16 grid grid-cols-2 gap-2 text-left'>
        <div className='col-1 mx-auto bg-white w-full h-[300px]'>
          <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
        </div>
        <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
          <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
        </div>
      </div>
      <div>
        <div className='mx-auto w-fit text-2xl text-yellow-400'>
          <p>Are these two people same?</p>
          <input type="radio" value="yes" name="easyAsian" />
          <label className='mx-3'>Yes</label>
          <input type="radio" value="no" name="easyAsian" />
          <label className='mx-3'>No</label>
        </div>
      </div>
    </div>
  );
}

const Question2 = ({ show }) => {

  return !show ? <></> : (

    <div id="question-2" className='mx-20'>
      <h3 className="text-white">Question 2</h3>
      <div className='py-16 grid grid-cols-2 gap-2 text-left'>
        <div className='col-1 mx-auto bg-white w-full h-[300px]'>
          <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
        </div>
        <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
          <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
        </div>
      </div>
      <div>
        <div className='mx-auto w-fit text-2xl text-yellow-400'>
          <p>Are these two people same?</p>
          <input type="radio" value="yes" name="hardAsian" />
          <label className='mx-3'>Yes</label>
          <input type="radio" value="no" name="hardAsian" />
          <label className='mx-3'>No</label>
        </div>
      </div>
    </div>
  );
}

export default Questions
