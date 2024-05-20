import { StyleSheet } from "@displaykit/responsive_styles";
import { BaseComponent } from "@src/theme/baseComponent";
import React from "react";

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string,
  children?: React.ReactNode,
  stylesheet?: StyleSheet,
}

export default function Box({ stylesheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={stylesheet} {...props}>
      {children}
    </BaseComponent>
  )
}
