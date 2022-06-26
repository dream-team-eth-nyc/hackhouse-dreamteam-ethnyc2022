import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type LinkButtonProps = {
  href: string;
  activeProps?: ButtonProps;
} & ButtonProps;

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  activeProps = {},
  onClick,
  ...props
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const extraProps = location.pathname.includes(href) ? activeProps : {};
  return (
    <Button
      onClick={(e) => {
        navigate(href);
        onClick && onClick(e);
      }}
      {...props}
      {...extraProps}
    />
  );
};

export default LinkButton;
