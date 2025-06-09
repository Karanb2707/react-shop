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
      const data = await res.json();
      console.log(data);
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
          <div className='w-full lg:w-9/12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-2 gap-1 mx-auto p-2'>
            {
              posts.map((post) => {
                return <Product post={post} key={post.id} />
              })
            }
          </div> :
          <div className="fixed inset-0 grid place-items-center">
            <div className='text-xl font-semibold'>Sorry, No Product Found!!</div>
          </div>
      }
    </div>
  )
}

export default Home