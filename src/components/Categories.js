import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../Responsive";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
