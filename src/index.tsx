import { AppBootstrap, Text } from "@components";
import React, { ReactElement } from "react";

import { View } from "react-native";
import styles from "./styles";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <View style={styles.container}>
                <Text style={{ fontSize: 25 }} weight="700" onPress={() => alert("true")}>
                    Home
                    <Text weight="400">Test</Text>
                </Text>
            </View>
        </AppBootstrap>
    );
}
