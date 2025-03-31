import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ classif }) => {
    return (
        <Text style={styles.resultText}>Sua classificação é: {classif}</Text>
    );
};

const styles = StyleSheet.create({
    resultText: {
        marginTop: 20,
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
});

export default Result;