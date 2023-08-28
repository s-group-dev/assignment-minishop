import type { GetOrdersQuery } from '../../../generated/graphql';

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import Header from '../components/Header';

const ordersQuery = gql(`
  query getOrders($customerId: ID!) {
    orders(customerId: $customerId) {
      orderId
      customerId
      timestamp
      products {
        amount
        ean
      }
      totalSum
    }
  }`);

const Orders = () => {
  const { loading, data } = useQuery<GetOrdersQuery>(ordersQuery, {
    variables: { customerId: 'user-1' },
  });

  return (
    <View style={styles.wrapper}>
      <Header>{'Orders'}</Header>
      <ScrollView>
        {loading ? (
          <Text>Loading orders...</Text>
        ) : (
          data?.orders.map(order => (
            <OrderSummary
              key={order.orderId}
              timestamp={order.timestamp}
              totalSum={order.totalSum}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const OrderSummary = props => {
  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderTitle}>Order</Text>
      <Text>Order time {props.timestamp}</Text>
      <Text>Total: {props.totalSum} €</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    paddingTop: 48,
  },

  orderItem: {
    marginBottom: 32,
  },

  orderTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Orders;
