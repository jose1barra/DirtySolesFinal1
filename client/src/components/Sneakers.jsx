import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Shoe } from "../components/ShoeCard";
import styled from "styled-components";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const Prod = styled.div`
  display: flex;
  //width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  margin: 0 auto; 
`;

export const Sneakers = () => {
    const {user} = useAuthContext();
    const [shoes, setShoes] = useState([]);
  
    const getShoes = async () => {
      const data = await (
        await axios.get("http://localhost:13000/sneakers")
      ).data;
      console.log({data})
      setShoes(data.data.sneakers);
    };
  
    useEffect(() => {
      if (user) {
        getShoes();
      }
    }, [user]);
  
    return (
      <Container>
        <Prod>
          {shoes?.map((shoe) => (
            <Shoe      
              name={shoe.name}
              img={shoe.images.regular}
              price={shoe.price}
            />
          ))}
        </Prod>
      </Container>
    );
  };