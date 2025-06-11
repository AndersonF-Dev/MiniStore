import styled from "styled-components";
import { colors, fonts, mixins}from '../../styles/theme/media'

export const ContactSection = styled.section`
    width: 100%;
    max-width: 72.75rem;
    ${fonts.secondary}
    ${mixins.flexJustifyCenterColumn}
    padding: 0 0.7rem;
    /* display: flex;
    align-items: center;
    flex-direction: column; */
    /* gap: 120px; */

    margin-top: 1.875rem;
    
    /* background-color: blueviolet; */
    
    
`;

export const ContactConteiner = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    ${mixins.flexSpaceBetweenWrap}

    /* flex-wrap: wrap; */
    gap: 1.875rem;

    width: 100%;
    text-align: left;
    margin-top: 80px;

    /* background-color: olive; */
`;

export const ContactInfo = styled.div`
    flex: 1  18.75rem; /* cresce, encolhe, mínimo 300px */
    min-width: 17.5rem;
    /* display: flex;
    flex-direction: column; */
    ${mixins.flexColumn}
    gap: 0.625rem;
    /* background-color: brown; */
`;

export const InfoTitle = styled.h3`
    ${colors.title}
    /* color: #E0E0E0; */
    font-size: 1.25rem;
`;

export const ContactDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    /* color: #B5B5B5; */
    /* color: ${colors.subtitle}; */
    ${colors.subtitle}
`;

//Estilo da Tabela de informações de comtatu

export const TableWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  ${mixins.flexJustifyCenterWrap}
  gap: 1.1rem;

  padding: 0.5rem 0;
  text-align: left;
  /* background-color: transparent; */
  /* background-color: blue; */

  @media (max-width: 768px) {
    /* flex-direction: column;
    align-items: center; */
    /* ${mixins.flexCenterColumn} */
  }
  @media (max-width: 600px) {
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    /* ${mixins.flexCenterColumn} */
  }
`;

export const Column = styled.div`
  flex: 1;
  max-width: 16rem;
  min-width: 15.625rem;

  /* background-color: chocolate; */
`;

export const TitleRow = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.938rem;
  ${colors.title}
  /* color: #E0E0E0; */
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  padding-bottom: 0.313rem;
`;

export const Label = styled.p`
  font-weight: bold;
  margin-top: 0.625rem;
`;

export const Info = styled.p`
  font-size: 0.875rem;
  ${colors.subtitle}
  /* color: #B5B5B5; */
  margin-bottom: 0.5rem;
`;