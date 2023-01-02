import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect } from 'react';
function Single_products() {
  const { id } = useParams()
  const [result, getresult] = useState([])
  const [spin, setspin] = useState(false)
  const [get, setget]=useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        getresult(response.data)
        setspin(true)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  if (spin) {
    return (
      <>
        {/* <div className="container">
          <div className="row bg-success">
            <div className="col-auto">
              <img src={result.thumbnail} alt="" />
            </div>
            <div className="col-auto">
              <h5>{result.title}</h5>
              <h6> {result.price} </h6>
              <h6> {result.discount} </h6>
              <h6>Brand:{result.brand}</h6>
            </div>
          </div>
        </div> */}

        <div className="single-product mt-5 pt-5 pb-5">
          <div className="container">
            <div className="row align-item-center">
              <div className="col-lg-6">
                <div className="product-thumbnail d-flex align-item-center gap-3">
                  <div className="fix">
                    <div className="product-img">
                      <a href="#">
                        <img src={result.images[0]} alt="" 
                        onClick={()=>{
                          setget(result.images[0]);
                        }}/>
                      </a>
                    </div>
                    <div className="product-img">
                      <a href="#">
                        <img src={result.images[1]} alt="" 
                        onClick={()=>{
                          setget(result.images[1]);
                        }}/>
                      </a>
                    </div>
                    <div className="product-img">
                      <a href="#">
                        <img src={result.images[2]} alt="" 
                        onClick={()=>{
                          setget(result.images[2]);
                        }}/>
                      </a>
                    </div>
                    <div className="product-img">
                      <a href="#">
                        <img src={result.images[3]} alt="" 
                        onClick={()=>{
                          setget(result.images[3]);
                        }}/>
                      </a>
                    </div>
                  </div>
                  {/* <a href="#">
                    <img src="{get}" alt="" />
                  </a> */}
                  <div className="col-auto mt-5">
                    <img src={result.thumbnail} alt="" />
                  </div>
                  
                </div>

              </div>
              <div className="col-lg-6">
                <div className="pro-img-content">
                  <div className="part1">
                    <p>{result.description}</p>
                    <h2 className="mb-3">M.R.P:<i class="fa-solid fa-indian-rupee-sign"></i> {result.price}</h2>
                    <h5 className="rating">{result.rating}<i class="fa-solid fa-star" style={{color:'white'}}></i></h5>
                    <h5 className="mt-4">Category : {result.category}</h5>
                    <h5>Discount : {result.discountPercentage}% off</h5>
                    <h5>Brand : {result.brand}</h5>
                    <h5>Stock : {result.stock} are left...</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <button className=" btn1 mt-5">
                  <a href="/">back</a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
  else {
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
export default Single_products