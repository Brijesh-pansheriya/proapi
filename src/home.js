import Header from './Header';
import Product from './Product';
import Slider from './Slider';
import Footer from './Footer';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [setresult, getresult] = useState([])
  const [loader, getloader] = useState(false)
  const [search , setsearch] =useState('https://dummyjson.com/products')
  function home(i)
  {
    if(i != '')
    {
      setsearch('https://dummyjson.com/products/search?q='+i)
    }
    axios.get(search)
      .then(function (response) {
        // handle success
        console.log(response);
        getresult(response.data.products)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response);
        getresult(response.data.products)
        getloader(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  if(loader){
    return (
      <>
         <section className="header">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="logo">
                                <a href="#">
                                    <img src={require('./img/logo2.png')} alt="" />
                                </a>
                            </div>
                        </div>
                       

                         <div className="col-auto">
                            
                            <div className='main_search d-flex align-items-center'>
                                <input type="text" onChange={(i)=> {home(i.target.value)}} placeholder='Search for products, brands and more '/>
                                <div className="main_icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            
                        </div> 
                        <div className='col-auto'>
                            <span>
                                <h6 className=''>Become a supplier</h6>
                            </span>
                        </div>
                        <div className="col-auto">
                            <div className="search-box d-flex justify-content-between">
                                <span>
                                    <i class="fa-solid fa-mobile-screen-button ms-5"></i>
                                    <h6 className='me-5'>Download App</h6>
                                </span>    
                                <span>
                                    <i class="fa-solid fa-cart-shopping ms-4"></i>  
                                    <h6 className='me-5'>add to cart</h6>
                                      
                                </span>
                                <span>
                                    <i class="fa-solid fa-user ms-3"></i>
                                    <h6 className=''>Profile</h6>
                                    </span>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='header2 '>
                <div className='container'>
                    <div className='row align-item-center d-flex justify-content-around '>
                        <div className='col-auto'>
                            <nav>
                                <ul className='m-0 list-unstyled d-flex  main_menu'>
                                    <li><a href="#"style={{color:"black" , fontSize:"17px"}}>Home</a></li>
                                    <li><a href="#">Mobile</a></li>
                                    <li><a href="#">Laptop</a></li>
                                    <li><a href="#">Grocerry</a></li>
                                    <li><a href="#">Skin care products</a></li>
                                    <li><a href="#">Handcraft products</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </section>
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
  else{
    return (
      <>

        <div class="socket">
          <div class="gel center-gel">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c1 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c2 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c3 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c4 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c5 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c6 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>

          <div class="gel c7 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>

          <div class="gel c8 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c9 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c10 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c11 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c12 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c13 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c14 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c15 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c16 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c17 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c18 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c19 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c20 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c21 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c22 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c23 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c24 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c25 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c26 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c28 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c29 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c30 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c31 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c32 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c33 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c34 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c35 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c36 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c37 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>

        </div>
      </>
    )
  }
 
}
export default Home