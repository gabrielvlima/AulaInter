import React from "react";

import { StyledRadio } from "./styles";

function Radio(props) {
  return (
    <StyledRadio>
      <label className="container">
        {props.text}
        <input
          type="radio"
          id={props.id}
          name={props.name}
          checked={props.checked}
          {...props}
        />
        <span className="checkmark"></span>
      </label>
    </StyledRadio>
  );
}

export default Radio;
