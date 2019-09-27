import React from "react";
import { Icon } from "./components";

export const CustomIcon = ({ link, component }) => {
  return (
    <Icon href={link} target="_blank" rel="noopener">
      {component}
    </Icon>
  );
};
