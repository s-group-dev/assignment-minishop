import React from "react";
import { Link } from "react-router-dom";
import { gql } from "../../generated";
import { useQuery } from "@apollo/client";

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

export function Orders() {
  const { loading, data } = useQuery(ordersQuery, {
    variables: { customerId: "user-1" },
  });
  return (
    <>
      <h1>My order history</h1>
      <Link to="/">Back to shop</Link>
      <h2>Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : (
        data?.orders.map((order) => (
          <OrderSummary
            key={order.orderId}
            timestamp={order.timestamp}
            totalSum={order.totalSum}
          />
        ))
      )}
    </>
  );
}

function OrderSummary(props) {
  return (
    <div>
      <h3>Order</h3>
      <p>Order time {props.timestamp}</p>
      <p>Total: {props.totalSum} €</p>
    </div>
  );
}
