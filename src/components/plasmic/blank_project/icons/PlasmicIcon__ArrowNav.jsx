// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowNavIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1111 21"}
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
          "M1083.74 13.237h21.04l-4.62 4.624c-.64.638-.64 1.595 0 2.232.64.638 1.59.638 2.23 0l7.34-7.334c.63-.638.63-1.594 0-2.232l-7.34-7.334c-.64-.638-1.59-.638-2.23 0-.64.637-.64 1.594 0 2.232l4.62 4.624h-21.04c-.8 0-1.6.637-1.6 1.594 0 .957.8 1.594 1.6 1.594zM26.467 7.334H5.42l4.624-4.624c.637-.637.637-1.594 0-2.232-.638-.637-1.595-.637-2.232 0L.478 7.812c-.637.638-.637 1.595 0 2.233l7.334 7.334c.638.638 1.595.638 2.233 0 .637-.638.637-1.595 0-2.232L5.42 10.523h21.046c.797 0 1.594-.638 1.594-1.594 0-.957-.797-1.595-1.594-1.595z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowNavIcon;
/* prettier-ignore-end */
