import React from 'react';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import RightArrow from './RightArrow'
const LeftArrow = (props) => {
  return (
      <div className="Arrow_Cont">
    <div className="backArrow" onClick={props.onClick}>
        <FaArrowLeft aria-hidden="true" />
    </div>
    <div className="nextArrow"  onClick={props.onClick1}>
        <FaArrowRight aria-hidden="true" />
    </div> 

      </div>
  );
}

export default LeftArrow;