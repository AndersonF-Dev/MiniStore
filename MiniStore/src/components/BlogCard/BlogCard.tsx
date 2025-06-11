
// import React from 'react';
// import { motion } from "framer-motion";
// import { product } from '../../data/productsData';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import {
    Conteiner,
  TitleBtnWrapper,
    TitlePostLink,
  CategoryLink,
  PostsWrapper,
  Posts,
  InforPostWrapper,
  ImgPost,
  DatePost,
  TitlePost
} from './styleBlogCard'; // ou seu arquivo de estilos

type Post = {
  slug: any;
  id: string
  image: string
  date: string
  category: string
  categorySlug: string
  title: string
}

type PostsProps = {
  title: string
  buttonText: string
  posts: Post[]
  slug: string;
  redirectTo?: string // rota para redirecionar (ex: "/blogs")
}

const BlogCard = ({  posts }: PostsProps) => {

  return (
      <Conteiner>
        <TitleBtnWrapper>
          {/* <Title>{title}</Title> */}
          {/* <BtnReadBlogs onClick={handleClick}>{buttonText}</BtnReadBlogs> */}
        </TitleBtnWrapper>
  
        <PostsWrapper>
          {posts.map((post) => (
            <Posts key={post.id}>
              <ImgPost src={post.image} alt={`post-${post.id}`} />
              <InforPostWrapper>
                <DatePost>
                    {post.date} - <CategoryLink to={`/categoria/${post.categorySlug}`}>{post.category}</CategoryLink>
                </DatePost>
                <TitlePost>
                    <TitlePostLink to={`/blog/${post.slug}`}>
                        {post.title}
                    </TitlePostLink>
                </TitlePost>

              </InforPostWrapper>
            </Posts>
          ))}
        </PostsWrapper>
      </Conteiner>
    )
  }

export default BlogCard;
