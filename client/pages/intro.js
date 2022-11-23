import React from "react";

const Intro = () => {
  return (
    <div className="w-fit my-10 ">
      <div className=" text-[#ffffff] text-xl  mx-10 md:mx-20 lg:mx-40 xl:mx-[20rem] 2xl:mx-[30rem]">
        <div className="bg-yellow-500 p-2 mb-8">
          <div className="bg-[#660000] p-4">
            <div className="overflow-auto">
              <p>
                Thank you for participating in this study in eyewitness
                testimony. First, you will need to read and sign this consent
                form which describes what you will be asked to do.
              </p>
              <p className="pt-2">
                You will first see a practice task with illustrated characters
                to familarize you with the procedure. The task will be to watch
                a video of a simulated theft, followed by a short sorting task.
                After each sorting task, you will see a sequence of 6 photgraphs
                and asked to judge whether or not this person was the one who
                was in the video.
              </p>
              <p className="pt-2">
                After the practice task, there will be 4 sets of the crime video
                followed by a sorting task and the judging of the 6 photographs.
                The whole process should take less than 30 minutes. Neither the
                videos nor the questionnaires are expected to be in any way
                disturbing.
              </p>
              <p className="pt-2">
                While this study is anonymous, you are free to quit at any time
                or skip any questions that you feel uncomfortable answering.
                Your name will not remain on the survey and any data will be
                kept secure in a locked lab room only availble to Dr. Stevens
                and his 2 student collaborators. Should this research be
                published, only group data would be reported.
              </p>
            </div>
            <p className="pt-2">
              If you have any questions or concerns you should contact Dr. Rick
              Stevens at stevens@ulm.edu or 318-342-1354.
            </p>
            <p className="pt-2">
              Are there any questions? <br />
              (after any questions are answered)
            </p>
            <br />
            <p>Do you consent to participate in this study?</p>
            <label className="mr-4">Agree</label>
            <input
              type="radio"
              name="consent"
              value="agree"
              className="mr-10"
            />
            <label className="mr-4">Do not agree</label>
            <input
              type="radio"
              name="consent"
              value="disagree"
              className="mr-10"
            />
          </div>
        </div>
        <label className="mr-1">Type your name here: </label>
        <input
          type="text"
          name="name"
          className="bg-gray-300 text-black w-[300px]"
        />
        <p className="mt-6">Gender</p>
        <div className="ml-10">
          <input
            type="radio"
            name="gender"
            value="cisgender women"
            className="mr-5"
          />
          <label>cisgender women</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="cisgender men"
            className="mr-5"
          />
          <label>cisgender men</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="transgender women"
            className="mr-5"
          />
          <label>transgender women</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="transgender men"
            className="mr-5"
          />
          <label>transgender men</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="non-binary"
            className="mr-5"
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
          />
          <label>Prefer not to respond</label>
        </div>
        <br />
        <label className="mr-2">Age:</label>
        <input
          type="number"
          name="age"
          className="w-10 h-5 bg-gray-300 text-black"
        />
        <p className="mt-6">Ethnicity</p>
        <div className="ml-10">
          <input id='option-black'type="radio" name="ethnicity" value="black" className="mr-5" />
          <label htmlFor='option-black'>Black</label>
          <br />
          <input type="radio" name="ethnicity" value="white" className="mr-5" />
          <label>White</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="native american"
            className="mr-5"
          />
          <label>Native American</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="asian, other pacific islander"
            className="mr-5"
          />
          <label>Asian, other Pacific Islander</label>
          <br />
          <input type="radio" name="ethnicity" value="other" className="mr-5" />
          <label>Other</label>
          <br />
          <input
            type="radio"
            name="ethnicity"
            value="prefer not to answer"
            className="mr-5"
          />
          <label>Prefer not to answer</label>
        </div>
        <div className="mt-8">
          <p>Now you will see...</p>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.youtube.com/embed/7PIPO-3vXtk"
            className="w-full h-[30rem]"
          ></iframe>
        </div>
        <div className="mt-6">
          <p>
            Next, you will see a series of 6 faces. For each one you are to
            designate whether this is the face you saw in the precious video or
            not. You have 3 seconds to make a decision. Following that you will
            be ask to provide a confidence rating from 1 (least confident) to 10
            (most confident).
          </p>
          <p className="mt-6 text-center">when you are ready click here</p>
        </div>
      </div>
    </div>
  );
};



export default Intro;
