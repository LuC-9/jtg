// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
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
          "M3.818 0H1.162C.522 0 0 .521 0 1.162v2.04A16.27 16.27 0 002.862 4.98h.956c.641 0 1.162-.52 1.162-1.162V1.162C4.98.522 4.46 0 3.818 0zm.166 3.818a.166.166 0 01-.166.166H1.162a.166.166 0 01-.166-.166V1.162c0-.091.075-.166.166-.166h2.656c.092 0 .166.075.166.166v2.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
