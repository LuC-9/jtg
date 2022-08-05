// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 76 16"}
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
          "M7.875 9.269H3.142l-1.137 3.356H0L4.483.207h2.083l4.484 12.418H9.01L7.876 9.27zm-4.243-1.55h3.752l-1.85-5.446h-.052L3.632 7.72zm17.1.38c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 01-2.849-1.583h-.043v4.484h-1.858V3.571h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm11.875 0c0 2.813-1.506 4.62-3.778 4.62a3.07 3.07 0 01-2.849-1.583h-.043v4.484H22.17V3.571h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.496 1.066c.138 1.232 1.334 2.04 2.969 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.289-1.936l-1.61-.388c-2.28-.55-3.338-1.617-3.338-3.348C35.708 1.472 37.575 0 40.227 0c2.624 0 4.422 1.472 4.483 3.614h-1.876c-.112-1.239-1.137-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.794 3.778-2.754 0-4.613-1.42-4.733-3.667h1.902zm11.636-7.736V3.57h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.61-.043v1.463c-.34.063-.685.092-1.031.086-1.833 0-2.548-.689-2.548-2.445V5.043h-1.317V3.571h1.317V1.43h1.867zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.505 0 2.401-1.144 2.401-3.106zm3.426-4.528h1.772v1.541h.043a2.16 2.16 0 012.178-1.635c.214-.001.428.022.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37H61.76V3.571zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.05 2.05 0 002.09-1.273h1.765zm-6.282-2.702H73.2a2.178 2.178 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */