import React from "react";

export const GeneratorNumber = ({ name, id, onHandle }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{name}</label>
      <input
        defaultValue={10}
        onChange={(e) => onHandle(e.target.value)}
        type="number"
        id={id}
        name={id}
        max="20"
        min="10"
      />
    </div>
  );
};
