import React from 'react';

type Props =
  & React.InputHTMLAttributes<HTMLInputElement>
  & React.ClassAttributes<HTMLInputElement>
  & { extraClassName?: string }
  ;

export const Input = ({ extraClassName, ...props }: Props) =>
  <input className={`form-control ${extraClassName}`} {...props} />;
