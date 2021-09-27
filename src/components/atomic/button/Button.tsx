import { ReactElement, ReactHTMLElement } from "react";

import "./Button.scss";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label?: ReactElement | string;
  children?: any[];
};

export default function Button({
  label,
  type,
  children,
}: ButtonProps): ReactElement<ReactHTMLElement<HTMLButtonElement>> {
  // TODO: More custom magic here

  return (
    <button type={type}>
      {label || children}
    </button>
  );
}
