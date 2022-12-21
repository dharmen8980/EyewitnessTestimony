import React, {useState} from "react";

const Agreement = ({recordInfo, setRecordInfo}) => {
  const [contract, setContract] = useState("");
  const [display, setDisplay] = useState(true);

  const CheckAgreement = () => {
    if (contract == "disagree") {
      globalThis.location = "/last";
    } else if (contract == "agree") {
      setDisplay(!display);
      setRecordInfo(true);
    }

  };
  return display ? (
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
              onClick={() => setContract("agree")}
            />
            <label className="mr-4">Do not agree</label>
            <input
              type="radio"
              name="consent"
              value="disagree"
              className="mr-10"
              onClick={() => setContract("disagree")}
            />
            <div className="w-fit mx-auto my-2">
                <button 
                className="bg-blue-600 px-3 py-0.5 rounded-md hover:bg-blue-500"
                onClick={
                  CheckAgreement}
                >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Agreement;
