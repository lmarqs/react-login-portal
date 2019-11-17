import React from "react";

type Props = React.PropsWithChildren<{
  hasError?: boolean;
  error?: string;
}>;

export const Field = ({ hasError, error, children }: Props) => (
  <div className="form-group">
    {children}
    {hasError && error && (
      <p className="help-block">{error}</p>
    )}
  </div>
);
