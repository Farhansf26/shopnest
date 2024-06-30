import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product';
import BreadCrums from '../components/BreadCrums';
import DetailItem from '../components/DetailItem';

const ProductPage = () => {
  const { id } = useParams()
  const product = all_product.find(product => product.id === Number(id))
  if(!product){
    return <h1>OOPS!! PRODUCT TIDAK DITEMUKAN!</h1>
  }
  
  return (
    <div>
      <BreadCrums product={product}/>
      <DetailItem product={product}/>
    </div>
  );
}

export default ProductPage;
