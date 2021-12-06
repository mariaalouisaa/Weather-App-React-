import React, { useState } from "react";

export default function TimeAndDate(props) {
  let now = new Date();

  let hour = now.getHours();
  if (hour < 10) hour = "0" + now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) minute = "0" + now.getMinutes();
  let date = now.getDate();
  if (date < 10) date = "0" + now.getDate();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  return (
    <div className="TimeAndDate">
      <h3>
        {hour}:{minute}
      </h3>
      <h4>
        {date}-{month}-{year}
      </h4>
    </div>
  );
}
