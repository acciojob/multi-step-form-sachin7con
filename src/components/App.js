// SGN { useState } from "react";
import './../s
import React, tyles/App.css';
import Step from './Step';

const App = () => {
    const[currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  }
  const handleSubmit = () => {
      console.log("Submitted");
  }

  return (
    <div>
        {/*SGN Do not remove the main div */}
        <Step currentStep={currentStep} onNext={handleNext} onPrev={handlePrev} onSubmit={handleSubmit} />

    </div>
  );
};

export default App
