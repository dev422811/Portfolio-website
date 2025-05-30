import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28 flex justify-center items-center" key={name}>
      <img src={icon} alt={name} className="w-24 h-24 object-contain" />
    </div>
  ));
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {renderTechnologies()}
  </div>
);

export default SectionWrapper(Tech, "");
