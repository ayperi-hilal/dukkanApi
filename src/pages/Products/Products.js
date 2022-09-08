import React, { Component } from "react";
import { SafeAreaView, Text } from 'react-native'
import Config from "react-native-config";
import {API_URL} from '@env'


const Products = () => {
    return (
        <SafeAreaView>
            <Text> Api çalışmadı!!!</Text>
            <Text> {API_URL}</Text>
           
        </SafeAreaView>

    );
};

export default Products;