import React from 'react';

type Props =
  & React.InputHTMLAttributes<HTMLInputElement>
  & React.ClassAttributes<HTMLInputElement>
  ;

export const Input = ({ className, ...props }: Props) =>
  <input className={`form-control ${className}`} {...props} />;
