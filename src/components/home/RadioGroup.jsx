import { useState } from "react";
import { newArrivals as cards } from "../../data";

const RadioGroup = ({ item, handleColorChange }) => {
  
  return (
    <div className="radio-image-colors flex">
      {item.colors.map((color, index) => (
        <label htmlFor={item.id} key={index}>
          <input
            type="radio"
            name={`colors-${item.productName}`}
            id={item.id}
            value={color.label}
            onChange={() => handleColorChange(item.id, color.label)}
            checked={item.selectedColor === color.label}
          />
          <div className="radio-colors-dock">{color.label}</div>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
