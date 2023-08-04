import React, {useState} from 'react';
import {FaBars, FaWindowClose} from "react-icons/fa";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑",];
const App = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true)

    const message = messages[step - 1];

    function handelPrevious() {
        if (step > 1) setStep(s => s - 1);
    }

    function handelNext() {
        if (step < 3) setStep(s => s + 1)
    }

    function handleOpen() {
        setIsOpen(preValue => !preValue)
    }

    return (
        <>
            <button className='close' onClick={handleOpen}>
                {
                    isOpen ? <FaWindowClose/> : <FaBars/>
                }
            </button>
            {
                isOpen && (
                    <div className="steps">
                        <div className="numbers">
                            <div className={step >= 1 ? 'active' : 'inactive'}>1</div>
                            <div className={step >= 2 ? 'active' : 'inactive'}>2</div>
                            <div className={step >= 3 ? 'active' : 'inactive'}>3</div>
                        </div>
                        <p className="message">Step: {step}: {message}</p>

                        <div className="buttons">
                            <button className='btn' style={{backgroundColor: "#7950f2", color: '#fff'}}
                                    onClick={handelPrevious}>Previous
                            </button>
                            <button className='btn' style={{backgroundColor: "#7950f2", color: '#fff'}}
                                    onClick={handelNext}>Next
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default App;