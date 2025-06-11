import React, { useState } from 'react';
import {
  FormWrapper,
  Title,
  Description,
  Form,
  Row,
  Column,
  Label,
  Input,
  TextArea,
  Button,
  ErrorText,
} from './styleContactForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Digite um e-mail válido.';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Mensagem enviada com sucesso!');
      // Envio para API ou outra ação
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <FormWrapper>
      <Title>Alguma dúvida?</Title>
      <Description>Use o formulário abaixo para entrar em contato conosco.</Description>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Column>
            <Label htmlFor="name">Seu nome completo *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </Column>

          <Column>
            <Label htmlFor="email">Escreva seu e-mail aqui *</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </Column>
        </Row>

        <Label htmlFor="phone">Número de telefone</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Label htmlFor="subject">Escreva seu assunto aqui</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <Label htmlFor="message">Escreva sua mensagem aqui *</Label>
        <TextArea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}

        <Button type="submit">Enviar</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
