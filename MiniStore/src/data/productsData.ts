import type { ProductTypes } from '../types/ProductTypes';

import type { TabType } from '../types/TabContentType';

// src/data/productsData.ts
import produto1 from '../assets/img/v14_573.png'
import produto2 from '../assets/img/relogio.png'

// Lista de produtos móveis
export const mobileProducts = [
  { image: produto1, name: 'Iphone 10', price: 'R$ 1.000,00' },
  { image: produto1, name: 'Samsung Galaxy S21', price: 'R$ 899,00' },
  { image: produto1, name: 'Motorola G60', price: 'R$ 799,00' },
  { image: produto1, name: 'Xiaomi Redmi Note 11', price: 'R$ 850,00' },
  { image: produto1, name: 'Asus Zenfone 8', price: 'R$ 1.200,00' },
  { image: produto1, name: 'Realme 8 Pro', price: 'R$ 950,00' },
  { image: produto1, name: 'Nokia G50', price: 'R$ 780,00' },
  { image: produto1, name: 'LG Velvet', price: 'R$ 890,00' },
  { image: produto1, name: 'Huawei P30 Lite', price: 'R$ 870,00' },
  { image: produto1, name: 'ZTE Blade V30', price: 'R$ 799,00' },
]

// Lista de relógios inteligentes
export const watchProducts = [
  { image: produto2, name: 'Apple Watch Series 7', price: 'R$ 2.000,00' },
  { image: produto2, name: 'Samsung Galaxy Watch 5', price: 'R$ 1.500,00' },
  { image: produto2, name: 'Huawei Watch GT 3', price: 'R$ 1.200,00' },
  { image: produto2, name: 'Amazfit GTR 3 Pro', price: 'R$ 950,00' },
  { image: produto2, name: 'Xiaomi Mi Watch', price: 'R$ 850,00' },
  { image: produto2, name: 'Fitbit Versa 3', price: 'R$ 1.000,00' },
  { image: produto2, name: 'Garmin Venu Sq', price: 'R$ 1.100,00' },
  { image: produto2, name: 'Realme Watch 2 Pro', price: 'R$ 650,00' },
  { image: produto2, name: 'Haylou RT2', price: 'R$ 450,00' },
  { image: produto2, name: 'Mobvoi TicWatch E3', price: 'R$ 980,00' },
]

// productsData.ts
export const product: ProductTypes[] = [
  {
    id: 1,
    image: produto1,
    name: "Apple Watch Series 7",
    price: "R$ 29.99",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "TW-E3-BLK-01",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 2,
    image: produto2,
    name: "Mobvoi TicWatch E3",
    price: "R$ 2.000,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "TW-E3-WHT-02",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 3,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "TW-E3-BLU-03",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 4,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 0, // Sem estoque
    sku: "FT-BRACE-M-04",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 5,
    image: produto1,
    name: "Apple Watch Series 7",
    price: "R$ 29.99",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 0, // Sem estoque
    sku: "FT-BRACE-L-05",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 6,
    image: produto2,
    name: "Mobvoi TicWatch E3",
    price: "R$ 2.000,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 4, // Sem estoque
    sku: "SPK-MINI-BLK-06",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 7,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 0, // Sem estoque
    sku: "SPK-MINI-WHT-07",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 8,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "BUDS-PRO-GRY-08",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 9,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "BUDS-PRO-BLU-09",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 10,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "Mais potência no seu pulso! O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 0, // Sem estoque
    sku: "CHGR-FAST-USB-10",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
  {
    id: 11,
    image: produto1,
    name: "Haylou RT2",
    price: "R$ 450,00",
    briefDescription: "",
    colors: ["#FFA500", "#008000", "#0000FF", "#000000"],
    size: [ "XL", "L", "M", "P"],
    stock: 3, // Sem estoque
    sku: "STRP-SIL-WHT-11",
    category: 'Relógios',
    tags: ['wearable', 'esportivo', 'tecnologia']
  },
]

 export const tabs: TabType[] = [
  {
    title: 'Description',
    content: {
      type: 'text',
      content: "O Mobvoi TicWatch E3 combina potência e elegância com o processador Qualcomm® Snapdragon Wear™ 4100, oferecendo uma experiência fluida no seu pulso. Com monitoramento avançado de saúde, GPS integrado, resistência à água IP68 e suporte ao Google Assistant, ele é o smartwatch perfeito para quem busca produtividade e bem-estar no dia a dia.",
    }
  },
  {
    title: 'Additional Information',
    content: {
      type: 'list',
      content: ['1.5kg', 'Carbon Fiber', '12 months'],
    }
  },
  {
    title: 'Reviews (2)',
    content: {
      type: 'reviews',
      content: [
        { name: 'Anna', text: 'Great quality. Loved it!', rating: 5 },
        { name: 'Mike', text: 'Worth the price.', rating: 4 }
      ]
    }
  }
];
