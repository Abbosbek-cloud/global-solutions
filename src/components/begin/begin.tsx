import React from "react";

interface BeginProps {
  name?: String;
}

const Begin = (props: BeginProps) => {
  return <div>Begin {props.name}</div>;
};

export default Begin;
