import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  /* background-color: orange; */
`;

export const BackLink = styled(RouterLink)`
  display: inline-block;
  margin-bottom: 24px;
  text-decoration: none;
  color: #555;
  font-weight: bold;
  transition: color 0.3s;
  

  &:hover {
    color: #000;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const PostCard = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  padding: 16px;
`;

export const PostDate = styled.p`
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 8px;
`;

export const PostTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
`;
