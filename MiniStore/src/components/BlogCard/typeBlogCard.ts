type Post = {
  slug: any;
  id: string
  image: string
  date: string
  category: string
  categorySlug: string
  title: string
}

export type PostsProps = {
  title: string
  buttonText: string
  posts: Post[]
  slug: string;
  redirectTo?: string // rota para redirecionar (ex: "/blogs")
}