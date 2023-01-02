import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    return (
        <>
            <OwlCarousel className='owl-theme mt-2' loop items={1} autoplayTimeout={3000} autoplay nav>
                <div class='item sider_content'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid' src={require('./img/slider1.jpg')} alt="" />
                    </a>
                </div>
                <div class='item sider_content'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid' src={require('./img/slider2.jpg')} alt="" />
                    </a>
                </div>
                <div class='item sider_content'>
                    <a href="#">
                        <img className='img-fluid' src={require('./img/slider3.jpg')} alt="" />
                    </a>
                </div>
                
            </OwlCarousel>

        </>
    )
}
export default Slider