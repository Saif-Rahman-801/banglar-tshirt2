import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ring}) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself ring={ring} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Father;
