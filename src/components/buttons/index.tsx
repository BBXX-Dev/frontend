import * as React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  onClick(e: React.MouseEvent<HTMLElement>): void;
  children?: React.ReactNode;
};

const MainButton = ({ onClick: handleClick, children }: Props) => (
  <Button onClick={handleClick}>{children}</Button>
);

export { MainButton };
