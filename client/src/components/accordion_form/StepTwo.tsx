import { IData } from './Accordion';

type ISecondStep = {
  data: IData;
  next: string;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const StepTwo = ({ next, data, handleNext, handleInputChange }: ISecondStep) => {
  const errors = {
    telephone: 'Should contain 11 digits.',
    gender: 'Please select a gender.',
    date: 'Not a valid date.'
  };

  const patterns = {
    telephone: '^0[7]{1}[0-9]{1}[0-9]{8}$',
    day: '[1-9]|1[1-9]|2[0-9]|3[0-1]',
    month: '0[1-9]|1[0-2]',
    year: '(19[2-9]\\d+|20[0-2]\\d+)'
  };
  return (
    <section className="step-two">
      <div className="step-two-title" onClick={() => handleNext('second')}>
        Step 2: More comments
      </div>
      <div className={next === 'second' ? 'step-two-details' : 'hide'}>
        <div className="step-two-tel">
          <div>
            <label>Telephone number</label>
            <input
              type="text"
              name="tel"
              value={data.tel}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.telephone}
            />
            <span className="error-message">{errors.telephone}</span>
          </div>
          <div>
            <label>Gender</label>
            <select name="gender" value={data.gender} onChange={(e) => handleInputChange(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span className="error-message">{errors.gender}</span>
          </div>
        </div>
        <div className="step-two-dob">
          <label>Date of birth</label>
          <div>
            <input
              type="string"
              name="day"
              value={data.day}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.day}
            />
            <input
              type="string"
              name="month"
              value={data.month}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.month}
            />
            <input
              type="string"
              name="year"
              value={data.year}
              onChange={(e) => handleInputChange(e)}
              pattern={patterns.year}
            />
          </div>
          <span className="error-message">{errors.date}</span>
        </div>
        <button type="button" onClick={() => handleNext('third')}>
          Next{' '}
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
