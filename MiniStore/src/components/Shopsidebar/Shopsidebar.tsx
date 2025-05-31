// import { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";

// import {
//   Conteiner,
//   ToggleButton,
//   SearchContainer,
//   Input,
//   Button,
//   FilterGroup,
//   Title,
//   List,
//   ListItem,
// } from "./styleShopsidebar";

// type FilterData = {
//   categories: string[];
//   tags: string[];
//   brands: string[];
//   prices: string[];
// };

// const FilterBlock = ({
//   title,
//   items,
//   activeItem,
//   onItemClick,
// }: {
//   title: string;
//   items: string[];
//   activeItem: string;
//   onItemClick: (item: string) => void;
// }) => (
//   <FilterGroup>
//     <Title>{title}</Title>
//     <List>
//       {items.map((item, index) => (
//         <ListItem
//           key={index}
//           active={item === activeItem}
//           onClick={() => onItemClick(item)}
//         >
//           {item}
//         </ListItem>
//       ))}
//     </List>
//   </FilterGroup>
// );

// const Shopsidebar = () => {
//   const [filters, setFilters] = useState<FilterData>({
//     categories: [],
//     tags: [],
//     brands: [],
//     prices: [],
//   });

//   const [activeFilter, setActiveFilter] = useState({
//     categories: "",
//     tags: "",
//     brands: "",
//     prices: "",
//   });

//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const fetchFakeData = async () => {
//       const data = {
//         categories: ["All", "Phones", "Accessorios", "Tablet", "Watches"],
//         tags: ["White", "Cheap", "Mobile", "Modern"],
//         brands: ["Apple", "Samsung", "Green"],
//         prices: [
//           "Less than $10",
//           "$10 - $20",
//           "$10 - $20",
//           "$10 - $20",
//           "$10 - $20",
//         ],
//       };
//       setFilters(data);
//     };

//     fetchFakeData();
//   }, []);

//   return (
//     <>
//       {!isOpen && (
//         <ToggleButton onClick={() => setIsOpen(true)}>☰ Filtros</ToggleButton>
//       )}

//       <Conteiner isOpen={isOpen}>
//         <SearchContainer>
//           <Input type="text" placeholder="Buscar produtos..." />
//           <Button>
//             <FiSearch />
//           </Button>
//         </SearchContainer>

//         {/* Botão para fechar sidebar no mobile */}
//         <Button onClick={() => setIsOpen(false)} style={{ margin: "10px" }}>
//           Fechar
//         </Button>

//         <FilterBlock
//           title="CATEGORIAS"
//           items={filters.categories}
//           activeItem={activeFilter.categories}
//           onItemClick={(item) =>
//             setActiveFilter((prev) => ({ ...prev, categories: item }))
//           }
//         />

//         <FilterBlock
//           title="TAGS"
//           items={filters.tags}
//           activeItem={activeFilter.tags}
//           onItemClick={(item) =>
//             setActiveFilter((prev) => ({ ...prev, tags: item }))
//           }
//         />

//         <FilterBlock
//           title="BRANDS"
//           items={filters.brands}
//           activeItem={activeFilter.brands}
//           onItemClick={(item) =>
//             setActiveFilter((prev) => ({ ...prev, brands: item }))
//           }
//         />

//         <FilterBlock
//           title="FILTER BY PRICE"
//           items={filters.prices}
//           activeItem={activeFilter.prices}
//           onItemClick={(item) =>
//             setActiveFilter((prev) => ({ ...prev, prices: item }))
//           }
//         />
//       </Conteiner>
//     </>
//   );
// };

// export default Shopsidebar;


import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

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

type FilterData = {
  categories: string[];
  tags: string[];
  brands: string[];
  prices: string[];
};

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
  <FilterGroup>
    <Title>{title}</Title>
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
  </FilterGroup>
);

const Shopsidebar = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [filters, setFilters] = useState<FilterData>({
    categories: [],
    tags: [],
    brands: [],
    prices: [],
  });

  const [activeFilter, setActiveFilter] = useState({
    categories: "",
    tags: "",
    brands: "",
    prices: "",
  });

  useEffect(() => {
    const data = {
      categories: ["All", "Phones", "Accessorios", "Tablet", "Watches"],
      tags: ["White", "Cheap", "Mobile", "Modern"],
      brands: ["Apple", "Samsung", "Green"],
      prices: [
        "Less than $10",
        "$10 - $20",
        "$20 - $30",
        "$30 - $40",
        "$40 - $50",
      ],
    };
    setFilters(data);
  }, []);

  return (
    <Conteiner className={isOpen ? "open" : ""}>
      <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>

      <SearchContainer>
        <Input type="text" placeholder="Buscar produtos..." />
        <Button>
          <FiSearch />
        </Button>
      </SearchContainer>

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
    </Conteiner>
  );
};

export default Shopsidebar;
