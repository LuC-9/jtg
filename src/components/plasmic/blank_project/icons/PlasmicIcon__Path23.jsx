// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 25"}
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
          "M40.85 0v9.528h-.06c-1.224-1.387-2.754-1.87-4.53-1.87-3.635 0-6.374 2.437-7.335 5.658C27.828 9.767 25 7.592 20.808 7.592c-3.404 0-6.093 1.507-7.496 3.962V8.503H6.274V5.19h7.68V0H0v23.282h6.274v-9.787h6.253a9.148 9.148 0 00-.286 2.301c0 4.857 3.764 8.264 8.567 8.264 4.04 0 6.702-1.869 8.11-5.277H23.54c-.727 1.024-1.279 1.328-2.733 1.328-1.686 0-3.14-1.45-3.14-3.169h10.948c.475 3.858 3.523 7.184 7.707 7.184a5.38 5.38 0 004.467-2.352h.06v1.507h5.531V0h-5.53zM17.844 13.565c.35-1.479 1.513-2.445 2.965-2.445 1.6 0 2.704.936 2.994 2.445h-5.959zm19.652 6.172c-2.039 0-3.306-1.872-3.306-3.827 0-2.09 1.102-4.1 3.306-4.1 2.285 0 3.195 2.01 3.195 4.1 0 1.981-.965 3.827-3.195 3.827z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path23Icon;
/* prettier-ignore-end */
