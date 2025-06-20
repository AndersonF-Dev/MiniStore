import styled from "styled-components";

export const Conteiner = styled.aside`
  position: fixed;
  top: 0;
  left: -100%;

  width: 15.625rem;
  height: 100vh;
  background-color: rgba(58, 58, 58, 0.91);

  padding: 1.25rem;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &.open {
    left: 0;
  }

  @media (min-width: 768px) {
    position: static;

    height: auto;
    width: 15.625rem;
    overflow: visible;
    left: 0;
    box-shadow: none;
    transition: none;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 18.75rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  font-size: 1rem;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: #00bcd4;
  padding: 0.5rem 1.25rem;
  border-radius: 0.938rem;
  cursor: pointer;
  font-size: 1.125rem;
  color: #555;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgb(44, 214, 236);
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 1.875rem;

  &.categorias .scroll-wrapper,
  &.tags .scroll-wrapper {
    max-height: 12.5rem; 
    overflow-y: auto;
    padding-right: 0.25rem;
  }

  .scroll-wrapper::-webkit-scrollbar {
    width: 0.375rem;
  }

  .scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0.25rem;
  }

  .scroll-wrapper::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.625rem;
  text-transform: uppercase;
  color: #e0e0e0;
`;

export const List = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li<{ active?: boolean }>`
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.3s;
  color: ${({ active }) => (active ? "#00BCD4" : "#B5B5B5")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    color: #00bcd4;
  }
`;

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 820px) {
    display: block;
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    z-index: 1000;
    background: #00bcd4;
    color: white;
    border: none;
    padding: 0.625rem 0.938rem;
    border-radius: 0.313rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  display: block;
  margin-left: auto;
  background: transparent;
  border: none;
  font-size: 1.313rem;
  cursor: pointer;
  color: #b5b5b5;
  margin-bottom: 0.313rem;
  transition: transform 1.2s ease-in-out;

  &:hover {
    transform: rotate(360deg);
    color: #00bcd4;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
