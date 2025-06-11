import React from 'react';
import { useParams } from 'react-router-dom';
import postData from '../../data/PostData';
import {
  Container,
  BackLink,
  Title,
  PostList,
  PostCard,
  PostImage,
  PostInfo,
  PostDate,
  PostTitle
} from './styleCategoriaPage';

const CategoriaPage: React.FC = () => {
  const { slug } = useParams();
    const { posts } = postData;

  const filteredPosts = posts.filter(post => post.categorySlug === slug);

  return (
    <Container>
      <BackLink to="/blog">← Voltar ao blog</BackLink>
      <Title>Categoria: {slug}</Title>

      <PostList>
        {filteredPosts.map(post => (
          <PostCard key={post.id}>
            <PostImage src={post.image} alt={post.title} />
            <PostInfo>
              <PostDate>{post.date} - {post.category}</PostDate>
              <PostTitle>{post.title}</PostTitle>
            </PostInfo>
          </PostCard>
        ))}
      </PostList>
    </Container>
  );
};

export default CategoriaPage;
