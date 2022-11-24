import React from 'react';
import './accordion.scss';

const Accordion: React.FC = () => {
  return (
    <div className="wrapper">
      <form name="message">
        <div className="form-container">
          <section className="step-one">
            <div className="step-one-title">Step 1: Your details</div>
            <div className="step-one-details">
              <div className="step-one-name">
                <div>
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Surname</label>
                  <input type="text" />
                </div>
              </div>
              <div className="step-one-email">
                <label>Email Address:</label>
                <input type="email" />
              </div>
              <button>Next </button>
            </div>
          </section>
          <section className="step-two">
            <div className="step-two-title">Step 2: More comments</div>
            <div className="step-two-details">
              <div className="step-two-tel">
                <div>
                  <label>Telephone number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Gender</label>
                  <select name="select-gender">
                    <option value="" selected disabled hidden>
                      Select Gender
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </div>
              </div>
              <div className="step-two-dob">
                <label>Date of birth</label>
                <div>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <button>Next </button>
            </div>
          </section>
          <section className="step-three">
            <div className="step-three-title">Step 3: More comments</div>
            <div className="step-three-details">
              <label>Comments</label>
              <textarea></textarea>
              <button>Next </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Accordion;
