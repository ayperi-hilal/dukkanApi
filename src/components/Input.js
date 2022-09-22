import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


const Input = ({ placeholder ,onType}) => {/**{} içindeki değişken isimleri standart değildir. önemli olan aşağıda nasıl kullanıldığı */
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder}
            onChangeText={onType}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        padding:8,
        margin:10,
        backgroundColor:'white',
        borderRadius:5,

    },

})