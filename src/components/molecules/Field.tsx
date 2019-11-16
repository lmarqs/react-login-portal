import React from "react";

// className={'form-group' + (submitted && !username ? ' has-error' : '')}

interface Props {
  hasError?: boolean;
  error?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Field = ({ hasError, error, children }: Props) => (
  <div className="form-group">
    {children}
    {hasError && error && (
      <p className="help-block">{error}</p>
    )}
  </div>
);
