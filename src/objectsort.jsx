import React from "react";

export const ObjectSort = () => {
  var obj = [
    { id: 4, name: "abc" },
    { id: 10, name: "ab2" },
    { id: 5, name: "abc3" },
    { id: 6, name: "abc5" },
  ];

  function Sorting(property, order) {
    var sort_type = -1;
    if (order === "asc") {
      sort_type = 1;
    }
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1 * sort_type;
      } else if (a[property] > b[property]) {
        return 1 * sort_type;
      } else {
        return 0 * sort_type;
      }
    };
  }
  console.log(obj.sort(Sorting("id", "asc")));
  return (
    <div className="headertitle">
      <h1>Question No 5.</h1>
      <p>
        Assume there is a object of this formatIt can be a dictionary or java
        object, as per your language of choice. But its key/value pair This is
        not good syntax .............................. var obj = “id” : 4,
        “name” : “abc”, “id” : 10, “name” : “ab2”, “id” : 5, “name” : “abc3”,
        “id” : 6, “name” : “abc5” */ dictionary simply. Write a code to sort the
        object by id I.e final output should have objected sort by id’s
      </p>
      <h1>Result</h1>
      {obj.map((item, index) => {
        return <p>{`${item.id}--->${item.name}`}</p>;
      })}
    </div>
  );
};
