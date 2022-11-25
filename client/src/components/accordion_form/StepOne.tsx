import React from 'react';
import { IData } from './Accordion';

type IFirstStep = {
  next: string;
  data: IData;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StepOne = ({ next, handleNext, data, handleInputChange }: IFirstStep) => {
  return (
    <section className="step-one">
      <div className="step-one-title">Step 1: Your details</div>
      <div className={next === 'first' ? 'step-one-details' : 'hide'}>
        <div className="step-one-name">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={data.firstName} onChange={(e) => handleInputChange(e)} required />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" name="surName" value={data.surName} onChange={(e) => handleInputChange(e)} required />
          </div>
        </div>
        <div className="step-one-email">
          <label>Email Address:</label>
          <input type="email" name="email" value={data.email} onChange={(e) => handleInputChange(e)} required />
        </div>
        <button onClick={() => handleNext('second')}>Next </button>
      </div>
    </section>
  );
};

export default StepOne;
