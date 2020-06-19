import React from 'react';
import { Title, Form } from './styles';
const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore repositorios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
