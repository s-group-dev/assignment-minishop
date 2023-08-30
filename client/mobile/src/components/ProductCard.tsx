import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Product = {
  product: {
    name: string;
    ean: string;
    price: number;
  };
};

const ProductCard = ({ product }: Product) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.ean}</Text>
      <Text>{product.price.toFixed(2)} €</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductCard;
