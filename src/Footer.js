function Footer() {
    return (
        <>

            <footer className='footer footer_y'>
                <div className="container">
                    <div className="logo text-center">
                        <a href="#" >
                            <img src={require('./img/logo2.png')} alt="" />
                        </a>
                    </div>

                    <div className="row justify-content-between mt-5">
                        <div className="col-auto text-red">
                            <h5>ABOUT</h5>
                        <ul className='list-unstyled'>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>New Product Stories</li>
                            <li>Press</li>
                            <li>New Product Wholesale</li>
                        </ul>
                        </div>
                        <div className="col-auto text-red">
                            <h5>HELP</h5>
                        <ul className='list-unstyled'>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                            <li>Report Infringement</li>
                        </ul>
                        </div>
                        <div className="col-auto text-red">
                            <h5>POLICY</h5>
                        <ul className='list-unstyled'>
                            <li>Return Policy</li>
                            <li>Terms Of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>EPR Compliance</li>
                        </ul>
                        </div>
                        <div className="col-auto text-red">
                            <h5>SOCIEL</h5>
                        <ul className='list-unstyled'>
                            <li><i class="fa-brands fa-facebook-f me-3"></i>Facebook</li>
                            <li><i class="fa-brands fa-twitter me-2"></i>Twitter</li>
                            <li><i class="fa-brands fa-youtube me-1"></i>YouTube</li>
                            <li><i class="fa-brands fa-instagram me-2"></i>Instagram</li>
                        </ul>
                        </div>
                        <div className="col-auto text-red">
                            <h5>Mail Us:</h5>
                        <ul className='list-unstyled'>
                            <li>New Product Private Limited,</li>
                            <li>City-center,Yogi-chowk</li>
                            <li>Surat-395006,</li>
                            <li>Gujrat,India</li>
                        </ul>
                        </div>
                    </div>
                    
                    <div>
                        <div className="row">
                            <div className="col">
                                <div className="sub-footer">
                                    <p>Copy Right © By  2017 | All Rights Reserved.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer