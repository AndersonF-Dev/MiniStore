import post1 from '../assets/img/post1.png'
import post2 from '../assets/img/post1.png'
import post3 from '../assets/img/post1.png'
import post4 from '../assets/img/post1.png'

import { slugify } from '../utils/slugify'; // supondo que tenha essa função


export type Post = {
  id: string;
  image: string;
  date: string;
  title: string;
  category: string;
  categorySlug: string;
  tags?: string[];
  brand: string;
  slug: string;
};

// Define o tipo sem o `slug`
type RawPost = Omit<Post, 'slug'>;

// Seu array original SEM slug
const rawPosts: RawPost[] = [
  {
    id: '1',
    image: post1,
    date: '01 de março de 2023',
    category: 'Celulares',
    categorySlug: 'celulares',
    title: 'Top 5 celulares custo-benefício de 2023',
    tags: ['tecnologia', 'celulares', 'dicas'],
    brand: "Apple"
  },
  {
    id: '2',
    image: post2,
    date: '03 de março de 2023',
    category: 'Fones',
    categorySlug: 'fones',
    title: 'Melhores fones Bluetooth para trabalhar e treinar',
    tags: ['tecnologia', 'fones', 'bluetooth'],
    brand: "Apple"
  },
  {
    id: '3',
    image: post3,
    date: '05 de março de 2023',
    category: 'Relógios Inteligentes',
    categorySlug: 'relogios-inteligentes',
    title: 'Smartwatches que valem o investimento em 2023',
    tags: ['tecnologia', 'smartwatch', 'relógios'],
    brand: "Apple"
  },
  {
    id: '4',
    image: post4,
    date: '07 de março de 2023',
    category: 'Acessórios',
    categorySlug: 'acessorios',
    title: 'Acessórios indispensáveis para o seu smartphone',
    tags: ['tecnologia', 'acessórios', 'celulares'],
    brand: "Apple"
  },
  {
    id: '5',
    image: post1,
    date: '09 de março de 2023',
    category: 'Notebooks',
    categorySlug: 'notebooks',
    title: 'Melhores notebooks para programadores iniciantes',
    tags: ['tecnologia', 'notebooks', 'programação'],
    brand: "Apple"
  },
  {
    id: '6',
    image: post2,
    date: '11 de março de 2023',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    title: '5 gadgets que facilitam a sua rotina digital',
    tags: ['tecnologia', 'gadgets', 'produtividade'],
    brand: "Apple"
  },
  {
    id: '7',
    image: post1,
    date: '13 de março de 2023',
    category: 'Celulares',
    categorySlug: 'celulares',
    title: 'Review do Galaxy S23: vale o upgrade?',
    tags: ['tecnologia', 'review', 'celulares'],
    brand: "Apple"
  },
  {
    id: '8',
    image: post2,
    date: '15 de março de 2023',
    category: 'Fones',
    categorySlug: 'fones',
    title: 'Comparativo: AirPods vs Galaxy Buds Live',
    tags: ['tecnologia', 'comparativo', 'fones'],
    brand: "Apple"
  },
  {
    id: '9',
    image: post1,
    date: '17 de março de 2023',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    title: 'Como transformar sua casa com tecnologia inteligente',
    tags: ['tecnologia', 'casa inteligente', 'automação'],
     brand: "Apple"
  },
  {
    id: '10',
    image: post2,
    date: '19 de março de 2023',
    category: 'Relógios',
    categorySlug: 'relogios',
    title: 'Apple Watch Series 8: o que mudou?',
    tags: ['tecnologia', 'apple watch', 'relógios'],
    brand: "Apple"
  },
  {
    id: '11',
    image: post1,
    date: '21 de março de 2023',
    category: 'Carregadores',
    categorySlug: 'carregadores',
    title: 'Carregadores rápidos: quais são os melhores?',
    tags: ['tecnologia', 'carregadores', 'energia'],
    brand: "Apple"
  },
  {
    id: '12',
    image: post2,
    date: '23 de março de 2023',
    category: 'Tablets',
    categorySlug: 'tablets',
    title: 'Melhores tablets para estudar e trabalhar em 2023',
    tags: ['tecnologia', 'tablets', 'educação'],
    brand: "Apple"
  },
  {
    id: '13',
    image: post1,
    date: '25 de março de 2023',
    category: 'Celulares',
    categorySlug: 'celulares',
    title: 'iPhone 14 vs iPhone 13: o que realmente mudou?',
    tags: ['tecnologia', 'iphone', 'comparativo'],
    brand: "Apple"
  },
  {
    id: '14',
    image: post2,
    date: '27 de março de 2023',
    category: 'Headsets',
    categorySlug: 'headsets',
    title: 'Melhores headsets gamers com microfone',
    tags: ['tecnologia', 'headsets', 'games'],
    brand: "Apple"
  },
  {
    id: '15',
    image: post1,
    date: '29 de março de 2023',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    title: 'Top 3 gadgets para quem trabalha em home office',
    tags: ['tecnologia', 'gadgets', 'home office'],
    brand: "Apple"
  },
  {
    id: '16',
    image: post2,
    date: '31 de março de 2023',
    category: 'Monitores',
    categorySlug: 'monitores',
    title: 'Guia: como escolher o monitor ideal para sua rotina',
    tags: ['tecnologia', 'monitores', 'dicas'],
    brand: "Apple"
  },
  {
    id: '17',
    image: post1,
    date: '02 de abril de 2023',
    category: 'Relógios',
    categorySlug: 'relogios',
    title: 'Xiaomi Watch: o smartwatch bom e barato',
    tags: ['tecnologia', 'smartwatch', 'xiaomi'],
    brand: "Apple"
  },
  {
    id: '18',
    image: post2,
    date: '04 de abril de 2023',
    category: 'Power Banks',
    categorySlug: 'power-banks',
    title: 'Power banks com maior capacidade e carregamento rápido',
    tags: ['tecnologia', 'power bank', 'bateria'],
    brand: "Apple"
  }
];

export const posts: Post[] = rawPosts.map(post => ({
  ...post,
  slug: slugify(post.title),
}));

// Gera categorias únicas
const categories = Array.from(new Set(rawPosts.map(p => p.category)));

// Gera tags únicas
const tags = Array.from(new Set(rawPosts.flatMap(p => p.tags || [])));


const latestPosts = [
  {
    id: '1',
    title: 'Review: Novo iPhone 15',
    image: post2,
    slug: 'review-iphone-15'
  },
  {
    id: '2',
    title: 'Top 5 Fones de 2024',
    image: post1,
    slug: 'top-5-fones-2024'
  },
  {
    id: '3',
    title: 'Qual smartwatch vale a pena?',
    image: post2,
    slug: 'smartwatch-vale-a-pena'
  },
];

export default {
  posts,
  latestPosts,
  categories,
  tags
};