import React from "react";

export const EvenNumber = () => {
  let arr = [2, 4, 5, 98, 43, 26, 23, 77, 54, 37];
  let even = [];
  arr.map((i) => {
    if (i % 2 === 0) {
      even.push(i);
    }
  });
  return (
    <div className="headertitle">
      <h1>Question 1</h1>
      <p>
        Define an array of numbers (use any random numbers). Write a program to
        print only the even numbers of the array. Do not use any library
        functions, need to do via for loops only
      </p>
      <h4>Ex. [2, 4, 5, 98, 43, 26, 23, 77, 54, 37];</h4>
      <h4>Result:-</h4>
      {even.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
};
