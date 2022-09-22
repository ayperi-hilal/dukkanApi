import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login_logo.png')} />

            </View>
            <View style={styles.body_container}>

                <Text>Email: </Text>
                <Input placeholder="Kullanıcı Adı" />
                <Text>Parola: </Text>
                <Input placeholder="Parola" />            
                <Button text="GİRİŞ YAP" />
            </View>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#81d4fa',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    body_container: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        backgroundColor: 'red',
        alignSelf: 'center',
    }

})