import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  outLine: boolean;
  bg: boolean;
}

const Button: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const btnBg = props.bg ? "btn-bg" : "";
  const btnOutLine = props.outLine ? "btn-out-line" : "";

  const handleRedirect = () => {
    navigate("/shop");
  };

  return (
    <button className={`btn ${btnBg} ${btnOutLine}`} onClick={handleRedirect}>
      {props.title}
    </button>
  );
};

interface PropsButtonLine {
  children: string;
  fill: boolean;
  handleRedirect?: () => void;
}

const ButtonLine: React.FC<PropsButtonLine> = ({
  children,
  fill,
  handleRedirect,
}) => {
  if (fill) {
    return (
      <button className="button button-fill" onClick={handleRedirect}>
        {children}
      </button>
    );
  } else
    return (
      <button onClick={handleRedirect} className="button button-line">
        {children}
      </button>
    );
};

export { ButtonLine };

export default Button;
