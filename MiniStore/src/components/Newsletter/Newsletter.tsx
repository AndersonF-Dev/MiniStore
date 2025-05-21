import { useState } from 'react';
import {
    Conteiner,
    TextWrapper,
    Title,
    SubTitle,
    Form,
    Input,
    Button,
    ErrorMsg,
    FormContent
} from './styleNewsletter';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError('Por favor, insira um e-mail.');
    } else if (!emailRegex.test(email)) {
      setError('E-mail inválido.');
    } else {
      setError('');
      console.log('E-mail inscrito:', email);
      // Aqui você pode enviar o e-mail para o backend
      // Ex: axios.post('/api/newsletter', { email });
      alert('Inscrição realizada com sucesso!');
      setEmail('');
    }
  };

  return (
    <Conteiner>
        <TextWrapper>
            <Title>
                Assinatura de Newslette
            </Title>
            <SubTitle>
                Inscreva-se para Receber Ofertas.
            </SubTitle>
        </TextWrapper>
        <FormContent>
            <Form>
                <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                hasError={!!error}
                />
                <Button onClick={handleSubscribe}>Inscrever</Button>
            </Form>
                  {error && <ErrorMsg>{error}</ErrorMsg>}
        </FormContent>
    </Conteiner>
  )
}

export default Newsletter