// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TestimonialsIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.93 2.187c-2.386 1.213-3.58 2.642-3.58 4.282 1.017.121 1.858.551 2.523 1.29.665.74.997 1.595.997 2.566 0 1.033-.322 1.904-.968 2.612-.645.709-1.457 1.063-2.435 1.063-1.095 0-2.043-.46-2.845-1.382-.802-.921-1.203-2.04-1.203-3.356 0-3.947 2.132-7.035 6.395-9.262l1.115 2.187zm-8.42 0C5.104 3.4 3.902 4.829 3.902 6.469c1.036.121 1.887.551 2.552 1.29.665.74.997 1.595.997 2.566 0 1.033-.327 1.904-.983 2.612C5.813 13.646 4.997 14 4.018 14c-1.094 0-2.038-.46-2.83-1.382C.396 11.697 0 10.578 0 9.262 0 5.315 2.122 2.227 6.366 0L7.51 2.187z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TestimonialsIcon;
/* prettier-ignore-end */
