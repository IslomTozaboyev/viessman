import React from "react";
import BackWrapper from "../../Wrappers/backWrapper";

const Back = ({ title, subtitle }) => {
  return (
    <BackWrapper>
      <div className="back">
        <div className="text_back">
          <h1 className="text">{title}</h1>
          <p className="fw-bold fs-5">{subtitle}</p>
        </div>
      </div>
    </BackWrapper>
  );
};

export default Back;
