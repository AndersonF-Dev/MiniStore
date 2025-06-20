import type { PostsProps} from './typeBlogCard'
import {
  Conteiner,
  TitlePostLink,
  CategoryLink,
  PostsWrapper,
  Posts,
  InforPostWrapper,
  ImgPost,
  DatePost,
  TitlePost
} from './styleBlogCard'; // ou seu arquivo de estilos


const BlogCard = ({ posts }: PostsProps) => {

  return (
    <Conteiner>

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
