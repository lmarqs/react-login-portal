import React from 'react';

type Props =
  & React.LabelHTMLAttributes<HTMLLabelElement>
  & React.ClassAttributes<HTMLLabelElement>
  & { children: React.ReactNode | React.ReactNode[] }
  ;

export const Label = (props: Props) => <label {...props} />;
