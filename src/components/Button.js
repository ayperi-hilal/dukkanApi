import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',/**yazıyı ortaladı */
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color:'#81d4fa',

    },
})