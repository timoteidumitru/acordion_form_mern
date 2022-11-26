import React, { useEffect, useState } from 'react';
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

const Accordion = () => {
  const [next, setNext] = useState('first');
  const [success, setSuccess] = useState(false);
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

  useEffect(() => {
    setTimeout(function () {
      setSuccess(false);
    }, 5000);
  }, [success]);

  // handle inputs dinamyc
  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement | HTMLFormElement>
  ) => {
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
    if (!/^[A-Za-z]{3,12}$/.test(data.firstName) || !/^[A-Za-z]{3,12}$/.test(data.surName)) {
      arg = 'first';
    } else if (
      !/^0[7]{1}[0-9]{1}[0-9]{8}$/.test(data.tel) ||
      !/[1-9]|1[1-9]|2[0-9]|3[0-1]/.test(data.day) ||
      !/0[1-9]|1[0-2]/.test(data.month) ||
      !/(19[2-9]\d+|20[0-2]\d+)/.test(data.year)
    ) {
      arg = 'second';
    }

    setNext(arg);
  };

  // handle POST request to server
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const sendData = Object.fromEntries(data.entries());
    console.log("Data you've send to server : ", Object.fromEntries(data.entries()));
    fetch('http://localhost:9090/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    })
      .then((res) => res.json())
      .then((result) => console.log('Response received from server: ', result.user || result.error.details[0]))
      .catch((err) => console.log('Error on POST data ', err));

    setSuccess(true);

    setData({
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

    handleNext('first');
  };

  return (
    <div className="wrapper">
      {success && <h3 className="success-msg">Check console for the response from sever.</h3>}
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <StepOne next={next} data={data} handleNext={handleNext} handleInputChange={handleInputChange} />
        <StepTwo next={next} data={data} handleInputChange={handleInputChange} handleNext={handleNext} />
        <StepThree next={next} data={data} handleNext={handleNext} handleInputChange={handleInputChange} />
      </form>
    </div>
  );
};

export default Accordion;
