import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../components/Button";
const DisplayButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;


export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{height:550,width:'100%',marginBottom:20}}>
      <Slider {...settings}>
      <div>
        <div style={{height:550,width:'100%',background:'black'}}>
          <img
            src="https://cdn.discordapp.com/attachments/792213325752565780/1047798488559255654/4WLAI1669888422.jpg"
            width="100%" height='100%'alt='img'
          />
        </div>
      </div>
      <div>
        <div style={{height:550,width:'100%',background:'black'}}>
          <img
            src="https://cdn.discordapp.com/attachments/792213325752565780/1047778405862608937/main3.png"
            width="100%" height="100%" alt='img'
          />
        </div>
      </div>
      <div>
        <div style={{height:550,width:'100%',background:'black'}}>
          <img
            src="https://cdn.discordapp.com/attachments/792213325752565780/1047779651080163328/giphy_19.gif"
            width="100%" height="100%" alt='img'
          />
        </div>
      </div>
      
     

    
    </Slider>
    </div>
  );
}