import React from 'react';

function SelectCity(selectCity) {
  return (
    <>
      <label for="city">Change city:</label>
      <select name="city" id="city" onChange={selectCity}>
        <option value="London">London</option>
        <option value="Malmo">Malmo</option>
        <option value="Seattle">Seattle</option>
      </select>
    </>
  );
}

export default SelectCity;