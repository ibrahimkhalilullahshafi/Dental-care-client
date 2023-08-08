import React from 'react';
import pic1 from '../../../assets/pics/pic (1).png'
import pic2 from '../../../assets/pics/pic (2).png'
import pic3 from '../../../assets/pics/pic (3).png'
import pic4 from '../../../assets/pics/pic (4).png'
import pic5 from '../../../assets/pics/pic (5).png'
import pic6 from '../../../assets/pics/pic (6).png'
import pic7 from '../../../assets/pics/pic (7).png'
import pic8 from '../../../assets/pics/pic (8).png'
import pic9 from '../../../assets/pics/pic (9).png'
import Slider from 'react-infinite-logo-slider'

const Sliders = () => {
    return (
        <div className='mt-5'>
            <Slider
                width="250px"
                duration={40}
                // pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src={pic1} alt="any" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic2} alt="any2" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic3} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic4} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic5} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic6} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic7} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic8} alt="any3" className='w-auto' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={pic9} alt="any3" className='w-auto' />
                </Slider.Slide>
            </Slider>

        </div>
    );
};

export default Sliders;