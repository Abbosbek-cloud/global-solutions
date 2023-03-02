import React from "react";

const Second = () => {
  return (
    <>
      <h1>Application form</h1>
      <h2>Form 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" id="surname" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">USA</option>
            <option value="UZ">Uzbekistan</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Second;
