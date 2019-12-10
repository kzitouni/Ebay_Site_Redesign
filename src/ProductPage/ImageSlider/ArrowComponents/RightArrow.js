import React from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const RightArrow = (props) => {
  return (
    <div className="nextArrow"  onClick={props.onClick1}>
        <FaArrowRight aria-hidden="true" />
    </div>
  );
}

export default RightArrow;