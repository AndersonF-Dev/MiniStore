export type ShopSidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  context?: "shop" | "blog";
  activeFilter?: {
    categories: string;
    tags: string;
    brands: string;
    prices: string;
  };
  setActiveFilter?: React.Dispatch<
    React.SetStateAction<{
      categories: string;
      tags: string;
      brands: string;
      prices: string;
    }>
  >;
};

export type FilterData = {
  categories: string[];
  tags: string[];
  brands: string[];
  prices: string[];
};