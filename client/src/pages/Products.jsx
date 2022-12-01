import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ShoeCard } from "../components/ShoeCard";
import styled from "styled-components";
import axios from "axios";

const TitleProd = styled.div`
  display: flex;
  flex-direction: row; 
  margin: 4rem; 
  width: fit-content; 
  align-items: center; 
  border-bottom: 3px solid #001aff;;
  h3 {
    font-weight: bolder;
  }
`;

const Prod = styled.div`
  display: flex;
  //width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  margin: 0 auto; 
`;

export const Products = () => {
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
    <Container className="mb-4">
    <Container>
        <TitleProd>
          <h3>All Products</h3>
        </TitleProd>
        <Prod>
          {sneakers.map((shoe) => (
            <ShoeCard
              name={shoe.name}
              img={shoe.images.regular}
              id={shoe.id}
              price={shoe.price}
            />
          ))}
        </Prod>
    </Container>
    </Container>
  );
};
