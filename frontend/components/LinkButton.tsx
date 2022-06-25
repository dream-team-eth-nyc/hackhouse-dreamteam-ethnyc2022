import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const extraProps = router.asPath.includes(href) ? activeProps : {};
  return (
    <Button
      onClick={(e) => {
        router.push(href);
        onClick && onClick(e);
      }}
      {...props}
      {...extraProps}
    />
  );
};

export default LinkButton;
