export type Post = {
  id: string
  image: string
  date: string
  title: string
  slug: string;
}

export type LatestPostsProps = {
  title: string
  buttonText: string
  posts: Post[]
  redirectTo?: string // rota para redirecionar (ex: "/blogs")
}