import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import React, { ReactNode } from "react";

type TextProps = {
    weight: "400" | "700";
    children: ReactNode;
} & NativeTextProps;

const defaultProps = {
    wight: "700"
};

export default function Text({ children, style, weight, ...props }: TextProps) {
    let fontFamily;

    weight === "400"
        ? (fontFamily = "DeliusUnicase_400Regular")
        : (fontFamily = "DeliusUnicase_700Bold");

    return (
        <NativeText {...props} style={[{ fontFamily }, style]}>
            {children}
        </NativeText>
    );
}

Text.defaultProps = defaultProps;
