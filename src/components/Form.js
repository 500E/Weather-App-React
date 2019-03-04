import React from "react";

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City name" />
      <input type="text" name="country" placeholder="Country name" />
      <button>get weather</button>
    </form>
  );
};

export default Form;
