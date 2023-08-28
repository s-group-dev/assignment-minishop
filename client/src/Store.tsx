import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { gql } from "./generated/gql";
import { ProductCard } from "./ProductCard";

const getProductsQuery = gql(`
  query getProducts {
    products {
      ean
      name
      price
    }
  }
`);

export function Store() {
  const { loading, data } = useQuery(getProductsQuery);

  return (
    <>
      <h1>Minishop</h1>
      <Link to="/orders">My orders</Link>
      <h2>Available products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        data?.products.map((product) => (
          <ProductCard
            key={product.ean}
            name={product.name}
            ean={product.ean}
            price={product.price}
          />
        ))
      )}
    </>
  );
}
