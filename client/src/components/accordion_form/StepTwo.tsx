import { IData } from './Accordion';

type ISecondStep = {
  next: string;
  data: IData;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const StepTwo = ({ next, handleNext, data, handleInputChange }: ISecondStep) => {
  return (
    <section className="step-two">
      <div className="step-two-title" onClick={() => handleNext('second')}>
        Step 2: More comments
      </div>
      <div className={next === 'second' ? 'step-two-details' : 'hide'}>
        <div className="step-two-tel">
          <div>
            <label>Telephone number</label>
            <input type="text" name="tel" value={data.tel} onChange={(e) => handleInputChange(e)} />
          </div>
          <div>
            <label>Gender</label>
            <select name="gender" value={data.gender} onChange={(e) => handleInputChange(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="step-two-dob">
          <label>Date of birth</label>
          <div>
            <input type="string" name="day" value={data.day} onChange={(e) => handleInputChange(e)} />
            <input type="string" name="month" value={data.month} onChange={(e) => handleInputChange(e)} />
            <input type="string" name="year" value={data.year} onChange={(e) => handleInputChange(e)} />
          </div>
        </div>
        <button onClick={() => handleNext('three')}>Next </button>
      </div>
    </section>
  );
};

export default StepTwo;
