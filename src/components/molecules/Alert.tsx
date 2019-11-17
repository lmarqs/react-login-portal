import React from "react";

type Props = React.PropsWithChildren<{
  type: "alert-success" | "alert-info" | "alert-warning" | "alert-danger";
  children?: React.ReactNode | React.ReactNode[];
  onDismiss?: () => void;
}>;

export const Alert = ({ type = "alert-info", onDismiss, children }: Props) => (
  <div className={`alert ${type}`}>
    <button type="button" className="close" aria-label="Close" onClick={onDismiss}>
      <span aria-hidden="true">&nbsp;&times;</span>
    </button>
    {children}
  </div>
);
