import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../data/productsData';
import PageHeader from '../../components/PageHeader/PageHeader';
import { 
    Conteiner,
    SingleProductContainer,
    Img,
    ItemSummaryWrapper,
    ProductNome,
    Price,
    Description,
    ConteinerProductColor,
    TitleColor,
    ColorLint,
    ColorItem,
    ConteinerSize,
    TitleSize,
    SizeLint,
    SizeItem,
} from './styleProductPage'


const ProductPage = () => {

    const { id } = useParams<{ id: string }>();
    const products = product.find(p => p.id === Number(id));

    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!products) return <div>Produto não encontrado.</div>;
    
  return (
    <Conteiner>
        <PageHeader
            title={products.name}
            breadcrumbs={[
                { name: "Início", path: "/" },
                { name: "Produtos", path: "/shop" },
                { name: products.name }
            ]}
            variant="product"
        />

        <SingleProductContainer>
            <Img src={products.image} alt={products.name} width={300} />
            <ItemSummaryWrapper>
                <ProductNome>
                    {products.name}
                </ProductNome>
                <Price>
                    {products.price}
                </Price>
                <Description>
                    Mais potência no seu pulso!
                    O TicWatch E3 traz performance rápida, monitoramento de saúde completo e GPS integrado, tudo em um design leve e moderno. Ideal para quem vive em movimento.
                </Description>
                <ConteinerProductColor>
                        <TitleColor>
                            CORES
                        </TitleColor>
                    <ColorLint>
                        {products.colors.map((color, index) => (
                            <ColorItem 
                                key={index} 
                                style={{ backgroundColor: color}} 
                                className={selectedColor === color ? 'selected' : ''}
                                onClick={() => setSelectedColor(color)}
                            />
                    ))}
                    </ColorLint>
                </ConteinerProductColor>

                <ConteinerSize>
                        <TitleSize>
                            Tamanho
                        </TitleSize>
                    <SizeLint>
                        {products.size.map((size, index) => (
                    <SizeItem 
                        key={index}
                        className={selectedSize === size ? 'selected' : ''}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </SizeItem>
                    ))}
                        {/* <SizeItem>XL</SizeItem>
                        <SizeItem>L</SizeItem>
                        <SizeItem>M</SizeItem>
                        <SizeItem>P</SizeItem> */}
                    </SizeLint>
                </ConteinerSize>
                <p>
                    Estoque: {products.stock > 0 ? products.stock : 'Sem estoque'}
                </p>
            </ItemSummaryWrapper>
        </SingleProductContainer>
        
    </Conteiner>
  )
}

export default ProductPage