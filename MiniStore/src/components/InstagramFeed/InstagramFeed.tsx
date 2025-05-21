import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Grid,
  PostImage,
  PostLink,
  ErrorMessage,
} from "./styleInstagramFeed";

type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
};

type InstagramFeedProps = {
  token: string;
};

const InstagramFeed: React.FC<InstagramFeedProps> = ({ token }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${token}`
        );
        setPosts(response.data.data.slice(0, 6));
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os posts do Instagram.");
      }
    };

    fetchInstagramPosts();
  }, [token]);

  return (
    <Container>
      <Title>Últimas do Instagram</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Grid>
        {posts.map((post) => (
          <PostLink
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PostImage src={post.media_url} alt={post.caption || "Post"} />
          </PostLink>
        ))}
      </Grid>
    </Container>
  );
};

export default InstagramFeed;
