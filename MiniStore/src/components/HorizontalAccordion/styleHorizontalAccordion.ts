import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
  margin: 40px 0;

  /* background-color: orchid; */
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: transparent;
  /* background-color: ${({ active }) => (active ? '#007bff' : '#e0e0e0')}; */
  color: ${({ active }) => (active ? '#00BcD4' : '#E0E0E0')};
  font-weight: bold;
  font-size: 30px;
  border: none;
  /* border-right: 1px solid ${({ active }) => (active ? '#E0E0E0' : 'none')}; */
  /* border-bottom: 1px solid ${({ active }) => (active ? '#00BcD4' : 'none')}; */
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const Content = styled.div`
  background: transparent;
  width: 100%;
  /* background-color: blue; */
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E0E0E0;

  p, li {
    font-size: 16px;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  ul {
    list-style-type: none;
    padding-left: 20px;
  }

  span {
    color: #B5B5B5;
  }
`;
