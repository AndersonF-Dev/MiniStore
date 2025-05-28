import styled from "styled-components";
import { media } from "../../styles/theme/media";

export const Conteiner = styled.section`
    width: 72.75rem;
    height: 26rem;
    margin: 5rem 0;
    /* background-color: blue; */
    
    //laptop: "1024px", 
    @media ${media.laptop}{
        width: 63.9rem;
        padding: 0 .6rem;
        
        /* background-color: cornflowerblue; */
    }
    //ipadMini: "820px",
    @media ${media.ipadMini}{
        width: 51.1rem;
        height: 50.8rem;

        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        padding: 0 .6rem;
        /* background-color: aqua; */
    }

    //tablet: "768px",
    @media ${media.tablet}{
        width: 47.9rem;
        heigth: 90.2rem;
        padding: 0 .6rem;

        /* background-color: orchid; */
    }
    //smallTablet: "526px",
    @media ${media.smallTablet}{
        width: 32.7rem;
        heigth: 90.2rem;
        padding: 0 .6rem;
    }

    //pixel7a: "427px",
   @media ${media.pixel7a}{
    width: 26.5rem;
    height: 100.4rem;
    /* background-color: violet; */
   }
    //fold: "426px",
   @media ${media.fold}{
    width: 26.5rem;
    height: 100.4rem;
    /* background-color: violet; */
   }
    //iphoneXR: "414px",
   @media ${media.iphoneXR}{
    width: 25.8rem;
    height: 100.4rem;
    /* background-color: violet; */
   }
    //galaxyS: "360px",
   @media ${media.galaxyS}{
    width: 22.3rem;
    height: 100.0rem;
    /* background-color: violet; */
   }
    //mobileS: "320px",
   @media ${media.mobileS}{
    width: 19.88rem;
    height: 100.0rem;
    /* background-color: violet; */
   }
    
`;

export const TitleBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;

    /* background-color: olive; */
`;

export const Title = styled.h3`
    font-size: 1.575rem;
    color: #E0E0E0;

      //galaxyS: "360px",
   @media ${media.galaxyS}{
    font-size: 1.2rem;
   }
`;

export const BtnReadBlogs = styled.button`
    width: 6.125rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #43C5D5;
    border-bottom: 0.188rem solid #43C5D5;
`;

export const PostsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0rem;
    /* background-color:rgb(202, 49, 49); */
    /* width: 100%;
    height: 23rem;
    display: flex;
    gap: 2rem; */
    /* justify-content: space-around; */

    /* border: 2px solid red; */
    /* background-color: orange; */

    @media (max-width: ${({ theme }) => theme.breakpoints.customDesktop}) {
    
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    
  }

  @media (max-width: ${({ theme}) => theme.breakpoints.ipadMini}) {
     grid-template-columns: repeat(2, 1fr);
     /* justify-content: center; */
     /* align-items: center; */
     width: 80%;
     gap: 1.9rem;
     text-align: center;
     padding: .1rem;
     /* place-items: center; */
   }
    //smallTablet: "526px",
    @media ${media.smallTablet} {
     grid-template-columns: repeat(2, 1fr);
     text-align: center;
     place-items: center;
     width: 100%;
   }

   //pixel7a: "427px",
   @media ${media.pixel7a}{
    grid-template-columns: 1fr;
    /* width: ; */
    /* background-color: orange; */
   }
   //iphoneXR: "414px",
   @media ${media.iphoneXR}{
    grid-template-columns: 1fr;
    /* width: ; */
    /* background-color: orange; */
   }
   //galaxyS: "360px",
   @media ${media.galaxyS}{
    grid-template-columns: 1fr;
    /* width: ; */
    /* background-color: violet; */
   }
`;

export const Posts = styled.div`
    width: 17.15rem;
    height: 22.9rem;
    overflow: hidden;

    /* background-color: aqua; */
    /* border: 2px solid orange; */

     //laptop: "1024px", 
    @media ${media.laptop}{
        width: 14.1rem;
        /* background-color: orange; */
    }

   //smallTablet: "526px",
    @media ${media.smallTablet}{
        width: 14.7rem;
    }
`;

export const ImgPost = styled.img`
    width: 16.85rem;
    height: 17.625rem;
    border-radius: 0.958rem;

     //laptop: "1024px", 
    @media ${media.laptop}{
        width: 14.0rem;
        height: 15.7rem;
    }

    @media ${media.smallTablet}{
        width: 14.4rem;
    }
`;

export const InforPostWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-top: .5rem;
    text-align: left;
`;

export const DatePost = styled.span`
    font-size: 0.813rem;
    color: #B5B5B5;
    /* margin: 1rem 0; */
`;

export const TitlePost = styled.h2`
    font-size: 1.25rem;
    color: #E0E0E0;
`;