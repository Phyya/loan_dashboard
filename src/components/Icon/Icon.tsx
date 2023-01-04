import React from "react";

interface IconProps {
  src: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = (props) => {
  const { src, onClick } = props;
  if (!src) return null;
  return (
    <img
      src={src}
      onClick={onClick}
      alt="icon"
      style={{ cursor: onClick ? "pointer" : undefined }}
    />
  );
};

export default Icon;
