import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Input({ label, type, name, value, onChange }) {
  return (
    <>
      <div className="form-group">
        <label>
          {label}
          <input
            className="form-control"
            type={type}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
}

export default Input;
