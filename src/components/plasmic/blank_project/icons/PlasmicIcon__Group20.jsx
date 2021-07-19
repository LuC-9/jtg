// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.328 1.328A1.328 1.328 0 010 0v2.656a1.328 1.328 0 102.656 0V0c0 .734-.594 1.328-1.328 1.328z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
