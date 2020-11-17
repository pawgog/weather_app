import React from 'react';

function SelectCity({ selectCity }) {
  return (
    <>
      <label htmlFor="city">Change city:</label>
      <select name="city" id="city" onChange={(e) => selectCity(e.target)}>
        <option value="London">London</option>
        <option value="Malmo">Malmo</option>
        <option value="Seattle">Seattle</option>
      </select>
    </>
  );
}

export default SelectCity;