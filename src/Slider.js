import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    return (
        <>
            <OwlCarousel className='owl-theme' loop items={1} autoplayTimeout={1000} autoplay nav _>
                <div class='item sider_content slider'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid slider1' src={require('./img/slider1.jpg')} style={{width:"1461.33px"}} alt="" />
                        {/* <p className='animate__fadeInDown slogan  display-5'>Expand Your Mind,</p>
                        <p className='slogan2 display-5'>Read A Book</p> */}
                    </a>
                </div>
                <div class='item sider_content slider'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid slider1' src={require('./img/slider2.jpg')} style={{width:"1461.33px"}} alt="" />
                        {/* <p className='animate__fadeInDown slogan display-5'>Travel to the stars,</p>
                        <p className='slogan2 display-5'> Read books!</p> */}
                    </a>
                </div>
                <div class='item sider_content slider'>
                    <a href="#">
                        <img className='img-fluid slider1' src={require('./img/slider3.jpg')} style={{width:"1461.33px"}} alt="" />
                        {/* <p className='slogan display-5'>Today a reader.</p>
                        <p className='slogan3 display-5'>Tomorrow a leader</p> */}
                    </a>
                </div>
                <div class='item sider_content slider'>
                    <a href="#">
                        <img className='img-fluid slider1' src={require('./img/pro4.jpg')} style={{width:"1461.33px"}} alt="" />
                    </a>
                </div>
                <div class='item sider_content slider'>
                    <a href="#">
                        <img className='img-fluid slider1' src={require('./img/pro5.jpg')} style={{width:"1461.33px"}} alt="" />
                    </a>
                </div>
                
            </OwlCarousel>

        </>
    )
}
export default Slider