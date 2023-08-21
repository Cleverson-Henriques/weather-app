import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      <div>
        Location: {data.location.name} - {data.location.country}
      </div>
      <p style={{ display: "flex", alignItems: "center" }}>
        Condition: {data.current.condition.text} -{" "}
        <img src={data.current.condition.icon} alt="" />
      </p>
      <p>Time: {data.location.localtime}</p>

      <p>Temperature: {data.current.temp_c} C</p>

      <p>Feels like: {data.current.feelslike_c} C</p>
    </div>
  );
};

export default Data;
