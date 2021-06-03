import React from "react";
export const consecutive = () => {
  let count = 0;
  let result = 0;
  let question = [
    1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1,
  ];
  question.map((i) => {
    if (i === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > result) {
      result = count;
    }
  });
  return (
    <div className="headertitle">
      <h1>Question 2</h1>
      <p>
        Find the maximum consecutive 1's in an array of 0's and 1's. Example: a)
        00110001001110 - Output :3 [Max num of consecutive 1's is 3] b)
        1000010001 - Output :1 [Max num of consecutive 1's is 1]
      </p>
      <h3>
        Ex. [ 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1,
        0, 1, 1, ];
      </h3>
      <h2>Result {`Max no of consecutive 1's is : ${result}`}</h2>
    </div>
  );
};
