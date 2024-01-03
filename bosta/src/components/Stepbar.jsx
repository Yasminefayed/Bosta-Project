import React from 'react'

import "./stepbar.css";
import { ProgressBar, Step } from 'react-step-progress-bar';
import { CiCircleCheck } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 16;
  } else if (page === "pagetwo") {
    stepPercentage = 49.5;
  } else if (page === "pagethree") {
    stepPercentage = 82.5;
  } else if (page === "pagefour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
        
          >
            <p> <CiCircleCheck className='icons'/></p>
            
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            
          >
           <p> <CiCircleCheck className='icons'/></p>
          
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            
          >
            <p> <FaTruck className='icons' /></p>
            
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            
          >
            <p> <FaBoxesPacking className='icons' /></p>
            
           
          </div>
         
        )}
      </Step>
      
    </ProgressBar>
  );
};



export default MultiStepProgressBar;
