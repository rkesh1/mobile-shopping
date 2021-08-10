import React, { useEffect, useContext, useState } from "react";
import axios from '../config/axios.config';

import ProductList from "../components/ProductList";
import './style.scss';
//context api
import ProductListContext from '../context/productListContext';

const Home = (props) => {
  const pageTitle = "Mobiles";
  const { products, setProducts } = useContext(ProductListContext);
  const [inputSearch, setInputSearch] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      return axios.get(`/products`).then(res => {
        if(res.data){
         setProducts(res.data);
          console.log("resss", res);
        }
      });
    }

    (async () => {
      await getProducts();
    })();
  },[setProducts]);

  

  useEffect(() => {
    search();
  }, [inputSearch, products]);

  // search 
  function search(){
    let results = []
      if(inputSearch){
        results = products.filter(item => {
          return item.name.toLowerCase().includes(inputSearch.toLowerCase());
        });
      }else{
        results = products;
      }
      setSearchProducts(results);
    }

  return (
    <>
      <div className="row">
        <div className="flex-between">
          <h3 className="p20">{pageTitle}</h3> 
          <div className="">
            <input type="text" placeholder="Search" className="pr20" value={inputSearch} onChange={e => {setInputSearch(e.target.value)}}/> 
            <img className="search-icon" src="/assest/img/icons/search.png" width="20" alt="Search" onClick={search}/>
          </div>
        </div>
        
      </div>
      <div className="row">
        <ProductList items={searchProducts} />
      </div>
    </>
  );
};
export default Home;
