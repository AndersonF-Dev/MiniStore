import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { media, mixins } from "../../styles/theme/media";


// export const Conteiner = styled.aside<{ isOpen: boolean }>`
//     ${mixins.flexAlignStartColumn}
//     width: 20%;
//     margin-top: 80px;

    
//     @media (max-width: 820px) {
//     position: static;
//     top: 0;
//     right: 0;
//     height: 100%;
//     background-color: rgba(58, 58, 58, 0.79);
//     z-index: 999;
//     transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
//     box-shadow: ${({ isOpen }) => (isOpen ? "2px 0 8px rgba(0, 0, 0, 0.1)" : "none")};
//   }
// `;

export const Conteiner = styled.aside`
  position: fixed;
  margin-top: 80px;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100vh;
  background-color: rgba(58, 58, 58, 0.79);
  padding: 20px;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
   overflow-x: hidden;
  /* box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); */

  &.open {
    left: 0;
  }

  @media (min-width: 821px) {
    position: static;
    height: auto;
    width: 250px;
    overflow: visible;
    left: 0;
    box-shadow: none;
    transition: none;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: #00BCD4;
  padding: 8px 20px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  color: #555;
  transition: background 0.3s ease-in-out;

  &:hover{
     background:rgb(44, 214, 236);
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #E0E0E0;
`;

export const List = styled.ul`
    text-align: left;
    list-style: none;
    padding-left: 0;
`;

export const ListItem = styled.li<{ active?: boolean }>`
  margin-bottom: 8px;
  cursor: pointer;
  /* color: #B5B5B5; */
  transition: color 0.3s;
  color: ${({ active }) => (active ? "#00BCD4" : "#B5B5B5")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    color: #00BCD4;
  }
`;

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 820px) {
    display: block;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background: #00BCD4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;


export const CloseButton = styled.button`
  display: block;
  margin-left: auto;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #B5B5B5;
  margin-bottom: 20px;

  @media (min-width: 821px) {
    display: none;
  }
`;


