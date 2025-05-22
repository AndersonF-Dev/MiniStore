

// import styled from "styled-components";

// export const Conteiner = styled.footer`
//   width: 100%;
//   color: #E0E0E0;
//   background-color: #272727;
//   font-family: "Lato", sans-serif;
//   padding: 2rem 1rem;
// `;

// export const Wrapper = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 2rem;

//   @media (max-width: 820px) {
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   }

//   @media (max-width: 526px) {
//     grid-template-columns: 1fr;
//     text-align: center;
//     place-items: center;
//   }
// `;

// export const Company = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   @media (max-width: 526px) {
//     align-items: center;
//   }
// `;

// export const ImgLogo = styled.img`
//   width: 13rem;
//   padding-bottom: 1rem;
// `;

// export const Infor = styled.p`
//   font-weight: 300;
//   color: #B5B5B5;
//   font-size: 1rem;
//   margin-bottom: 1rem;
//   max-width: 22rem;

//   @media (max-width: 526px) {
//     text-align: center;
//   }
// `;

// export const SocialList = styled.ul`
//   display: flex;
//   list-style: none;
//   gap: 1rem;
//   padding: 0;
// `;

// export const SocialItem = styled.li`
//   font-size: 1.4rem;
//   cursor: pointer;
// `;

// export const QuickLinksConteiner = styled.div``;

// export const QuickLinksTitle = styled.h2`
//   font-size: 1.25rem;
//   margin-bottom: 0.5rem;
// `;

// export const QuickLinksList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// export const QuickLinksItem = styled.li`
//   color: #E0E0E0;
//   margin: 0.2rem 0;
//   cursor: pointer;

//   &:hover {
//     color: #00BCD4;
//   }
// `;

// export const HelpInfoConteiner = styled.div``;

// export const HelpInfoTitle = styled.h2`
//   font-size: 1.25rem;
//   margin-bottom: 0.5rem;
// `;

// export const HelpInfoList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// export const HelpInfoItem = styled.li`
//   color: #E0E0E0;
//   margin: 0.2rem 0;
//   cursor: pointer;

//   &:hover {
//     color: #00BCD4;
//   }
// `;

// export const ContactUsConteiner = styled.div`
//   max-width: 15rem;

//   @media (max-width: 526px) {
//     text-align: center;
//   }
// `;

// export const ContactUsTitle = styled.h3`
//   font-size: 1.25rem;
//   margin-bottom: 0.5rem;
// `;

// export const ContactUsInfor = styled.p`
//   color: #B5B5B5;
//   margin: 0.5rem 0;
// `;

// export const ContactUsEmailPhone = styled.span`
//   color: #E0E0E0;
//   font-size: 1rem;
//   cursor: pointer;
//   display: block;

//   &:hover {
//     text-decoration: underline;
//     color: #00BCD4;
//   }
// `;

import styled from "styled-components";

export const Conteiner = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 23.375rem; */
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 1rem;

   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* justify-content: center;
    height: auto;
    gap: 2rem;
    padding: 2rem 0; */
    flex-direction: column;
    width: 51rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  /* height: 20rem; */
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  justify-content: space-between; */

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    background-color: brown;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* justify-content: center;
    height: auto;
    gap: 2rem;
    padding: 2rem 0; */
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  @media (max-width: ${({ theme}) => theme.breakpoints.tablet}) {
     /* grid-template-columns: 1fr; */
     gap: 1.0rem;
     text-align: center;
     padding: 1rem;
     /* place-items: center; */
   }

  @media (max-width: ${({ theme}) => theme.breakpoints.mobile3}) {
     grid-template-columns: 1fr;
     text-align: center;
     place-items: center;
   }
`;

export const Company = styled.div`
  /* width: 21.188rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: blue;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    /* width: 100%; */
    align-items: center;
  }

  
`;

export const ImgLogo = styled.img`
  width: 13rem;
  padding: 1rem;
`;

export const Infor = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 1rem;
  margin-bottom: 1rem;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
     text-align: center;
   }
`;

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
`;

export const SocialItem = styled.li`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const QuickLinksConteiner = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 0.5rem; */
  background-color: blueviolet;
  text-align: left;
`;

export const QuickLinksTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const QuickLinksList = styled.ul`
    list-style: none;
    text-align: left;
    margin: 0.2rem 0;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export const QuickLinksItem = styled.li`
  color: ${({ theme }) => theme.colors.title};
  margin: 0.2rem 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HelpInfoConteiner = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 0.5rem; */
  background-color: blueviolet;
  text-align: left;
`;

export const HelpInfoTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const HelpInfoList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

export const HelpInfoItem = styled.li`
  color: ${({ theme }) => theme.colors.title};
  margin: 0.2rem 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ContactUsConteiner = styled.div`
  max-width: 15rem;
  text-align: left;
  background-color: blueviolet;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile3}) {
    /* width: 100%; */
    text-align: center;
  }
`;

export const ContactUsTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 0.5rem;
`;

export const ContactUsInfor = styled.p`
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0.5rem 0;
`;

export const ContactUsEmailPhone = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;
  cursor: pointer;
  display: block;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
