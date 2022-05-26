import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Helmet: React.FC<Props> = (props) => {
  React.useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return <div>{props.children}</div>;
};

export default Helmet;
