import { Text as TextView } from "react-native";
import React from "react";
import { Fonts } from "../../assets/style";

const Text = ({
  children,
  fontSize = 14,
  regular = true,
  bold = false,
  color = "#160520",

  semiBold = false,
  style,
  ...props
}) => {
  return (
    <TextView
      {...props}
      style={[
        style,
        { fontSize: fontSize, color: color, lineHeight: fontSize * 1.5 },
        regular && { fontFamily: Fonts.Nunito.Regular },
        bold && { fontFamily: Fonts.Nunito.Bold },
        semiBold && { fontFamily: Fonts.Nunito.BoldItalic },
      ]}
    >
      {children}
    </TextView>
  );
};

export default Text;
