import { useEffect, useState } from "react";
import { FiSearch, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import postData from '../../data/PostData';
import { product } from "../../data/productsData";
import type { ProductTypes } from "../../types/ProductTypes";
import type { ShopSidebarProps, FilterData } from './typeShopsidebar'
import {
  Conteiner,
  SearchContainer,
  Input,
  Button,
  FilterGroup,
  Title,
  List,
  ListItem,
  CloseButton
} from "./styleShopsidebar";

const { latestPosts } = postData;
const FilterBlock = ({
  title,
  items,
  activeItem,
  onItemClick,
}: {
  title: string;
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}) => (
  <FilterGroup className={title.toLowerCase()}>
    <Title>{title}</Title>
    <div className="scroll-wrapper">
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            active={item === activeItem}
            onClick={() => onItemClick(item)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  </FilterGroup>
);

const LatestPosts = () => (
  <FilterGroup>
    <Title>ÚLTIMOS POSTS</Title>
    <List>
      {latestPosts.map((post) => (
        <ListItem key={post.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            src={post.image}
            alt={post.title}
            width={60}
            height={60}
            style={{ borderRadius: "6px", objectFit: "cover" }}
          />
          <Link to={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {post.title}
          </Link>
        </ListItem>
      ))}
    </List>
  </FilterGroup>
);

const SocialLinks = () => (
  <FilterGroup>
    <Title>REDES SOCIAIS</Title>
    <List style={{ display: "flex", gap: "15px" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook size={20} /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram size={20} /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter size={20} /></a>
    </List>
  </FilterGroup>
);


const Shopsidebar = ({
  isOpen,
  setIsOpen,
  context = "shop",
  activeFilter,
  setActiveFilter,
}: ShopSidebarProps) => {

  const [filters, setFilters] = useState<FilterData>({
    categories: [],
    tags: [],
    brands: [],
    prices: [],
  });

  useEffect(() => {
    const posts = postData.posts;

    const categories = Array.from(
      new Set(posts.map((post) => post.category))
    );

    const tags = Array.from(
      new Set(posts.flatMap((post) => post.tags || []))
    );

    const brands = Array.from(
      new Set(posts.map((post) => post.brand).filter(Boolean))
    );

    const priceRanges: string[] = [];
    product.forEach((product: ProductTypes) => {
      const price = product.price;

      if (price < 100 && !priceRanges.includes("Abaixo de R$100")) {
        priceRanges.push("Abaixo de R$100");
      } else if (price >= 100 && price < 300 && !priceRanges.includes("R$100 - R$300")) {
        priceRanges.push("R$100 - R$300");
      } else if (price >= 300 && price < 500 && !priceRanges.includes("R$300 - R$500")) {
        priceRanges.push("R$300 - R$500");
      } else if (price >= 500 && !priceRanges.includes("Acima de R$500")) {
        priceRanges.push("Acima de R$500");
      }
    });


    setFilters({
      categories: ["All", ...categories],
      tags,
      brands,
      prices: priceRanges,
    });
  }, []);

  return (
    <Conteiner className={isOpen ? "open" : ""}>
      <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>

      <SearchContainer>
        <Input
          type="text"
          placeholder={
            context === "shop" ? "Buscar produtos..." : "Buscar postagens..."
          }
        />
        <Button>
          <FiSearch />
        </Button>
      </SearchContainer>

      {context === "shop" && activeFilter && setActiveFilter ? (
        <>
          <FilterBlock
            title="CATEGORIAS"
            items={filters.categories}
            activeItem={activeFilter.categories}
            onItemClick={(item) =>
              setActiveFilter((prev) => ({ ...prev, categories: item }))
            }
          />

          <FilterBlock
            title="TAGS"
            items={filters.tags}
            activeItem={activeFilter.tags}
            onItemClick={(item) =>
              setActiveFilter((prev) => ({ ...prev, tags: item }))
            }
          />

          <FilterBlock
            title="BRANDS"
            items={filters.brands}
            activeItem={activeFilter.brands}
            onItemClick={(item) =>
              setActiveFilter((prev) => ({ ...prev, brands: item }))
            }
          />

          <FilterBlock
            title="FILTER BY PRICE"
            items={filters.prices}
            activeItem={activeFilter.prices}
            onItemClick={(item) =>
              setActiveFilter((prev) => ({ ...prev, prices: item }))
            }
          />
        </>
      ) : context === "blog" ? (
        <>
          <LatestPosts />
          <SocialLinks />
        </>
      ) : null}
    </Conteiner>
  );
};

export default Shopsidebar;
