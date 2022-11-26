import React from 'react';
import { IData } from './Accordion';

interface IFirstStep {
  next: string;
  data: IData;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepOne: React.FC<IFirstStep> = ({ next, data, handleNext, handleInputChange }) => {
  const errors = {
    firstName: '3-12 char, no special char or num',
    surName: '3-12 char, no special char or num',
    email: 'It should be a valid email address!'
  };

  const patterns = {
    firstName: '^[A-Za-z]{3,12}$',
    surName: '^[A-Za-z]{3,12}$'
  };

  return (
    <section className="step-one">
      <div className="step-one-title" onClick={() => handleNext('first')}>
        Step 1: Your details
      </div>
      <div className={next === 'first' ? 'step-one-details' : 'hide'}>
        <div className="step-one-name">
          <div>
            <label>First Name</label>
            <input
              className="firstname"
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.firstName}
            />
            <span className="error-message">{errors.firstName}</span>
          </div>
          <div>
            <label>Surname</label>
            <input
              className="surName"
              type="text"
              name="surName"
              value={data.surName}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.surName}
            />
            <span className="error-message">{errors.surName}</span>
          </div>
        </div>
        <div className="step-one-email">
          <label>Email Address:</label>
          <input
            className="email"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => handleInputChange(e)}
          />
          <span className="error-message">{errors.email}</span>
        </div>
        <button type="button" onClick={() => handleNext('second')}>
          Next{' '}
        </button>
      </div>
    </section>
  );
};

export default StepOne;
