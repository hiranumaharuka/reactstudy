import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';
function Product() {
  const { id } = useParams();
  const url = `https://5f3e04f413a9640016a683cc.mockapi.io/products/${id}`;
  let product = useAxiosGet(url);
  let content = null;

  if (product.error) {
    content = <p>There is an error please reflesh or try again later.</p>;
  }

  if (product.loading) {
    content = <Loader />;
  }
  if (product.data) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
