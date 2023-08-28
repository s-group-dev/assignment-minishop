import React from "react";
import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <h1>Minishop</h1>
      <Link to="/orders">My orders</Link>
    </>
  );
}