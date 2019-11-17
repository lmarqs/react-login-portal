import React from 'react';

type Props = React.PropsWithChildren<
  & React.LabelHTMLAttributes<HTMLLabelElement>
  & React.ClassAttributes<HTMLLabelElement>
>;

export const Label = (props: Props) => <label {...props} />;
