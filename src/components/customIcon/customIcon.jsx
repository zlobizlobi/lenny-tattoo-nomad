import React from "react";
import { Icon } from "./components";

export const CustomIcon = ({ className, link }) => {
  return (
    <Icon href={link} target="_blank">
      <i className={className} />
    </Icon>
  );
};
