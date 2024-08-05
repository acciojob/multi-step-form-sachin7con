// SGN 
import React, { useState } from 'react';

// Helper functions to validate credit card number
const isValidCreditCardNumber = (value) => {
  const cleanedValue = value.replace(/\D/g, ''); // Remove non-digit characters
  return cleanedValue.length === 12;
};

const Step = ({ currentStep, onNext, onPrev, onSubmit }) => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardError, setCreditCardError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');

  const handleCreditCardNumberChange = (event) => {
    const value = event.target.value;
    setCreditCardNumber(value);
    
    // Validate credit card number
    if (isValidCreditCardNumber(value)) {
      setCreditCardError('');
    } else {
      setCreditCardError('Credit card number must be exactly 12 digits');
    }
  };

  const handleExpiryDateChange = (event) => {
    const value = event.target.value;
    setExpiryDate(value);
    
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
            <input type="text" name="first_name" id="first_name" placeholder="" />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="last_name" id="last_name" placeholder="" />
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
            <input type="text" name="model" id="model" placeholder="" />
          </label>
          <br />
          <label>
            Car Price:
            <input type="text" id="car_price" placeholder="" />
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
              value={creditCardNumber}
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
              value={expiryDate}
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
