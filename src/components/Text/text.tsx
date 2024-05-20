import React from "react";
import Box from "../Box/Box";
import Theme from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";

interface TextProps {
  variant?: "display1";
  tag?: "p" | "li" | "h1" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Text({ 
  styleSheet,
  variant,
   ...props
   }: TextProps) {
  const textVariant = Theme.typography.variants[variant];

  return (
    <Box
      stylesheet={{
        fontFamily: Theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};
