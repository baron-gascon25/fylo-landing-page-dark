import React from "react";

const GET_STARTED_TITLE = "Get early access today";
const GET_STARTED_DESC =
  "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.";

const GetStarted = () => {
  return (
    <div className='start'>
      <h1 className='start-title'>{GET_STARTED_TITLE}</h1>
      <p className='start-desc'>{GET_STARTED_DESC}</p>
      <div className='input-button-container'>
        <input
          type='email'
          name='email'
          placeholder='email@example.com'
          className='start-input'
        />
        <button className='start-button'>Get Started For Free</button>
      </div>
    </div>
  );
};

export default GetStarted;
