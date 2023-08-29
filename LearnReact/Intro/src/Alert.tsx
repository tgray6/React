import { ReactNode } from "react";
import { useState } from "react";

interface Props {
  type: "information" | "warning";
  heading: string;
  closable?: boolean;
  onClose?(): void;
  children: ReactNode;
}

export function Alert(props: Props) {
  const { type, heading, closable, onClose, children } = props;
  const [visible, setVisible] = useState<boolean>(true);

  function handleCloseClick(e: React.MouseEvent<HTMLButtonElement>) {
    setVisible(false);

    if (onClose) {
      onClose();
    }
  }

  if (!visible) {
    return null;
  }

  return (
    <div>
      <div>
        <span
          role="image"
          aria-label={type === "warning" ? "Warning" : "Information"}
          className="alertIcon"
        >
          {type === "warning" ? "⚠" : "i"}
        </span>
        <span>{heading}</span>
      </div>

      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}

      <div>{children}</div>
    </div>
  );
}
