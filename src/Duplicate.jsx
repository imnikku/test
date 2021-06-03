import React from "react";
export const Duplicate = () => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[i]);
      }
    }
  }
  return (
    <div className="headertitle">
      <h1>Question 3</h1>
      <p>
        Suppose you have an array of 101 integers. This array is already sorted
        and all numbers in this array are consecutive. Each number only occurs
        once in the array except one number which occurs twice. Write a js code
        to find the repeated number. e.g $arr =
        array(0,1,2,3,4,5,6,7,7,8,9,10...................);
      </p>
      <h4>Ex. [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];</h4>

      <h3>Result:-</h3>
      {temp.map((i, index) => {
        return <h5 key={index}>{i}</h5>;
      })}
    </div>
  );
};
