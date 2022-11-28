import React from "react";

const Intro = ({ onQuestionResponse }) => {
  return (
    <div className="w-fit my-10 ">
      <div className=" text-[#ffffff] text-xl  mx-10 md:mx-20 lg:mx-40 xl:mx-[20rem] 2xl:mx-[30rem]">
        <label className="mr-1">Type your name here: </label>
        <input
          type="text"
          name="name"
          className="bg-gray-300 text-black w-[300px]"
          onChange={() => onQuestionResponse("name", event.target.value)}
        />
        <p className="mt-6">Gender</p>
        <div className="ml-10">
          <input
            type="radio"
            name="gender"
            value="cisgender women"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>cisgender women</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="cisgender men"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>cisgender men</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="transgender women"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>transgender women</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="transgender men"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>transgender men</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="non-binary"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>non-binary</label>
          <br />
          <input type="radio" name="gender" value="other" className="mr-5" />
          <label>Other</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="prefer not to respond"
            className="mr-5"
            onClick={() => onQuestionResponse("gender", event.target.value)}
          />
          <label>Prefer not to respond</label>
        </div>
        <br />
        <label className="mr-2">Age:</label>
        <input
          type="number"
          name="age"
          className="w-10 h-5 bg-gray-300 text-black"
          onChange={() => onQuestionResponse("age", event.target.value)}
        />
        <p className="mt-6">Ethnicity</p>
        <div className="ml-10">
          <input
            id="option-black"
            type="radio"
            name="ethnicity"
            value="black"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label htmlFor="option-black">Black</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="white"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label>White</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="native american"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label>Native American</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="asian, other pacific islander"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label>Asian, other Pacific Islander</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="other"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label>Other</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="prefer not to answer"
            className="mr-5"
            onClick={() => onQuestionResponse("ethnicity", event.target.value)}
          />
          <label>Prefer not to answer</label>
        </div>
        <div className="mt-8">
          <p>Now you will see...</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
