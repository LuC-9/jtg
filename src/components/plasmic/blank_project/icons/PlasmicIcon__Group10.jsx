// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M3.818 4.98H1.162C.522 4.98 0 4.46 0 3.818V1.162C0 .522.521 0 1.162 0h2.656C4.46 0 4.98.521 4.98 1.162v2.656c0 .641-.52 1.162-1.162 1.162zM1.162.996a.166.166 0 00-.166.166v2.656c0 .092.075.166.166.166h2.656a.166.166 0 00.166-.166V1.162a.166.166 0 00-.166-.166H1.162z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
