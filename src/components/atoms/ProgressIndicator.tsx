import React from "react";

import src from "./ProgressIndicator.gif";

type Props =
  & React.ImgHTMLAttributes<HTMLImageElement>
  & React.ClassAttributes<HTMLImageElement>
  ;

export const ProgressIndicator = (props: Props) => (
  <img alt="..." src={src} {...props} />
);
