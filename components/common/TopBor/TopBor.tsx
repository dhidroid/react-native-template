import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import TextComponent from "../Text";

interface Props {
    title: string;
    style?: object;
    titleStyle?: object;
}

export default function TopBar({ title = "TopBar", style, titleStyle }: Props) {
    return (
        <SafeAreaView style={[styles.container, Platform.OS === "ios" ? styles.iosStyle : styles.androidStyle, style]} >
            <TextComponent style={[styles.text, titleStyle]}>{title}</TextComponent>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Platform.OS === "ios" ? 100 : 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        bottom: 10,
    },
    iosStyle: {
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderBottomColor: "#ddd",
    },
    androidStyle: {
        elevation: 4,
        borderBottomWidth: 0,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
