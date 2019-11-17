import React from "react";
import ReactDOM from "react-dom";

import { usePortal } from "./hooks";
import styles from "./Snackbar.module.css";

type Props = React.PropsWithChildren<{
  show?: boolean;
}>;

export const Snackbar = ({ show, children }: Props) => {
  const target = usePortal('snackbar');

  const content = (
    <div className={[styles.snackbar, show ? styles.show : ''].join(' ')}>
      {children}
    </div>
  );

  return ReactDOM.createPortal(content, target);
};

