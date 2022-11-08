import React, { useState, useEffect } from "react";

const Questions = ({ onQuestionResponse, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState();

    useEffect(() => {
        const timer = setTimeout(
            function () {
                // console.log("here");
                const maxQuestion = 4;
                const isDone = currentQuestion === maxQuestion;
                if (isDone) {
                    onComplete();
                    // globalThis.location = '/last';
                }
                else {
                    setCurrentQuestion(currentQuestion + 1);
                }
            },
            2000
        );
        return () => clearTimeout(timer);
    });




    return (
        <div>
            {/* <button onClick={() => setCurrentQuestion(currentQuestion + 1)} className="text-white">NEXT</button> */}
            <div></div>
            <Question1 show={currentQuestion == 1} onAnswer={onQuestionResponse} />
            <Question2 show={currentQuestion == 2} onAnswer={onQuestionResponse} />
            <Question3 show={currentQuestion == 3} onAnswer={onQuestionResponse} />
            <Question4 show={currentQuestion == 4} onAnswer={onQuestionResponse} />
        </div>

    );
}


const Question1 = ({ show, onAnswer }) => {

    const onRadioClick = (event) => onAnswer('q1', event.target.value);

    // console.log(show);
    return !show ? <></> : (
        <div id="question-1" className='mx-20'>
            <h3 className="text-white">Question 1</h3>
            <div className='py-16 grid grid-cols-2 gap-2 text-left'>
                <div className='col-1 mx-auto bg-white w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
                </div>
                <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
                </div>
            </div>
            <div>
                <div className='mx-auto w-fit text-2xl text-yellow-400'>
                    <p>Are these two people same?</p>
                    <input type="radio" value="yes" onClick={onRadioClick} name="easyAsian" />
                    <label className='mx-3'>Yes</label>
                    <input type="radio" value="no" name="easyAsian" onClick={onRadioClick} />
                    <label className='mx-3'>No</label>
                </div>
            </div>
        </div>
    );
}

const Question2 = ({ show, onAnswer }) => {

    const onRadioClick = (event) => onAnswer('q2', event.target.value);

    return !show ? <></> : (

        <div id="question-2" className='mx-20'>
            <h3 className="text-white">Question 2</h3>
            <div className='py-16 grid grid-cols-2 gap-2 text-left'>
                <div className='col-1 mx-auto bg-white w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
                </div>
                <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
                </div>
            </div>
            <div>
                <div className='mx-auto w-fit text-2xl text-yellow-400'>
                    <p>Are these two people same?</p>
                    <input type="radio" value="yes" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>Yes</label>
                    <input type="radio" value="no" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>No</label>
                </div>
            </div>
        </div>
    );
}



const Question3 = ({ show, onAnswer }) => {
    const onRadioClick = (event) => onAnswer('q3', event.target.value);


    return !show ? <></> : (
        <div id="question-3" className='mx-20'>
            <h3 className="text-white">Question 3</h3>
            <div className='py-16 grid grid-cols-2 gap-2 text-left'>
                <div className='col-1 mx-auto bg-white w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
                </div>
                <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
                </div>
            </div>
            <div>
                <div className='mx-auto w-fit text-2xl text-yellow-400'>
                    <p>Are these two people same?</p>
                    <input type="radio" value="yes" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>Yes</label>
                    <input type="radio" value="no" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>No</label>
                </div>
            </div>
        </div>
    );
}


const Question4 = ({ show, onAnswer }) => {
    const onRadioClick = (event) => onAnswer('q4', event.target.value);

    return !show ? <></> : (

        <div id="question-4" className='mx-20'>
            <h3 className="text-white">Question 4</h3>
            <div className='py-16 grid grid-cols-2 gap-2 text-left'>
                <div className='col-1 mx-auto bg-white w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-1</p>
                </div>
                <div className='col-2 mx-auto bg-yellow-50 w-full h-[300px]'>
                    <p className='text-black text-center text-2xl font-semibold'>Subject-2</p>
                </div>
            </div>
            <div>
                <div className='mx-auto w-fit text-2xl text-yellow-400'>
                    <p>Are these two people same?</p>
                    <input type="radio" value="yes" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>Yes</label>
                    <input type="radio" value="no" name="hardAsian" onClick={onRadioClick} />
                    <label className='mx-3'>No</label>
                </div>
            </div>
        </div>
    );
}