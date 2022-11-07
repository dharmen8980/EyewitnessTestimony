import React from 'react'

const last = ({updateFormData}) => {
  return (
    <>
    <div className='text-white text-4xl w-fit mx-auto my-10'>Thank you for taking the survey.
    </div>
    <form action='' method="post" className='text-white'>
  <label htmlFor="first">First name:</label>
  <input type="text" id="first" name="first" className='text-black' />
  <label htmlFor="last">Last name:</label>
  <input type="text" id="last" name="last" className='text-black'/>
  <button type="submit" >Submit</button>
</form>
    </>
    
  )
}

export default last