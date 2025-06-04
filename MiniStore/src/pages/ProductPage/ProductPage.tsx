import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { product, relatedProducts } from '../../data/productsData';
import { FaShoppingCart } from 'react-icons/fa';
import PageHeader from '../../components/PageHeader/PageHeader';
import HorizontalAccordion from '../../components/HorizontalAccordion/HorizontalAccordion';
import QuantityButtons from '../../components/QuantityButtons/QuantityButtons';
import ZoomImage from '../../components/ZoomImage/ZoomImage';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import { useCart } from '../../context/CartContext';
import CartModal from '../../components/CartModal/CartModal';

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

// type Produto = {
//   id: number;
//   nome: string;
//   preco: number;
// };

// interface Props {
//   produto: Produto;
// }

const ProductPage = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js

    // const { addToCart } = useCart();

  
    
    
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    
    
    const { id } = useParams<{ id: string }>();
    const products = product.find(p => p.id === Number(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);

    if (!products) return <div>Produto não encontrado.</div>;

    // const quantity = getQuantity(products.id);
      const handleAddToCart = () => {
        console.log("Quantidade adicionada ao carrinho:", quantity);

        addToCart({
            id: products.id,
            name: products.name,
            price: products.price,
            image: products.image,
            quantity: quantity, // ou o valor que quiser
        });
     setShowModal(true);
    };

    const handleBuyNow = () => {
        addToCart({
            id: products.id,
            name: products.name,
            price: products.price,
            image: products.image,
            quantity: quantity,
        });
        window.open('/cart', '_blank'); // redireciona para o carrinho
    };
    
 
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
                    {products.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
                    <QuantityButtons 
                        productId={products.id} 
                        quantity={quantity} 
                        onChange={setQuantity} 
                        min={1} 
                        max={99} 
                    />

                    <ConteinerBtn>
                        <Button 
                            variant="primary"
                            onClick={handleBuyNow}
                        >
                            COMPRAR
                        </Button>

                        <Button variant="secondary" onClick={handleAddToCart}>
                        ADICIONAR AO <FaShoppingCart />
                        </Button>
                        <CartModal isVisible={showModal} onClose={() => setShowModal(false)} />
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
                <ProductsSection 
                    title="Produtos relacionados"
                    endpoint="/api/mobiles" // só para referência futura 
                    fallbackData={relatedProducts} 
                />
                <Newsletter />
                <InstagramFeed token={token} />
        
    </Conteiner>
  )
}

export default ProductPage