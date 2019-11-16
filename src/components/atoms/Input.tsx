import React from 'react';

type Props =
  & React.InputHTMLAttributes<HTMLInputElement>
  & React.ClassAttributes<HTMLInputElement>
  & { children?: React.ReactNode | React.ReactNode[] }
  ;

export const Input = ({ className, ...props }: Props) =>
  <input className={`form-control ${className}`} {...props} />;
