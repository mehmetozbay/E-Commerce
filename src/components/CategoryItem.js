import React from "react";

import styled from "styled-components";
import { mobile } from "../Responsive";
const Container = styled.div`
  flex: 1;
  position: relative;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  color: gray;
  border-color: #fff;
  &:hover,
  &:focus {
    background-color: transparent;
    color: #008080;
    transition: all 0.2s;
    border-color: #008080;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title} </Title>
        <Button>SHOP NOW! </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
