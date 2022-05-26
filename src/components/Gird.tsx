import React from "react";

interface Props {
  children: React.ReactNode;
  col: number;
}

const Gird: React.FC<Props> = ({ children, col }) => {
  return <div className={`gird gird-${col}`}>{children}</div>;
};

export default Gird;
