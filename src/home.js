import Header from './Header';
import Product from './Product';
import Slider from './Slider';
import Footer from './Footer';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [setresult, getresult] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response);
        getresult(response.data.products)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <>
      <Header />
      <Slider />
      <div className="col-lg-12 mb-5 mt-5 text-center">
        <h6 className='bg_text'>OUR PRODUCTS</h6>
        <h4 className='bg_text_h4'>Products for you</h4>
      </div>
      {
        <section className='pro_slider bg-light'>
          <div className="container">
            <div className="row">
              {
                setresult.map((i) => {
                  return (
                    <>
                      {/* <h1> {i.title} </h1>
                    <h1> {i.id} </h1>
                    <h1> {i.thumbnail} </h1> */}

                      <Product title={i.title}
                        img={i.images[0]}
                        price={i.price}
                        discount={i.discountPercentage}
                        Brand={i.brand}
                        id={i.id}
                      />
                    </>
                  )
                })
              }
            </div>
          </div>
        </section>
      }
      <Footer/>
      

    </>
  )
}
export default Home