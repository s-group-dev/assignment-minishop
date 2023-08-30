import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const getProductsQuery = gql(`
  query getProducts {
    products {
      ean
      name
      price
    }
  }
`);

const Products = ({ navigation }) => {
  const { loading, data } = useQuery(getProductsQuery);

  const displayData = () => {
    if (!data) {
      return <Text>{'No Products'}</Text>;
    }

    return data.products.map((product, i: number) => (
      <ProductCard key={`product-${i}`} product={product} />
    ));
  };

  return (
    <View style={styles.wrapper}>
      <Button
        title='My Orders >>'
        onPress={() => navigation.navigate('Orders')}
      />
      <Header>{'Products'}</Header>
      <ScrollView>
        {loading ? <Text>{'Loading products...'}</Text> : displayData()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    paddingTop: 48,
  },
});

export default Products;
