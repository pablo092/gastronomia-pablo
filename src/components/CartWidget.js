import React from "react";
// import { FontAwesome } from "react-icons/fa";

const CartWidget = (props) => {
  const { iconName, size, color } = props;
//   const icon = React.createElement(FontAwesome[iconName]);
//   return <div style={{ fontSize: size, color: color }}>{icon}</div>;
  return <div style={{ fontSize: size, color: color }}>{iconName}</div>;
};

export default CartWidget;