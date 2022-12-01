import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoeCard } from "../components/ShoeCard";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import SliderComponent from "../components/Slider";

const DisplayButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const FeaturedTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem;
  width: fit-content;
  align-items: center;
  border-bottom: 3px solid #001aff;
  h3 {
    font-weight: bolder;
  }
`;

const Featured = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Home = () => {
  const [sneakers, setSneakers] = useState([]); //read state

  const getSneakers = async () => {
    const data = await (
      await axios.get("http://localhost:13000/products")
    ).data;
    setSneakers(data.data);
  };

  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <div style={{marginTop:-20}}>
      <SliderComponent/>
    <Container className="mb-4">
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <FeaturedTitle>
        <h3>Featured Products</h3>
      </FeaturedTitle>
      <Featured>
        {sneakers
          .filter((shoe, idx) => idx < 4)
          .map((shoe) => (
            <ShoeCard
              name={shoe.name}
              img={shoe.images.regular}
              id={shoe.id}
              price={shoe.price}
            />
          ))}
      </Featured>
    </Container>
    </Container>
    </div>
  );
};
