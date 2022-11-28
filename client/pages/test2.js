import React from 'react'

const Test2 = ({counter, setCounter, change }) => {
    const onChange = () => {
        change();
    }
  return (
    <div className='text-center my-10 text-2xl text-white '>
        <p>test2</p>
        {counter}
        <div >
            <button className='bg-yellow-500 py-0.5 px-2 m-2'
            onClick={onChange}>
            switchandDecrease</button>
        </div>
    </div>
  )
}



export default Test2