import React, { useState } from 'react';
import './accordion.scss';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export type IData = {
  firstName: string;
  surName: string;
  email: string;
  tel: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  comments: string;
};

const Accordion: React.FC = () => {
  const [next, setNext] = useState('first');
  const [data, setData] = useState<IData>({
    firstName: '',
    surName: '',
    email: '',
    tel: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    comments: ''
  });

  // handle inputs dinamyc
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // handle next page
  const handleNext = (arg: string) => {
    setNext(arg);
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <StepOne handleNext={handleNext} next={next} data={data} handleInputChange={handleInputChange} />
        <StepTwo handleNext={handleNext} next={next} data={data} handleInputChange={handleInputChange} />
        <StepThree handleNext={handleNext} next={next} data={data} handleInputChange={handleInputChange} setData={setData} />
      </div>
    </div>
  );
};

export default Accordion;
