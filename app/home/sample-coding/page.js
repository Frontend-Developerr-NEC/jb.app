"use client";
import React, { useEffect } from "react";
import "./coding.css";

function TestedCoding() {
  const pg1 = `
      <pre> arr = [10,24,5,30,50,39] </pre>
      <pre> arr.forEach((val) => {</pre>
      <pre> if (val > largest) { </pre>
      <pre> largest = val </pre>
      <pre> } </pre>
      <pre> }) </pre>
      
        `;
  const inp1 = `
 <pre>10,24,5,30,50,39</pre>
 `;
  const pg2 = `
      <pre> arr = [10,24,5,30,50,39] </pre>
      <pre> arr.forEach((val) => {</pre>
      <pre> if (val < largest) { </pre>
      <pre> largest = val </pre>
      <pre> } </pre>
      <pre> }) </pre>
      
        `;
  const inp2 = `
 <pre>10,24,5,30,50,39</pre>
 `;

  const pg3 = `
      <pre> arr = [10,24,5,30,50,39] </pre>
      <pre> arr.forEach((val) => {</pre>
      <pre> if (val < largestInt && smallestInt < largestInt) { </pre>
      <pre> largest = val </pre>
      <pre> } </pre>
      <pre> }) </pre>
      
        `;
  const inp3 = `
 <pre>10,24,5,30,50,39</pre>
 `;

  const pg4 = `
      <pre> arr = [10,24,5,30,50,39] </pre>
      <pre> arr.forEach((val) => {</pre>
      <pre> if (val < largestInt && smallestInt < largestInt) { </pre>
      <pre> largest = val </pre>
      <pre> } </pre>
      <pre> }) </pre>
      
        `;
  const inp4 = `
 <pre>10,24,5,30,50,39</pre>
 `;

  useEffect(() => {
    try {
      const arr1 = [10,24,5,30,50,39];

      let largestValueArray = arr1[0];
      let smallestValueArray = arr1[0];
      //PG1
      const codingTxtWrapper = document.querySelector(".codingTxtWrapper");
      const inputTxtWrapper = document.querySelector(".inputTxtWrapper");
      const outputTxtWrapper = document.querySelector(".outputTxtWrapper");
      //PG2
      const codingTxtWrapper2 = document.querySelector(
        ".codingWrapper2 .codingWrapper .codingTxtWrapper"
      );
      const inputTxtWrapper2 = document.querySelector(
        ".codingWrapper2 .inputWrapper .inputTxtWrapper"
      );
      const outputTxtWrapper2 = document.querySelector(
        ".codingWrapper2 .outputWrapper .outputTxtWrapper"
      );

      //PG3
      const codingTxtWrapper3 = document.querySelector(
        ".codingWrapper3 .codingWrapper .codingTxtWrapper"
      );
      const inputTxtWrapper3 = document.querySelector(
        ".codingWrapper3 .inputWrapper .inputTxtWrapper"
      );
      const outputTxtWrapper3 = document.querySelector(
        ".codingWrapper3 .outputWrapper .outputTxtWrapper"
      );

      //PG4
      const codingTxtWrapper4 = document.querySelector(
        ".codingWrapper4 .codingWrapper .codingTxtWrapper"
      );
      const inputTxtWrapper4 = document.querySelector(
        ".codingWrapper4 .inputWrapper .inputTxtWrapper"
      );
      const outputTxtWrapper4 = document.querySelector(
        ".codingWrapper4 .outputWrapper .outputTxtWrapper"
      );

      // PG1
      arr1.forEach((val) => {
        if (val > largestValueArray) {
          largestValueArray = val;
        }
      });

      const op1 = `
      <pre>${largestValueArray}</pre>`;

      codingTxtWrapper.outerHTML = `${pg1}`;
      inputTxtWrapper.outerHTML = `${inp1}`;
      outputTxtWrapper.outerHTML = `${op1}`;

      // PG2
      arr1.forEach((val) => {
        if (val < largestValueArray) {
          smallestValueArray = val;
        }
      });

      const op2 = `
      <pre>${smallestValueArray}</pre>`;

      codingTxtWrapper2.outerHTML = `${pg2}`;
      inputTxtWrapper2.outerHTML = `${inp2}`;
      outputTxtWrapper2.outerHTML = `${op2}`;

      // PG3
      let slv = arr1[0];
      arr1.forEach((val) => {
        if (val < largestValueArray && smallestValueArray < largestValueArray) {
          slv = val;
        }
      });

      const op3 = `
      <pre>${slv}</pre>`;

      codingTxtWrapper3.outerHTML = `${pg3}`;
      inputTxtWrapper3.outerHTML = `${inp3}`;
      outputTxtWrapper3.outerHTML = `${op3}`;

      //PG4
      let ssv = arr1[0];
      arr1.forEach((val) => {
        if (val << ssv) {
          ssv = val;
        }
      });
      const op4 = `
      <pre>${ssv}</pre>`;

      codingTxtWrapper4.outerHTML = `${pg4}`;
      inputTxtWrapper4.outerHTML = `${inp4}`;
      outputTxtWrapper4.outerHTML = `${op4}`;
      
    } catch (error) {
      console.log(error.message);
    }
  });
  return (
    <>
      <div className="codingContainer">
        <div className="codingWrapperContainer">
          <div className="codingWrapper1">
            <h4>Find Largest Integer In Array</h4>
            <h4>Coding</h4>
            <div className="codingWrapper">
              <span className="codingTxtWrapper"></span>
            </div>
            <h4>Input</h4>
            <div className="inputWrapper">
              <span className="inputTxtWrapper"></span>
            </div>
            <h4>Output</h4>
            <div className="outputWrapper">
              <span className="outputTxtWrapper"></span>
            </div>
          </div>

          <div className="codingWrapper2">
            <h4>Find Smallest Integer In Array</h4>
            <h4>Coding</h4>
            <div className="codingWrapper">
              <span className="codingTxtWrapper"></span>
            </div>
            <h4>Input</h4>
            <div className="inputWrapper">
              <span className="inputTxtWrapper"></span>
            </div>
            <h4>Output</h4>
            <div className="outputWrapper">
              <span className="outputTxtWrapper"></span>
            </div>
          </div>

          <div className="codingWrapper3">
            <h4>Find 2nd Largest Integer In Array</h4>
            <h4>Coding</h4>
            <div className="codingWrapper">
              <span className="codingTxtWrapper"></span>
            </div>
            <h4>Input</h4>
            <div className="inputWrapper">
              <span className="inputTxtWrapper"></span>
            </div>
            <h4>Output</h4>
            <div className="outputWrapper">
              <span className="outputTxtWrapper"></span>
            </div>
          </div>

          <div className="codingWrapper4">
            <h4>Find 2nd Smallest Integer In Array</h4>
            <h4>Coding</h4>
            <div className="codingWrapper">
              <span className="codingTxtWrapper"></span>
            </div>
            <h4>Input</h4>
            <div className="inputWrapper">
              <span className="inputTxtWrapper"></span>
            </div>
            <h4>Output</h4>
            <div className="outputWrapper">
              <span className="outputTxtWrapper"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestedCoding;
