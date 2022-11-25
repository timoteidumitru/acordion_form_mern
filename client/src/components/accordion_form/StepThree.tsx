import { Dispatch, SetStateAction } from 'react';
import { IData } from './Accordion';

type ISecondStep = {
  next: string;
  data: IData;
  setData: (el: SetStateAction<IData>) => void;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const StepThree = ({ next, handleNext, data, handleInputChange, setData }: ISecondStep) => {
  // send data to server
  const saveData = () => {
    fetch('http://localhost:9090/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => console.log('Data received from server: ', result))
      .catch((err) => console.log('Error on POST data ', err));
  };

  // handle submit and reset fields
  const handleSubmit = () => {
    saveData();
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
    <section className="step-three">
      <div className="step-three-title" onClick={() => handleNext('three')}>
        Step 3: More comments
      </div>
      <div className={next === 'three' ? 'step-three-details' : 'hide'}>
        <label>Comments</label>
        <div>
          <textarea name="comments" value={data.comments} onChange={(e) => handleInputChange(e)}></textarea>
          <button onClick={() => handleSubmit()}>Next </button>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
