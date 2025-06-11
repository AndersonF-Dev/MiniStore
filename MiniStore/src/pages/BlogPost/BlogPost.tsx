// import React from 'react'
import DOMPurify from 'dompurify';
// import imgpost from '../../assets/img/imgpost.svg'
import { blogPosts } from '../../data/blogData';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';
import dataPost from '../../data/PostData';
import LatestPosts from '../../components/LatestPosts/LatestPosts';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';

import {
    Conteiner,
    BlogPostWrapper,
    ArticleHeader,
    ItemInfo,
    ArticleTitle,
    ImgArticle,
    EstiloDoPost,
    PostShareWrapper,
} from './styleBlogPost'
// import { useEffect, useState } from 'react';

// interface PostData {
//   titulo: string;
//   categoria: string;
//   data: string;
//   imagem: string;
//   conteudo: string;
// }

const BlogPost = () => {
  
  const token = "IGQVJ..."; // Depois virá da sua API em Node.js
  const posts = dataPost.posts;
  const { slug } = useParams();
//   const [post, setPost] = useState<PostData | null>(null);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post não encontrado.</p>;

//   useEffect(() => {
//     async function fetchPost() {
//       try {
//         const response = await fetch(`/api/posts/${slug}`); // ou a URL que você for usar
//         const data = await response.json();
//         setPost(data);
//       } catch (error) {
//         console.error('Erro ao buscar post:', error);
//       }
//     }

//     fetchPost();
//   }, [slug]);

//   if (!post) return <p>Carregando...</p>;

  return (
    <Conteiner>
      <BlogPostWrapper>
        <ArticleHeader>
          <ItemInfo>
            {post.data} - <span>{post.categoria}</span>
          </ItemInfo>
          <ArticleTitle>{post.titulo}</ArticleTitle>
        </ArticleHeader>
        <ImgArticle src={post.imagem} alt={post.titulo} />
        {/* <ImgArticle src={post.imagem} alt={post.titulo} /> */}
      </BlogPostWrapper>

      <EstiloDoPost
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.conteudo),
        }}
      />
      <PostShareWrapper>
        <p>Compartilhar:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
        <span className="tooltip">Facebook</span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        <span className="tooltip">Twitter</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        <span className="tooltip">Instagram</span>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
        <span className="tooltip">LinkedIn</span>
      </a>
      <a href="https://wa.me/?text=Veja+esse+post!" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
        <span className="tooltip">WhatsApp</span>
      </a>
      </PostShareWrapper>
      <Comments />
      <CommentForm />
      <LatestPosts
          title="Últimas postagens"
          buttonText="Ler blogs"
          posts={posts}
          redirectTo="/blog"
      />
      <Newsletter />
      <InstagramFeed token={token} />
    </Conteiner>
  );
};

export default BlogPost;