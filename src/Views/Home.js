import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';
// import HelloWorld from '../Components/HelloWorld';

function Home() {
  const url = `https://5f3e04f413a9640016a683cc.mockapi.io/products?page=1&limit=10`;
  let products = useAxiosGet(url)
  let content = null;

  if (products.error) {
    content = <p>There is an error please reflesh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product}/>
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
