import styled from 'styled-components';

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: space-around; */

    /* margin-top: 80px; */

    /* background-color: blue; */
`;

export const Wrapper = styled.div`
  /* padding: 2rem; */
  width: 100%;
  font-family: ${({ theme}) => theme.fonts.primary};
  /* max-width: 800px; */
  /* margin: 0 auto; */
  display: flex;
  align-items: start;
  /* justify-content: space-between; */
  flex-direction: column;

  /* background-color: orange; */
`;

export const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

export const TitleItemWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1PX solid #CDCDCD;
  padding: 0.5rem 1rem;

  background-color: chocolate;
`;
export const TitleItem = styled.h2`
  font-size: 1rem;
  color: #E0E0E0;

`;

export const CardItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: blueviolet;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Img = styled.img`
  width: 80px;
  border-radius: 15px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const NameProduct = styled.h3`
  font-size: 1.0rem;
  color: #E0E0E0;
`;
export const PreceProduct = styled.span`
  font-size: 1.0rem;
  color: #00BCD4;
`;

export const SubTotal = styled.p`
  /* font-size: 1.25rem; */
  color: #00BCD4;
`;

export const RemoveButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #d62828;
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

export const ProductItem = styled.li`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background-color: transparent;
  /* background: #272727; */
  padding: 1rem;
  border-radius: 8px;
`;



export const Total = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 1rem;
`;

// export const CheckoutButton = styled.button`
//   background: #0077cc;
//   color: white;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #005fa3;
//   }
// `;

// Estilos  da tabela

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  /* tr{
    background-color: transparent;
  } */

  th, td {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }

  th {
    background-color: transparent;
    font-weight: 600;
  }
`;

export const CardTotalsTable = styled.table`
  width: 50%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 1rem;
  /* background-color: #555; */

  th {
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 0.5rem;
    color: #555;
  }
  
  td {
   
    background-color: transparent;
    /* background-color: violet; */
    padding: 1rem;
    border-radius: 8px;
   
  }
`;

export const ButtonBase = styled.button`
  padding: 10px 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  color: #E0E0E0;
`;

export const UpdateButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #E0E0E0;
`;

export const ContinueButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.dark};
  color: #E0E0E0;
`;

export const CheckoutButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.dark};
  color: #E0E0E0;
`;



