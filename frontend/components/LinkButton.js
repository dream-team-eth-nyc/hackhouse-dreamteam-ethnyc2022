import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LinkButton = ({ href, activeProps = {}, onClick, ...props }) => {
  const router = useRouter();
  const extraProps = router.asPath.includes(href) ? activeProps : {};
  return (
    <Button
      onClick={() => {
        onClick && onClick();
        router.push(href);
      }}
      {...props}
      {...extraProps}
    />
  );
};

export default LinkButton;
