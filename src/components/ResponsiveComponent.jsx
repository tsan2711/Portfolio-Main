import React from "react";
import useScreenSize from "./useScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
