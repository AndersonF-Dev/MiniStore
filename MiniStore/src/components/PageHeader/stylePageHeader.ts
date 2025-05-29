import styled from "styled-components";
// import { theme } from "../../styles/theme";

export const Container = styled.div`
width: 100%;
  padding: 2rem 1rem;
  /* border-bottom: 1px solid #ccc; */
`;

export const Title = styled.h1`
  font-size: 5.188rem;
  margin-bottom: 0.5rem;
  color: #E0E0E0;
`;

export const Breadcrumb = styled.div`
  font-size: 1rem;

  a {
    text-decoration: none;
    color: #D8D4D4;
    transition: color 0.2s;

    &:hover {
      color: #00BCD4;
    }
  }
`;
