import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products'
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = res.json();
      setPosts(data);
    } catch (error) {
      console.log('Error', error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            posts.map((post) => {
              return <Product post={post} key={post} />
            }) :
            <div className="fixed inset-0 grid place-items-center">
              <div className='text-xl font-semibold'>Sorry, No Product Found!!</div>
            </div>
      }
    </div>
  )
}

export default Home