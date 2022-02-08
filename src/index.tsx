import { Game, Home } from "@screens";
import { StyleSheet, View } from "react-native";

import React from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
            <Game />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
