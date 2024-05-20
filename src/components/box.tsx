import React from "react";

interface StyleSheet {
  fontFamily: string, 

}

interface BoxProps {
  tag: any,
  children: React.ReactNode,
  stylesheet: StyleSheet,
}

export default function Box({ stylesheet, children, tag }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <Tag style={stylesheet}>
      {children}
    </Tag>
  )
}
