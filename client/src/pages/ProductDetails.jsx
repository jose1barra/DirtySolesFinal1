import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const DetailRoute = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

const DetailCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const DetailImage = styled.div`
  width: 50%;
  margin: 2rem;
`;

const DetailDesc = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DetailTitle = styled.div`
  h2 {
    font-weight: bold;
  }

  h3 {
    font-weight: bolder;
  }
`;
const DetailSizes = styled.div`
  gap: 2rem;
`;

export const ProductDetails = ({prod}) => {
  const params = useParams(); //read doc
  const [sneakersDetails, setSneakerDetails] = useState([]); //read state

  const getSneakerDetails = async () => {
    const data = await (
      await axios.get(
        `http://localhost:13000/products/${params?.sneakerId ?? ""}`
      )
    ).data;
    setSneakerDetails(data.data);
  };
  useEffect(() => {
    getSneakerDetails();
  }, []);

  console.log(sneakersDetails.price);

  return (
    sneakersDetails.price &&
    <Container className="mb-4">
    <Container
      className="d-flex flex-column justify-content-center vh-100%"
    >
      <DetailRoute>
        <Link to="/">Home / </Link>
        <Link to="/products">Products / </Link>
        <span>{sneakersDetails.name}</span>
      </DetailRoute>
      <DetailCard className="d-flex flex-row align-items-center">
        <DetailImage>
          <img src={sneakersDetails.images?.regular} width="100%" alt="shoe" />
        </DetailImage>
        <DetailDesc>
          <DetailTitle className="d-flex flex-column">
            <h2>{sneakersDetails.name}</h2>
            <p>Colorway:{sneakersDetails.colorway}</p>
            <h3>${sneakersDetails.price}</h3>
          </DetailTitle>
          <DetailSizes className="d-flex flex-row align-items-center">
            <Form.Select style={{ height: "40px", width: "100px" }}>
              {sneakersDetails.shoeSize?.map(function (shoe, idx) {
                return <option value={idx}>{shoe.size}</option>;
              })}
            </Form.Select>
            <p>
              The sizes are set to men sizes unless it is identified as W. Buying for women sizes just subtract 1.5
              to the men sizes. For example, women 6 is a men 4.5.
            </p>
          </DetailSizes>
          <Button>Add to Cart</Button>
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      intent: "capture",
                      currency: "USD",
                      amount: {
                        value: sneakersDetails.price,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                alert("Transaction completed by " + name);
              }}
            />
          </PayPalScriptProvider>
        </DetailDesc>
      </DetailCard>
    </Container>
    </Container>
  );
};
