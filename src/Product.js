function Product(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="box">
                    <div className="box-img">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="img-content p-3">
                        <h5>{props.title}</h5>
                        <h6> {props.price} </h6>
                        <h6> {props.discount} </h6>
                        <h6>Brand : {props.Brand}</h6>
                        <a href="#"><i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        </a>
                    </div>
                    <div className="d-flex justify-content-between ms-4 me-4">
                        <button className='btn2'>Add to cart</button>
                        <button className='btn1'><a href={`/Product/${props.id}`}>Know more</a> </button>
                    </div>
                   
                </div>
                
            </div>
        </>
    )
}

export default Product