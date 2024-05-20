import React from "react";
import Box from "../Box/Box";
import Theme from "@src/theme/theme";

interface TextProps {
  tag?: "p" | "li" | "h1" | string;
  children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  return (
    <Box stylesheet={{ fontFamily: Theme.typography.fontFamily }} {...props} />
  );
}

Text.defaulProps = {
  tag: "p",
};
