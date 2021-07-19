// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 24"}
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
          "M13.11 23.282l6.672-7.39-6.672-7.39h7.04l3.304 3.59 3.181-3.59h6.794l-6.64 7.36 6.731 7.42h-7.068l-3.274-3.62-3.244 3.62H13.11zm0-18.092H5.554v3.312h7.556v4.993H5.554v4.583h7.556v5.204H0V0h13.11v5.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G17Icon;
/* prettier-ignore-end */
