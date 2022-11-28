import React, { useState, useEffect } from 'react'
import Test2 from './test2'

const Test1 = () => {

    // const initialData = {
        
    //         option1: "Hello",
    //         option2: "",
    //         option3: "",
    //         option4: "",
        
    // }
    
    // const [firstRes, setFirstRes] = useState(initialData);
    // const [secRes, setSecRes] = useState(initialData);
    // const [thirdRes, setThirdRes] = useState(initialData);
    // const [fourthRes, setFourthRes] = useState(initialData);
    const [ counter, setCounter ] = useState(0);

    const initialResponse = {
        name: "",
      };
    
      const [response, onResponseChange] = useState(initialResponse);
      const [response1, onResponse1Change] = useState(initialResponse);

    const onQuestionResponse = (questionId, value) => {
        onResponseChange({ ...response, [questionId]: value });
      };
      const onQuestionResponse1 = (questionId, value) => {
        onResponse1Change({ ...response, [questionId]: value });
      };

    const change = () => {
        setCounter(counter-1);
    }
  return (
    <div className='text-center my-10 text-2xl text-white '>
        <p>test1</p>
        {counter}
        <div >
            <button className='bg-blue-500 py-0.5 px-2 m-2'
            onClick={() => setCounter(counter+1)}>
            switchandIncrease</button>
        </div>
        <p>Hello {response.name}</p>
        <p>{response1.name}</p>
        <div >
            <button className='bg-blue-500 py-0.5 px-2 m-2'
            onClick={() => onQuestionResponse("name", "Dharmedra")}>
            Change1</button>
            <button className='bg-blue-500 py-0.5 px-2 m-2'
            onClick={() => onQuestionResponse1("name", "Dikshita")}>
            Change2</button>
        </div>
        <Test2 counter={counter} setCounter={setCounter} change={change}/>
        </div>
  )
}

export default Test1;