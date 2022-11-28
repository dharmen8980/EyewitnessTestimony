import React from "react";

const ConfidenceTable = ({onConfidence}) => {
    return (
      <div>
        <p className="mt-6">Was this the person you saw?</p>
        <input type="radio" id="resYes" name="q1" value="yes" className="mr-2" onClick={onConfidence} />
        <label htmlFor="resYes" className="mr-8">
          Yes
        </label>
        <input type="radio" id="resNo" name="q1" value="yes" className="mr-2" onClick={onConfidence}/>
        <label htmlFor="resNo">No</label>
        <p className="mt-6 mb-2 text-lg">How confident are you?</p>
        <div className="grid grid-cols-10 w-fit text-center">
          <div>
            <p>1</p>
            <p>Strongly</p>
            <p>Disagree</p>
            <input type="radio" name="confidence" value="1" className="mt-4" />
          </div>
          <div>
            <p className="mb-14">2</p>
            <input type="radio" name="confidence" value="2" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">3</p>
            <input type="radio" name="confidence" value="3" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">4</p>
            <input type="radio" name="confidence" value="4" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">5</p>
            <input type="radio" name="confidence" value="5" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">6</p>
            <input type="radio" name="confidence" value="6" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">7</p>
            <input type="radio" name="confidence" value="7" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">8</p>
            <input type="radio" name="confidence" value="8" className="mt-4" />
          </div>
          <div>
          <p className="mb-14">9</p>
            <input type="radio" name="confidence" value="9" className="mt-4" />
          </div>
          <div>
          <p>10</p>
          <p>Strongly</p>
          <p>Agree</p>
            <input type="radio" name="confidence" value="10" className="mt-4" />
          </div>
        </div>
      </div>
    );
  };

  export default ConfidenceTable;