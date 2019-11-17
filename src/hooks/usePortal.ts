import React from "react";

export function usePortal(id: string) {
  const element = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    const { current } = element;
    const parent = document.getElementById(id);

    if (parent) {
      parent.appendChild(element.current);
    }

    return () => current.remove();

  }, [id]);

  return element.current;
}
