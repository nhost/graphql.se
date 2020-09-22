import React from "react";
import classNames from "classnames";

export function TextField(props) {
  const { type, className, ...rest } = props;

  const classes = classNames([
    "border rounded-md shadow-lg p-2 bg-white",
    className,
  ]);

  console.log({ type });
  console.log({ classes });

  return <input type={type} className={classes} {...rest} />;
}

TextField.defaultProps = {
  type: "text",
  className: "",
};
