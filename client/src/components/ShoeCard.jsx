import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    
  }
`;

export const ShoeCard = ({ name, img, id, price }) => {
  return (
    <Link relative="path" to={`/products/${id}`} style={{textDecoration: "none", color: "#777"}} >
      <Card>
        <img
          src={img}
          alt=""
          width="100%"
          style={{ borderRadius: "10px", padding: "20px" }}
        />
        <div style={{ width: "100%", boxSizing: "border-box", padding: "1rem" }}>
          {name} <br/> ${price}
        </div>
      </Card>
    </Link>
  );
};

export const Shoe = ({name, img, price}) => {
  return(
    <Card>
    <img
      src={img}
      alt=""
      width="100%"
      style={{ borderRadius: "10px", padding: "20px" }}
    />
    <div style={{ width: "100%", boxSizing: "border-box", padding: "1rem" }}>
      {name} <br/> ${price}
    </div>
  </Card>
  )
}