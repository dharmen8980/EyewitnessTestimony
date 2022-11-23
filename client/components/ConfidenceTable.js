import React from "react";

const ConfidenceTable = () => {
    return (
      <div>
        <p className="mt-6">Was this the person you saw?</p>
        <input type="radio" id="resYes" name="q1" value="yes" className="mr-2" />
        <label htmlFor="resYes" className="mr-8">
          Yes
        </label>
        <input type="radio" id="resNo" name="q1" value="yes" className="mr-2" />
        <label htmlFor="resNo">No</label>
        <p className="mt-6 mb-2 text-lg">How confident are you?</p>
        <div className="grid grid-cols-10 w-fit text-center">
          <p>
            1 <br />
            Strongly
            <br /> disagree
            <br />
            <input type="radio" name="confidence" value="1" className="mt-4" />
          </p>
          <p>
            2<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="2" className="mt-4" />
          </p>
          <p>
            3<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="3" className="mt-4" />
          </p>
          <p>
            4<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="4" className="mt-4" />
          </p>
          <p>
            5<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="5" className="mt-4" />
          </p>
          <p>
            6<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="6" className="mt-4" />
          </p>
          <p>
            7<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="7" className="mt-4" />
          </p>
          <p>
            8<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="8" className="mt-4" />
          </p>
          <p>
            9<br />
            <br />
            <br />
            <input type="radio" name="confidence" value="9" className="mt-4" />
          </p>
          <p>
            10
            <br />
            Strongly
            <br />
            agree
            <br />
            <input type="radio" name="confidence" value="10" className="mt-4" />
          </p>
        </div>
      </div>
    );
  };

  export default ConfidenceTable;