import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="text-transparent font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text mt-10 text-xl title">
      {title}
    </h1>
  );
};

export default Title;
