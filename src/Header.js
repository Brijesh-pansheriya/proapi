function Header() {
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
                                <input type="text"  placeholder='Search for products, brands and more '/>
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
        </>
    )
}
export default Header