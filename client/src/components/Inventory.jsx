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

export const Inventory = () => {
  const {user} = useAuthContext();
  const [inventory, setInventory] = useState([]);

  const getInventory = async () => {
    const data = await (
      await axios.get("http://localhost:13000/inventory")
    ).data;
    console.log(data)
    setInventory(data.data);
  };

  useEffect(() => {
    if (user) {
      getInventory();
    }
  }, [user]);

  return (
    <Container>
      <Prod>
        {inventory.map((items) => (
          <Shoe
            name={items.name}
            img={items.images.regular}
            id={items.id}
            price={items.price}
          />
        ))}
      </Prod>
    </Container>
  );
};
