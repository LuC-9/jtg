// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M14.797 11.58a4.95 4.95 0 012.357-4.152 5.066 5.066 0 00-3.991-2.157C11.483 5.094 9.856 6.276 9 6.276c-.872 0-2.19-.988-3.609-.959A5.315 5.315 0 00.918 8.045c-1.934 3.349-.491 8.27 1.362 10.976.926 1.326 2.01 2.806 3.427 2.754 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.851 1.489-.024 2.427-1.331 3.321-2.669a10.963 10.963 0 001.519-3.092 4.781 4.781 0 01-2.92-4.4zm-2.731-8.09A4.873 4.873 0 0013.18 0a4.958 4.958 0 00-3.207 1.66 4.636 4.636 0 00-1.144 3.36 4.099 4.099 0 003.237-1.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
