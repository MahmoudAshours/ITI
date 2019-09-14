import Slider from "react-slick";
import React from 'react';
import '../Styles/main.scss'
export default class SliderPage extends React.Component {

    render() {

        var data = this.props.sliderData;

        const src = '/images/covers/'

        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
        <Slider {...settings} className ="home">

            {
                data.map((item) =>
                    <div className="home" >
                        <img
                            src={`${src}${item.cover}`} width="100%" alt="sliderPic"/>
                        <div className="heading">
                            <p> {item.topic} </p>
                            {item.title}
                        </div>

                    </div>
                )
            } </Slider>
        );
    }

}