import React from "react";

export const GeneratorCheck = ({ name, id, onHandle }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{name}</label>
      <input
        defaultChecked={true}
        onChange={(e) => {
          onHandle(e.target.checked);
        }}
        type="checkbox"
        id={id}
        name={id}
      />
    </div>
  );
};
