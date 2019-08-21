import React from "react";
import { Icon } from "./custom-icon.styles";

export const CustomIcon = ({ className, link }) => {
  return (
    <Icon href={link} target="_blank">
      <i className={className} />
    </Icon>
  );
};
