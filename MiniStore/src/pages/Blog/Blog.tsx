// import React from 'react'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed'
import { useState } from 'react'
import postData  from '../../data/PostData';
import { FiChevronDown } from 'react-icons/fi';
import BlogCard from '../../components/BlogCard/BlogCard';
import Shopsidebar from '../../components/Shopsidebar/Shopsidebar';
import {
    Conteiner,
    CardContainer,
    ResultsSortingConteiner,
    ResultsTitle,
    SortingTexto,
    PaginationWrapper,
    PageButton,
    Button,    
    ProductsSidebarWrapper,
    Wrapper,
} from './styleBlog'

const POSTS_PER_PAGE = 9;
const Blog: React.FC = () => {
     const token = "IGQVJ..."; // Depois virá da sua API em Node.js
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const { posts } = postData;

     
       const [currentPost, setCurrentPost] = useState(1);
     
       const totalPosts = Math.ceil(posts.length / POSTS_PER_PAGE);
       const startIndex = (currentPost - 1) * POSTS_PER_PAGE;
       const currentPosts = posts.slice(
         startIndex,
         startIndex + POSTS_PER_PAGE
       );
  return (
        <Conteiner>
            <PageHeader
                        title="Blog"
                        breadcrumbs={[
                        { name: "Início", path: "/" },
                        { name: "Produtos", path: "/shop" },
                        { name: "Blog" }
                    ]}
                        // variant="product"
                    />
                       {/* Botão que aparece apenas no mobile para abrir a sidebar */}
                          <Button onClick={() => setIsSidebarOpen(true)} className="toggle-button">
                            ☰ Filtros
                          </Button>
                    <Wrapper>
                    {/* <Shopsidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> */}
                    <Shopsidebar 
                        isOpen={isSidebarOpen} 
                        setIsOpen={setIsSidebarOpen} 
                        context="blog" 
                        // activeFilter={activeFilter}
                        // setActiveFilter={setActiveFilter}
                    />

                                    <ProductsSidebarWrapper>
                        <ResultsSortingConteiner>
                            <ResultsTitle>
                                Mostrando {startIndex + 1}–
                                {Math.min(startIndex + POSTS_PER_PAGE, posts.length)} de {posts.length} resultados
                            </ResultsTitle>
                        
                            <SortingTexto>
                                Classificação padrão
                                <FiChevronDown />
                            </SortingTexto>
                        </ResultsSortingConteiner>
                        
                                        <CardContainer style={{ display: "flex", alignItems: "center",justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                                        {currentPosts.map((post) => (
                                        <BlogCard
                                            key={post.id}
                                            title={post.title}
                                            buttonText="Ler blogs"
                                            posts={[post]}
                                            slug={post.slug}
                                        />
                                        ))}
                        
                                        </CardContainer>
                                    </ProductsSidebarWrapper>
                    </Wrapper>

            {/* Paginação com estilo e números */}
        <PaginationWrapper>
            {[...Array(totalPosts)].map((_, index) => (
            <PageButton
                key={index}
                active={currentPost === index + 1}
                onClick={() => setCurrentPost(index + 1)}
            >
                {index + 1}
            </PageButton>
            ))}
        </PaginationWrapper>
                
                    <Newsletter />
                    <InstagramFeed token={token} />
            Blog

        </Conteiner>
  )
}


export default Blog;