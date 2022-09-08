import React from "react";
import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native'
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch/useFetch";
import { API_URL } from '@env'

const ProductsDeatils = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useFetch(`${API_URL}/${id}`);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }


    return (
        <ScrollView  style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.body_Container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </ScrollView>
    );
};

export default ProductsDeatils;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'red',
        flex: 1,
      
    },
    body_Container: {

    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: "contain",
        backgroundColor:'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        margin:10,
    },
    desc: {
        fontStyle: 'italic',
        margin:10,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'right',
        fontStyle:'italic',
        margin:10,
    }
})