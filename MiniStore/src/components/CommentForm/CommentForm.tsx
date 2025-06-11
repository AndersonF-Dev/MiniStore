import React, { useState } from 'react';
import {
  Form,
  Title,
  FormGroup,
  Label,
  Input,
  TextArea,
  CheckboxGroup,
  Checkbox,
  Button,
  ErrorText
} from './styleCommentForm';

interface FormData {
  comment: string;
  name: string;
  email: string;
  saveInfo: boolean;
}

const CommentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    comment: '',
    name: '',
    email: '',
    saveInfo: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        const target = e.target;
        const { name, value } = target;

        if (target instanceof HTMLInputElement && target.type === 'checkbox') {
            setFormData((prev) => ({
            ...prev,
            [name]: target.checked,
            }));
        } else {
            setFormData((prev) => ({
            ...prev,
            [name]: value,
            }));
        }
    };



  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.comment.trim()) newErrors.comment = 'O comentário é obrigatório.';
    if (!formData.name.trim()) newErrors.name = 'O nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Digite um e-mail válido.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Comentário enviado com sucesso!');
      // Lógica de envio ou armazenamento
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Deixe um comentário</Title>

      <FormGroup>
        <Label htmlFor="comment">Escreva seu comentário aqui *</Label>
        <TextArea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
        />
        {errors.comment && <ErrorText>{errors.comment}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="name">Escreva seu nome aqui *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Escreva seu e-mail aqui *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FormGroup>

      <CheckboxGroup>
        <Checkbox
          id="saveInfo"
          name="saveInfo"
          type="checkbox"
          checked={formData.saveInfo}
          onChange={handleChange}
        />
        <Label htmlFor="saveInfo">Salvar meu nome, e-mail e site neste navegador para a próxima vez.</Label>
      </CheckboxGroup>

      <Button type="submit">Publicar comentário</Button>
    </Form>
  );
};

export default CommentForm;