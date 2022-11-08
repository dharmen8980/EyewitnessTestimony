

const Question1 = ({ show }) => {
    console.log(show);
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
                    <input type="radio" value="yes" name="easyAsian" />
                    <label className='mx-3'>Yes</label>
                    <input type="radio" value="no" name="easyAsian" />
                    <label className='mx-3'>No</label>
                </div>
            </div>
        </div>
    );
};