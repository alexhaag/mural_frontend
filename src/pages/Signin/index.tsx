import React, { useRef, useCallback } from 'react';
import firebase from '../../auth/firebase';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidateErrors';

import { Container, Content, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { currentUser, signIn } = useAuth();
  const { addToast } = useToast();

  if (currentUser) {
    console.log('Estou logado');
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('deslogadoooo...');
      });
    console.log('ahaaammm...');
  } else {
    console.log('Não estou logado.');
  }

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório.')
            .email('Digite um email válido.'),
          password: Yup.string().min(6, 'No mínimo 6 digitos.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça o seu logon</h1>
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
            <Button type="submit">Entrar</Button>
            <a href="/">Esqueci minha senha</a>
          </Form>
          <Link to="./signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
