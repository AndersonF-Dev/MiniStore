import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  justify-content: center;
`;

export const PostLink = styled.a`
  display: block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 20px;
`;
