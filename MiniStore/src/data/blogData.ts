// blogData.ts
import imgpost from '../assets/img/imgpost.svg'

interface BlogPostData {
  slug: string;
  titulo: string;
  categoria: string;
  data: string;
  imagem: string;
  conteudo: string;
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "truque-de-tecnologia-que-voce-nao-entende",
    titulo: "Truque de tecnologia que você não entende",
    categoria: "tecnologia",
    data: "22 de fevereiro de 2023",
    imagem: imgpost,
    conteudo: `
        <p>Você já se perguntou como certos aplicativos parecem saber o que você quer antes mesmo de você procurar?</p>
        <p>Esse "truque de tecnologia" está presente em algoritmos avançados de recomendação, inteligência artificial e coleta de dados em tempo real.</p>

        <h2>O que está por trás disso?</h2>
        <ul>
          <li>Algoritmos de machine learning que analisam seu comportamento</li>
          <li>Coleta de dados silenciosa por aplicativos</li>
          <li>Geolocalização cruzada com dados de navegação</li>
        </ul>

        <div class="post-bloco">
          <img src="/assets/img/imgpost.svg" alt="Tecnologia invisível" class="post-imagem"/>
          <div class="post-texto">
            <h2>Tecnologia Invisível</h2>
            <p>Descubra como algoritmos e sensores trabalham nos bastidores para prever suas ações antes mesmo de você perceber. Descubra como algoritmos e sensores trabalham nos bastidores para prever suas ações antes mesmo de você perceber. Descubra como algoritmos e sensores trabalham nos bastidores para prever suas ações antes mesmo de você perceber. Descubra como algoritmos e sensores trabalham nos bastidores para prever suas ações antes mesmo de você perceber.</p>
          </div>
        </div>

        <p>Enquanto você navega, milhares de cálculos são feitos para entregar o que você <em>provavelmente</em> quer — antes mesmo de você saber disso.</p>
        <p>Isso pode ser assustador, mas também impressionante. A tecnologia está cada vez mais integrada ao comportamento humano.</p>
    `

  }
];
