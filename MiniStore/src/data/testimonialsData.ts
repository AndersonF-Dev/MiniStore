// src/data/testimonialsData.ts

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  stars: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "O desempenho desse celular me surpreendeu! Rápido, fluido e com um design elegante. A bateria dura o dia todo mesmo com uso intenso, e a qualidade da câmera é excelente — perfeita para registrar todos os momentos. Estou muito satisfeito com a minha escolha!",
    author: "Emma Chamberlin",
    stars: 5
  },
  {
    id: 2,
    text: "Simplesmente fantástico! A entrega foi rápida e o produto superou minhas expectativas. Com certeza comprarei novamente.",
    author: "Lucas Silva",
    stars: 5
  },
  {
    id: 3,
    text: "Muito bom, mas poderia vir com mais acessórios. No geral, estou satisfeito com a compra.",
    author: "Ana Costa",
    stars: 4
  }
];
