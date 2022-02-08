import {
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
    useFonts
} from "@expo-google-fonts/delius-unicase";
import React, { ReactNode } from "react";

import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps) {
    const [fontLoaded] = useFonts({ DeliusUnicase_400Regular, DeliusUnicase_700Bold });
    return fontLoaded ? <>{children}</> : <AppLoading />;
}
