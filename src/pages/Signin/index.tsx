import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça o seu logon</h1>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
  </Container>
);
