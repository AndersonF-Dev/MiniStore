// import { useState } from 'react'
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
// import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
// import { product  as productData } from '../../data/productsData';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import Newsletter from '../../components/Newsletter/Newsletter';
import QuantityButtons from '../../components/QuantityButtons/QuantityButtons';
import {
  Conteiner,
  Wrapper,
  // TitleItem,
  // TitleItemWrapper,
  // CardItemWrapper,
  Img,
  ProductInfo,
  NameProduct,
  PreceProduct,
  SubTotal,
  RemoveButton,
  ProductInfoWrapper,
  CartTable,
  CardTotalsTable,
  UpdateButton,
  ContinueButton,
  CheckoutButton,
  // EmptyMessage,
  // ProductList,
  // ProductItem,
  // CheckoutButton,
} from './styleCart'

const Cart = () => {
  const token = "IGQVJ..."; // Depois virá da sua API em Node.js
  // const navigate = useNavigate();
  // const { cart, updateQuantity } = useCart();

  // console.log('Carrinho do contexto:', cart);
  // const navigate = useNavigate();

  // const remover = (productId: number) => {
  //   updateQuantity(productId, 0);
  // };


  // const cartWithDetails = cart; // já tem tudo que precisa
  // console.log('Carrinho após adicionar:', cartWithDetails);

  // const total = cartWithDetails.reduce((acc, item) => acc + item.quantity * item.price, 0);
  // console.log('Carrinho após adicionar:', total);

  // function ProdutoPorId({ id }) {
  // const produto = productsData.find((p) => p.id === id);

  // if (!produto) return <p>Produto não encontrado.</p>;
  // const [quantity, setQuantity] = useState(1);
 
//   const [cartItems, setCartItems] = useState(
//   productData.map((product) => ({
//     ...product,
//     quantity: 1, // valor inicial
//   }))
// );

  const { cart, updateQuantity, removeFromCart } = useCart();
  console.log("Carrinho atualizado:", cart);
  // const [quantities, setQuantities] = useState<{ [id: number]: number }>({
  //   2: 1,
  //   3: 1,
  // });

  const handleContinueShopping = () => {
    // Se estiver usando React Router:
    window.open('/shop', '_blank'); // ou '/loja'
  };

   const handleProceedToCheckout = () => {
    const hasProducts = cart.length > 0;
    if (!hasProducts) {
      alert('Adicione ao menos um produto antes de finalizar!');
      return;
    }
    window.open('/checkout', '_blank');
  };

  const handleUpdateCart = () => {
    console.log('Carrinho atualizado:', cart);
    // Exemplo: salvar no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Ou: enviar para API
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


// const handleQuantityChange = (id: number, newQuantity: number) => {
//   setCartItems((prevItems) =>
//     prevItems.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     )
//   );
// };





  return (
    <Conteiner>
      <PageHeader
            title="Carrinho"
            breadcrumbs={[
                { name: "Início", path: "/" },
                { name: "Produtos", path: "/shop" },
                
                { name: "Carrinho" },
            ]}
            variant="product"
        />

        <Wrapper>
          <CartTable>
            <thead>
              <tr>
                <th>PRODUTOS</th>
                <th>QUANTIDADE</th>
                <th>SUBTOTAL</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <ProductInfoWrapper>
                    <Img src={item.image} alt={item.name} />
                    <ProductInfo>
                      <NameProduct>{item.name}</NameProduct>
                      <PreceProduct>
                        {item.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </PreceProduct>
                    </ProductInfo>
                  </ProductInfoWrapper>
                </td>
                <td>
                  <QuantityButtons
                    productId={item.id}
                    quantity={item.quantity}
                    onChange={(newQty) => updateQuantity(item.id, newQty)}
                    min={1}
                    max={99}
                  />
                </td>
                <td>
                  <SubTotal>
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </SubTotal>
                </td>
                <td>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>X</RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
            {/* <tbody>
              {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <ProductInfoWrapper>
                    <Img src={item.image} alt={item.name} />
                    <ProductInfo>
                      <NameProduct>{item.name}</NameProduct>
                      <PreceProduct>
                        {item.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </PreceProduct>
                    </ProductInfo>
                  </ProductInfoWrapper>
                </td>
                <td>
                  <QuantityButtons
                    productId={item.id}
                    quantity={item.quantity}
                    onChange={(newQty) => updateQuantity(item.id, newQty)}
                    min={1}
                    max={99}
                  />
                </td>
                <td>
                  <SubTotal>
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </SubTotal>
              {/* {productData
                .filter((product) => [2, 3].includes(product.id))
                .map((product) => {
                          const qty = quantities[product.id] || 1;
                          const subtotal = product.price * qty;
                return (          
                  <tr key={product.id}>
                    <td>
                      <ProductInfoWrapper>
                        <Img src={product.image} alt={product.name} />
                        <ProductInfo>
                          <NameProduct>{product.name}</NameProduct>
                          <PreceProduct>
                            {product.price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </PreceProduct>
                        </ProductInfo>
                      </ProductInfoWrapper>
                    </td>
                    <td>
                      <QuantityButtons
                        productId={product.id}
                        quantity={quantities[product.id] || 1}
                        onChange={(newQty) =>
                        setQuantities((prev) => ({ ...prev, [product.id]: newQty }))
                      }
                        min={1}
                        max={99}
                      />
                    </td>
                    <td>
                      <SubTotal>
                        {subtotal.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </SubTotal> 
                    </td>
                    <td>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>X</RemoveButton>
                      <RemoveButton>X</RemoveButton> 
                    </td>
                  </tr>
                // );  
              })}
            </tbody> */}
          </CartTable>

          <CardTotalsTable>
              <tbody>
                <tr>
                  <td><strong>Total Geral</strong></td>
                  <td>
                    <strong>
                      {total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </strong>
                  </td>
                </tr>
              </tbody>
              {/* <tbody>
               
                <tr>
                  <td><strong>Total Geral</strong></td>
                  <td>
                    <strong>
                      {productData
                        .filter((product) => [2, 3].includes(product.id))
                        .reduce((total, product) => {
                          const qty = quantities[product.id] || 1;
                          return total + product.price * qty;
                        }, 0)
                        .toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                    </strong>
                  </td>
                </tr>
              </tbody> */}
          </CardTotalsTable>

          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <UpdateButton onClick={handleUpdateCart}>UPDATE CART</UpdateButton>
            <ContinueButton onClick={handleContinueShopping}>CONTINUE SHOPPING</ContinueButton>
            <CheckoutButton onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</CheckoutButton>
          </div>

        </Wrapper>
                


       
        {/* <Wrapper>
        <Title>Seu Carrinho</Title>
        {cart.length === 0 ? (
          <EmptyMessage>Carrinho vazio</EmptyMessage>
        ) : (
          <>
            <ProductList>
              {cartWithDetails.map(item => (
                <ProductItem key={item.id}>
                 <span>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '6px', marginRight: '1rem' }}
                  />
                  {item.name}
                   — Qtd: {item.quantity} 
                   — Preço: {(item.price * item.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
                  <RemoveButton onClick={() => remover(item.id)}>Remover</RemoveButton>
                </ProductItem>
              ))}
            </ProductList>
            <Total>Total: R$ {total.toFixed(2)}</Total>
            <CheckoutButton onClick={() => navigate('/checkout')}>Finalizar Compra</CheckoutButton>
          </>
        )}
      </Wrapper> */}
      <Newsletter />
      <InstagramFeed token={token} />
    </Conteiner>
  )
}

export default Cart

// pages/CartPage.tsx
// import React from 'react';


// import { useCart } from '../../context/CartContext';

// const Cart = () => {
//   const { cart } = useCart();

//   if (cart.length === 0) {
//     return <p>Seu carrinho está vazio.</p>;
//   }

//   return (
//     <div>
//       <h2>Seu Carrinho</h2>
//       <ul style={{ padding: 0, margin: 0 }}>
//         {cart.map(item => (
//           <li key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', listStyle: 'none' }}>
//             <img src={item.image} alt={item.name} width={80} height={80} style={{ borderRadius: 8 }} />
//             <div>
//               <div><strong>{item.name}</strong></div>
//               <div>Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
//               <div>Quantidade: {item.quantity}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
