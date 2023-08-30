import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { gql } from "../../generated";
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

  const displayData = () => {
    if (!data) {
      return <p>No Products</p>;
    }

    return data.products.map((product) => (
      <ProductCard
        key={product.ean}
        name={product.name}
        ean={product.ean}
        price={product.price}
      />
    ));
  };

  return (
    <>
      <h1>Minishop</h1>
      <Link to="/orders">My orders</Link>
      <h2>Available products</h2>
      {loading ? <p>Loading products...</p> : displayData()}
    </>
  );
}
