import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../data/productsData';
import { FaShoppingCart } from 'react-icons/fa';
import PageHeader from '../../components/PageHeader/PageHeader';
import HorizontalAccordion from '../../components/HorizontalAccordion/HorizontalAccordion'
import QuantityButtons from '../../components/QuantityButtons/QuantityButtons';
import ZoomImage from '../../components/ZoomImage/ZoomImage'
// import { CartProvider } from '../../context/CartContext';
import { 
    Conteiner,
    SingleProductContainer,
    
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
    ConteinerBtn,
    Button,
    ProductMetaInfoContainer,
    MetaItem,
    MetaLabel,
    MetaValue,
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
            <ZoomImage src={products.image} alt={products.name} />
            <ItemSummaryWrapper>
                <ProductNome>
                    {products.name}
                </ProductNome>
                <Price>
                    {products.price}
                </Price>
                <Description>
                   {products.briefDescription}
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
                    </SizeLint>
                </ConteinerSize>
                <p>
                    {products.stock > 0 ? products.stock : 'Sem estoque'} em estoque
                </p>
                    <QuantityButtons productId={products.id.toString()} />

                    <ConteinerBtn>
                        <Button 
                            variant="primary"
                            onClick={() => {
                            // Ação de comprar: você pode redirecionar para o checkout ou mostrar uma modal.
                            alert('Redirecionando para a compra...');
                            }}
                        >
                            COMPRAR
                        </Button>

                        <Button 
                            variant="secondary"
                            onClick={() => {
                            // Ação de adicionar ao carrinho
                            alert('Produto adicionado ao carrinho!');
                            }}
                        >
                            ADICIONAR AO <FaShoppingCart />
                        </Button>
                    </ConteinerBtn>

                    <ProductMetaInfoContainer>
                        <MetaItem>
                            <MetaLabel>SKU:</MetaLabel>
                            <MetaValue>{products.sku}</MetaValue>
                        </MetaItem>

                        <MetaItem>
                            <MetaLabel>Categoria:</MetaLabel>
                            <MetaValue>{products.category}</MetaValue>
                        </MetaItem>

                        <MetaItem>
                            <MetaLabel>Tags:</MetaLabel>
                            <MetaValue>
                                {products.tags.join(' , ')}
                            </MetaValue>
                        </MetaItem>
                    </ProductMetaInfoContainer>

                </ItemSummaryWrapper>
            </SingleProductContainer>
                <HorizontalAccordion />    
        
    </Conteiner>
  )
}

export default ProductPage