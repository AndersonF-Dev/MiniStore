import styled from "styled-components";

export const Conteiner = styled.section`
    width: 72.75rem;
    height: 26rem;
    margin: 5rem 0;
    /* background-color: blue; */
`;

export const TitleBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;

    /* background-color: olive; */
`;

export const Title = styled.h3`
    font-size: 1.575rem;
    color: #E0E0E0;
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
    height: 23rem;
    display: flex;
    gap: 2rem;
    /* justify-content: space-around; */

    /* border: 2px solid red; */
`;

export const Posts = styled.div`
    width: 17.15rem;
    height: 22.9rem;
    overflow: hidden;
    /* background-color: aqua; */
    /* border: 2px solid orange; */
`;

export const ImgPost = styled.img`
    width: 16.85rem;
    height: 17.625rem;
    border-radius: 0.958rem;
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