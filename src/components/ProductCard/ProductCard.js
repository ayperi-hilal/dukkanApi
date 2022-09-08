import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";

const ProductCard = ({ product ,onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <Image
                    style={styles.Image}
                    source={{ uri: product.image }}
                />
                <View style={styles.bodyContainer} >
                    <Text style={styles.title}>
                        {product.title}
                    </Text>
                    <Text style={styles.price}>
                        {product.price} TL
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    Image: {
        // backgroundColor: 'red',
        width: 100,
        minHeight: 100,
        // height: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    container: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#eeee',
        margin: 10,
        flexDirection: 'row',
    },
    price: {
        // backgroundColor:'blue',
        textAlign: "right",
        fontStyle: "italic",
    },
    title: {
        // backgroundColor:'green',
        fontWeight: 'bold',
        fontSize: 18,
    },
    bodyContainer: {
        flex: 1,//bu değer ile yazıların kutu dışına taşması engellendi,
        // backgroundColor:'red',
        padding: 5,
        justifyContent: 'space-between',
    }
})

// {
//     "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//             "price": 109.95,
//                 "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//                     "category": "men's clothing",
//                         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

// }