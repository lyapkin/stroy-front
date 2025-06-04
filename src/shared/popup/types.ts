import { PropsWithChildren } from "react";

export interface PopupProps extends PropsWithChildren {
  close: () => void;
}

export interface PopupCloseProps {
  close: () => void;
}
