// SGN 
import React, { useState } from 'react';

const Step = ({ currentStep, formData, handleChange, onNext, onPrev, onSubmit }) => {
  const [creditCardError, setCreditCardError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');

  const handleCreditCardNumberChange = (event) => {
    const value = event.target.value;
    handleChange(event);
    
    // Validate credit card number
    if (value.replace(/\D/g, '').length === 12) {
      setCreditCardError('');
    } else {
      setCreditCardError('Credit card number must be exactly 12 digits');
    }
  };

  const handleExpiryDateChange = (event) => {
    const value = event.target.value;
    handleChange(event);
    
    // Validate expiry date format
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (regex.test(value)) {
      setExpiryDateError('');
    } else {
      setExpiryDateError('Please enter a valid MM/YY date');
    }
  };

  const isStep1 = currentStep === 1;
  const isStep2 = currentStep === 2;
  const isStep3 = currentStep === 3;

  return (
    <div>
      {isStep1 && (
        <div>
          <h2>Customer Details</h2>
          <label>
            First Name:
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </label>
          <br />
          <button onClick={onNext}>Next</button>
        </div>
      )}

      {isStep2 && (
        <div>
          <h2>Car Details</h2>
          <label>
            Car Model:
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Car Model"
            />
          </label>
          <br />
          <label>
            Car Price:
            <input
              type="text"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
              placeholder="Car Price"
            />
          </label>
          <br />
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      )}

      {isStep3 && (
        <div>
          <h2>Payment Details</h2>
          <label>
            Credit Card Number:
            <input
              type="text"
              id="card_info"
              placeholder="Enter 12-digit number"
              value={formData.card_info}
              onChange={handleCreditCardNumberChange}
            />
            {creditCardError && <p style={{ color: 'red' }}>{creditCardError}</p>}
          </label>
          <br />
          <label>
            Expiration Date (MM/YY):
            <input
              type="text"
              id="expiry_date"
              placeholder="MM/YY"
              value={formData.expiry_date}
              onChange={handleExpiryDateChange}
            />
            {expiryDateError && <p style={{ color: 'red' }}>{expiryDateError}</p>}
          </label>
          <br />
          <button onClick={onPrev}>Previous</button>
          <button
            onClick={() => {
              if (!creditCardError && !expiryDateError) onSubmit();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Step;
