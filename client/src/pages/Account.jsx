//like sign up and login but instead it is inventory and sneaker
import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Container, Button} from "react-bootstrap";
import { Sneakers } from "../components/Sneakers";
import { Inventory } from "../components/Inventory";


export const Account = () => {
    const {logout} = useLogout(); //for logout button
    const [toggle, setToggle] = useState(false);
  
    const handleClick  = () => {
      logout();
    }
  return (
    <Container className="mb-4">
    <Container className="vh-100%">
        <span className="d-flex flex-row justify-content-end">
            <Button className="mx-3" onClick={() => setToggle(false)}>Inventory</Button>
            <Button onClick={() => setToggle(true)}>Sneakers</Button>
            <Button className="mx-3" onClick={handleClick}>Log Out</Button>
        </span>
        <h1>Welcome back, DirtySoles!</h1>
        <div className="d-flex">
            {!toggle ? <Inventory /> : <Sneakers/>}
        </div>
    </Container> 
    </Container>      
  )
}