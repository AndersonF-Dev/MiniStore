import type { LatestPostsProps } from './type';

import {
  Conteiner,
  TitleBtnWrapper,
  Title,
  BtnReadBlogs,
  PostsWrapper,
  Posts,
  InforPostWrapper,
  ImgPost,
  DatePost,
  TitlePost,
  StyledLink
} from './styleLatestPosts'


const LatestPosts = ({ title, buttonText, posts, redirectTo = '/blogs' }: LatestPostsProps) => {
//   const navigate = useNavigate()

  const handleClick = () => {
    window.open(redirectTo, '_blank') // abre em nova aba
  }

  return (
    <Conteiner>
      <TitleBtnWrapper>
        <Title>{title}</Title>
        <BtnReadBlogs onClick={handleClick}>{buttonText}</BtnReadBlogs>
      </TitleBtnWrapper>

        
      <PostsWrapper>
        {posts.slice(0, 4).map((post) => (
          <Posts key={post.id}>
            <ImgPost src={post.image} alt={`post-${post.id}`} />
            <InforPostWrapper key={post.id}>
              <DatePost>{post.date}</DatePost>
              <StyledLink to={`/blog/${post.slug}`}>
                <TitlePost>{post.title}</TitlePost>
              </StyledLink>
            </InforPostWrapper>
          </Posts>
        ))}
      </PostsWrapper>
    </Conteiner>
  )
}

export default LatestPosts
