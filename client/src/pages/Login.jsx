import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Button } from "../components/Button";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const LoginSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 600px;
  width: 50%;
`;
const LoginCard = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  width: 350px;
  height: 400px;
  position: relative;
  text-align: center;
  padding: 20px 0px;
  margin: auto;
  box-shadow: 0 0 20px 0px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

const LoginImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  border-bottom: 3px solid #001aff; ;
`;

const LoginInp = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: space-between;
  padding: 10px;
`;

const Error = styled.div`
  padding: 10px;
  background: #ffcccc;
  border: 2px solid red;
  border-radius: 4px;
  margin: 20px 0;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);
  };
  return (
    <Container className="mb-4">
    <Wrapper>
      <LoginImage>
        <img
          src={require("../images/spinningshoe.gif")}
          width="100%"
          className="d-flex justify-content-center align-items-center"
        />
      </LoginImage>
      <LoginSide onSubmit={handleSubmit}>
        <LoginCard className="shadow-lg p-3 bg-white rounded">
          <LoginTitle>
            <h4 className="">Login</h4>
          </LoginTitle>
          <LoginInp>
            <input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br></br>
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
           <Button disabled={loading}>Login</Button>
           {error && <Error>{error}</Error>}
          </LoginInp>
        </LoginCard>
      </LoginSide>
    </Wrapper>
    </Container>
    // return (
    //   <Container className="vh-100 d-flex justify-content-center align-items-center">
    //     <Form onSubmit={handleSubmit}>
    //       <h3 className="text-center">Login</h3>

    //       <label>Email</label>
    //       <input
    //         type="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //       />
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //       />
    //       <Button disabled={loading}>Login</Button>
    //       {error && <Error>{error}</Error>}
    //     </Form>
    //   </Container>
  );
};
