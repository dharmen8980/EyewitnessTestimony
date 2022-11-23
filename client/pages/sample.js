import React from "react";
import { useState, useEffect } from "react";
import ConfidenceTable from "../components/ConfidenceTable";


const Sample = ({started, onStart}) => {
    const [currentSample, setSample] = useState(1);
    const somevalue = 20;

useEffect(() => {
    const timer = setTimeout(function () {
        console.log("Timer is working");
        console.log(somevalue);
        console.log(currentSample);
      const maxSample = 7;
      const isDone = currentSample === maxSample;
      if (!isDone) {
        setSample(currentSample + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="text-white w-fit mx-auto my-6">
      samples
      <Sample1 show = {currentSample == 1}/>
      <Sample2 show = {currentSample == 2}/>
      <Sample3 show = {currentSample == 3}/>
      <Sample4 show = {currentSample == 4}/>
      <Sample5 show = {currentSample == 5}/>
      <Sample6 show = {currentSample == 6}/>
      <EndOfSample show = {currentSample == 7} started={started} onStart={onStart}/>
    </div>
  );
};

const Sample1 = ({show}) => {
  return show ? (
    <div className="mt-6 text-white">
    {console.log(show)}
      <div>
        <img
          src="Picture1.svg"
          alt="sampleImage1"
          className="w-[400px] h-[400px] mx-auto"
        />
      </div>
      <ConfidenceTable />
    </div>
  ) : (<></>);
};
const Sample2 = ({show}) => {
  return show ? ( <div>
    {console.log(show)}
     <div className="mt-6 text-white">
      <div>
        <img
          src="Picture2.svg"
          alt="sampleImage1"
          className="w-[400px] h-[400px] mx-auto"
        />
      </div>
      <ConfidenceTable />
    </div>
  </div>) : (<></>);
};

const Sample3 = ({show}) => {
    return show ? (
        <div className="mt-6 text-white ease-in">
            {console.log(show)}
          <div>
            <img
              src="Picture3.svg"
              alt="sampleImage1"
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
          <ConfidenceTable />
        </div>
      ) : (<></>);
};
const Sample4 = ({show}) => {
    return show ? ( <div>
        <div className="mt-6 text-white">
        {console.log(show)}
         <div>
           <img
             src="Picture4.svg"
             alt="sampleImage1"
             className="w-[400px] h-[400px] mx-auto"
           />
         </div>
         <ConfidenceTable />
       </div>
     </div>) : (<></>);
};
const Sample5 = ({show}) => {
    return show ? (
        <div className="mt-6 text-white">
            {console.log(show)}
          <div>
            <img
              src="Picture5.svg"
              alt="sampleImage1"
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
          <ConfidenceTable />
        </div>
      ) : (<></>);
};
const Sample6 = ({show}) => {
    return show ? ( <div>
        <div className="mt-6 text-white ease-in">
        {console.log(show)}
         <div>
           <img
             src="Picture6.svg"
             alt="sampleImage1"
             className="w-[400px] h-[400px] mx-auto"
           />
         </div>
         <ConfidenceTable />
       </div>
     </div>) : (<></>);
};

const EndOfSample = ({show, started, onStart}) => {
    return show ? (
        <div>
            <p>This is the end of the survey.</p>
            <div className='w-fit mx-auto my-8'>
        <button className="text-white bg-blue-500 px-6 py-1 rounded-md" onClick={() => onStart(true)}>
          Start
        </button>
      </div>
        </div>
    ) : (<></>);
}

export default Sample;
