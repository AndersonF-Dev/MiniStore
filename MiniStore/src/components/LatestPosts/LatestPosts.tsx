
// import post1 from '../../assets/img/post1.png'

// import { useNavigate } from 'react-router-dom'
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
  TitlePost
} from './styleLatestPosts'

type Post = {
  id: string
  image: string
  date: string
  title: string
}

type LatestPostsProps = {
  title: string
  buttonText: string
  posts: Post[]
  redirectTo?: string // rota para redirecionar (ex: "/blogs")
}

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
            <InforPostWrapper>
              <DatePost>{post.date}</DatePost>
              <TitlePost>{post.title}</TitlePost>
            </InforPostWrapper>
          </Posts>
        ))}
      </PostsWrapper>
    </Conteiner>
  )
}

export default LatestPosts
