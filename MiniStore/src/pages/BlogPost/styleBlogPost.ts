import styled from "styled-components";
// import { media } from "../../styles/theme/media";
// import { theme } from "../../styles/theme";
// import { Link } from "react-router-dom";

export const Conteiner = styled.section`
    width: 100%;
    max-width: 72.75rem;
    font-family: ${({ theme}) => theme.fonts.secondary};
    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.7rem;
    /* padding: 0 70px; */
    background-color: blueviolet;
    
    
`;

export const BlogPostWrapper = styled.article`
    width: 100%;
`;

export const ArticleHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;

    background-color: olive;
`;

export const ItemInfo = styled.p`
    font-size: 13px;
    color: #B5B5B5;
    cursor: pointer;

    span {
        color: #00BCD4;
        text-decoration: underline;

        &:hover{
            color: #B5B5B5;
            text-decoration: none;
        }
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 1rem;
    color: #E0E0E0;
    text-transform: uppercase;
`;

export const ImgArticle = styled.img`
    width: 100%;
    margin-top: 30px;
`;

// Estilização global da caixa de texto

export const EstiloDoPost = styled.div`
  width: 100%;
  /* max-width: 720px; */
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  text-align: left;

  background-color: olive;

  p, h3, h4, h5 {
    font-size: clamp(1rem, 1.5vw, 1.0rem);
    line-height: 1.6;
    margin-bottom: 1rem;
    word-break: break-word;
  }

  img {
    max-width: 100%;
    /* width: 57%; */
    height: auto;
    border-radius: 15px;
    display: block;
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Novo bloco responsivo */
  .post-bloco {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    .post-bloco {
      flex-direction: row;
      align-items: flex-start;
    }

    .post-imagem {
      margin: auto;
      /* align-items: center; */
      max-width: 300px;
      flex-shrink: 0;
    }

    .post-texto {
      flex: 1;
    }
  }
`;


export const PostShareWrapper = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    background-color: olive;
    padding: 0 0.7rem;
   
    
    p{
        margin-bottom: 0.3rem;
    }
    
    a{
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #B5B5B5;
        /* transform: scale(1); */
        transition: transform 0.3s ease;
        
        &:hover{
            color: #00BCD4;
            transform: scale(1.2);
        }
        &:hover .tooltip {
        opacity: 1;
        transform: translateY(-10px);
        }
    }
    .tooltip {
    position: absolute;
    bottom: 120%;
    right: 50%;
    transform: translateX(50%) translateY(-8);
    background-color: #333;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 2;
  }
`;

