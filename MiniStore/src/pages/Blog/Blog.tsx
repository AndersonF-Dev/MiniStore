import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed'
import { useEffect, useState } from 'react'
import postData from '../../data/PostData';
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

const Blog: React.FC = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { posts } = postData;


    const [currentPost, setCurrentPost] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(9);

    // Atualiza o número de produtos por página com base na largura da tela
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 526) {
                setpostsPerPage(5);
            } else if (width <= 834) {
                setpostsPerPage(10);
            } else {
                setpostsPerPage(9);
            }
        };

        handleResize(); // Aplica na primeira renderização

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const totalPosts = Math.ceil(posts.length / postsPerPage);
    const startIndex = (currentPost - 1) * postsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

    return (
        <Conteiner>
            <PageHeader
                title="Blog"
                breadcrumbs={[
                    { name: "Início", path: "/" },
                    { name: "Produtos", path: "/shop" },
                    { name: "Blog" }
                ]}
            />

            {/* Botão que aparece apenas no mobile para abrir a sidebar */}
            <Button onClick={() => setIsSidebarOpen(true)} className="toggle-button">
                ☰ Filtros
            </Button>
            <Wrapper>
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
                            {Math.min(startIndex + postsPerPage, posts.length)} de {posts.length} resultados
                        </ResultsTitle>

                        <SortingTexto>
                            Classificação padrão
                            <FiChevronDown />
                        </SortingTexto>
                    </ResultsSortingConteiner>

                    <CardContainer style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
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

        </Conteiner>
    )
}


export default Blog;