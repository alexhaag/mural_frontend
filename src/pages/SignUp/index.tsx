import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidateErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('Email obrigatório.')
          .email('Digite um email válido.'),
        password: Yup.string().min(6, 'No mínimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça o seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input
              icon={FiMail}
              type="text"
              name="email"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              type="password"
              name="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
