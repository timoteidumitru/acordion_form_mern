import { IData } from './Accordion';

type IThirdStep = {
  next: string;
  data: IData;
  handleNext: (el: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const StepThree = ({ next, data, handleNext, handleInputChange }: IThirdStep) => {
  const errors = {
    comments: 'Should be at least 5 char.'
  };
  return (
    <section className="step-three">
      <div className="step-three-title" onClick={() => handleNext('third')}>
        Step 3: More comments
      </div>
      <div className={next === 'third' ? 'step-three-details' : 'hide'}>
        <label>Comments</label>
        <div>
          <textarea
            name="comments"
            value={data.comments}
            onChange={(e) => handleInputChange(e)}
            minLength={5}
            maxLength={150}
            required
          ></textarea>
          <span className="error-message">{errors.comments}</span>
          <button>
            Next <span className="chevron right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
