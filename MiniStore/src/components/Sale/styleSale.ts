import styled, { keyframes } from 'styled-components';



export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 27.5rem;
    background-color: #9A9FA3;

     @media (max-width: ${({ theme}) => theme.breakpoints.ipadMini}) {
     /* grid-template-columns: 1fr; */
     gap: 1.0rem;
     text-align: center;
     padding: 1rem;
     /* place-items: center; */
   }
`;

export const InforConteinter = styled.div`
    width: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* background-color: orchid; */
`;

export const TextoInfor = styled.p`
    font-size: 1.875rem;
    font-weight: 300;
    color: #272727;
    position: relative;

    &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: #272727;
    margin-right: 8px;
    vertical-align: middle;
  }
`;

export const TitleInfor = styled.h3`
    color: #E0E0E0;
    font-size: 5.188rem;
    font-weight: 300;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.ipadMini}) {
      font-size: 4.188rem;
    }
`;

const glow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const BtnInfor = styled.button`
    padding: 10px 20px;
    background: linear-gradient(90deg, #111 0%, #222 100%);
    color: #fff;
    border: 1px solid #00ffe5;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: background 0.3s, transform 0.3s;
    margin-top: 8px;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, #00BCD4 0%, transparent 70%);
        animation: ${glow} 2s linear infinite;
        opacity: 0.1;
        z-index: -1;
    }

    &:hover {
        transform: scale(1.05);
        background: linear-gradient(90deg, #00BCD4 0%, #006eff 100%);
    }
`;

export const ImgInfor = styled.img`
    max-width: 32.75rem;
    max-height: 25.875rem;
    overflow: hidden;
    /* background-color:rgb(43, 184, 202); */
`;