import React from 'react'
import $ from 'jquery'

const q8 = ({updateFormData}) => {
    const handleHardAsian = (event) => {
        updateFormData({hardAsian: event.target.value})
      }
    // setTimeout(function(){globalThis.location = '/last'}, 2000);
    
      setTimeout(function(){ 
          $('#dvData').fadeOut();}, 2000); 
    
  return (
    <div>
    <div className='mx-20'>
    <div className='py-16 grid grid-cols-2 gap-2 text-left'>
        <div className='col-1 mx-auto bg-white w-full h-[300px]' id='div1'>
        <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
        </div>
        <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]' id='div2'>
        <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
        </div>
    </div>
    <div>
    <div className='mx-auto w-fit text-2xl text-yellow-400'>
                <p>Are these two people same?</p>
                <input type="radio" value="yes" name="hardAsian"  onChange={handleHardAsian}/>
                <label className='mx-3'>Yes</label>
                <input type="radio" value="no" name="hardAsian" onChange={handleHardAsian}/>
                <label className='mx-3'>No</label>
            </div>
    </div>
    </div>
    
</div>
  )
}

export default q8