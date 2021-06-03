// import { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
export const FatchApi = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const maindata = await res.json();
    setdata(maindata);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="headertitle">
      <h1>Question 4</h1>
      <p>
        Let’s see we an api url
        https://my-json-server.typicode.com/typicode/demo/posts Write a sample
        code to call this rest api and display the result.
      </p>
      <h3>Some Data</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
