import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native'
import { API_URL } from '@env'
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Products = ({navigation}) => {
    /*/**burayı custom-hook-yapisi na taşıdık */
    // const [loading, SetLoadin] = useState(true);
    // const [error, SetError] = useState(null);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetcData();
    // }, []);

    // const fetcData = async () => {

    //     try {
    //         const { data: productData } = await axios.get(API_URL);//parçalayıp isim verdik.hocanın yaptığında buradası Config.API_URL ama o zman veri gelmiyor
    //         setData(productData);
    //         SetLoadin(false);
    //     } catch (err) {
    //         SetError(err.message);
    //         SetLoadin(true);
    //     }
    // }
    /**burayı custom-hook-yapisi na taşıdık */
    const {loading,data,error } = useFetch(API_URL);

    // const renderProduct = ({ item }) => <Text> {item.title}</Text>;



    const handleProductSeect=id=>{
        navigation.navigate('DetailPga',{id});
    }
    const renderProduct = ({ item }) => <ProductCard product={item}  onSelect={()=>handleProductSeect(item.id)}/>

    /**ürünler yüklenene kadar activitespinner dönecekk yani yükleniyor... ActivityIndicator*/

    if (loading) {
        // return <ActivityIndicator size="large" />/**artık animasyon ekleyeceğiz */
        return <Loading />
    }

    if (error) {
        // return <Text>{error}</Text>
        return <Error/>
    }

    return (
      
            <FlatList
                data={data} renderItem={renderProduct}

            />
            // {/* <Text>url: {API_URL}</Text> */}        

    );
};

export default Products;