import React, { useState, useEffect } from 'react';
import firebase from '../../auth/firebase';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';

import {
  Container,
  Content,
  Header,
  Menu,
  Mural,
  DuasColunas,
  TabelaNumeros,
  Titulo,
  BackgroundMural,
  BackgroundGaviao,
  BackgroundGemeos,
} from './styles';
// import { array } from 'yup';

interface FatiasDTD {
  id: string;
  imagem: string;
  situacao: string;
}

const Dashboard: React.FC = () => {
  const [fatias, setFatias] = useState<FatiasDTD[]>();
  const fetchData = async () => {
    //setFatias([{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]);

    const response = await firebase.firestore().collection('mural').get();

    const data = response.docs.map(doc => {
      const dados = doc.data();
      dados.id = doc.id;
      return dados;
    });
    console.log(data);
    setFatias(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Menu>
            <div>
              <span>
                <Link to="/">Juntando Peças.</Link>
              </span>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#contribua">Contribua</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#artistas">Artistas</a>
                </li>
                <li>
                  <a href="#doacao">Doação</a>
                </li>
                <li>
                  <Link to="./signin">
                    <FiLogIn size="20" />
                  </Link>
                </li>
                <li>
                  <FiShoppingCart size="20" />
                </li>
              </ul>
            </div>
          </Menu>
        </Header>
        <Content>
          <Mural>
            <BackgroundMural />
          </Mural>
          <DuasColunas>
            <div>
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga laborum aspernatur quam eum sequi! Eum suscipit quam,
              nesciunt omnis, dolorem quod nemo dignissimos quidem dolorum
              pariatur sed ipsam dolores laboriosam!
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              earum commodi provident atque unde modi facere voluptas qui
              consectetur maiores quod, eum deserunt eveniet fugiat,
              voluptatibus quasi aliquid error quas.
            </div>
          </DuasColunas>
          <Titulo>
            <a id="contribua"></a>Contribua
          </Titulo>
          <DuasColunas>
            <div>Seleciona suas peças:</div>
            <div>
              Abaixo temos uma tabela com os números de 1 a 2.000 representando
              cada uma das peças da obra.
            </div>
          </DuasColunas>
          <TabelaNumeros>
            <p>Fatias ---------</p>
            <ul>
              {fatias?.map(e => (
                <li key={e.imagem}>{e.imagem}</li>
              ))}
            </ul>
          </TabelaNumeros>
          <Titulo>
            <a id="sobre"></a>Sobre
          </Titulo>
          <DuasColunas>
            <div>
              lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, saepe autem vel corrupti non laboriosam architecto nisi
              expedita reiciendis fugit libero, ab sequi consequatur dolorum,
              voluptates quod. Autem, eos vero!
            </div>
            <div>
              <p>
                001 - Arte
                <br />A vista se conecta com artistas renomados de cultura
                urbana para criar uma arte, que se transforma em uma obra
                virtual, um mural de 2.000 peças!
              </p>
              <p>&nbsp;</p>
              <p>
                002 - Venda
                <br />
                Em uma plataforma digital, qualquer pessoa interessada em ajudar
                pode comprar um ou mais pedaços dessa obra de arte. Recebendo
                como recompensa um printfine art exclusivo (item único)
                referente a peça comprada.
              </p>
              <p>&nbsp;</p>
              <p>
                003 - Doação
                <br />
                Parte da verba arrecadada com a venda das peças será doada com a
                finalidade de ajudar as comunidades impactadas pela COVID-19.
              </p>
              <p>&nbsp;</p>
              <p>
                004 - Leilão
                <br />
                Durante as vendas das peças, um leilão será realizado a fim de
                buscar um comprador de grande porte para potencializar o valor
                que será arrecadado, seja orgão público ou privado.
              </p>
              <p>&nbsp;</p>
              <p>
                005 - Obra <br />A se transforma em mural instalado em uma área
                de 20 M2, formado por peças impressas de 10x10CM, para que a
                arte saia do digital e vire um mural na vida real.
              </p>
              <p>&nbsp;</p>
              <p>
                006 - ONG <br />
                Uma porcentagem das vendas das peças, somadas com o mural
                leiloado é direcionado para ONGs envolvidas em melhorar a
                qualidade de vida nas comunidades que foram afetadas pela
                pandemia.
              </p>
            </div>
          </DuasColunas>
          <Titulo>
            <a id="artistas"></a>Artistas
          </Titulo>
          <DuasColunas>
            <div>Colaboração entre artistas do projeto</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              aspernatur animi expedita enim, odit ipsam, iure, totam fuga rerum
              eos et quibusdam architecto molestias dignissimos illo incidunt
              commodi doloribus hic!
            </div>
          </DuasColunas>
          <Mural>
            <BackgroundGemeos />
          </Mural>
          <Titulo>
            <a id="doacao"></a>Doação
          </Titulo>
          <DuasColunas>
            <div>Rede de ONGs Gerando Falcões</div>
            <div>
              A Gerando Falcões nasceu na crise para liderar em momentos
              anormais e incertos. Uma organização social que atua dando suporte
              á periferias e favelas. Uma plataforma de impacto social, que
              trabalha em rede acelerando ONGs em dezenas de comunidades. É
              notório o importante papel de instituições com esses propósitos,
              que valorizam o ser humano, dando voz aos desfavorecidos,
              atentando-se ás necessidade gerais criando oportunidades para uma
              vida melhor.
              <p>
                Esses principios e atuações nos mostram que a visão social de
                Edu Lyra faz da Gerando Falcões a parceria ideal para esta ação
                solidária "Somos frutos de uma visão: Não importa de onde você
                vem, mas para onde você vai."
              </p>
            </div>
          </DuasColunas>
          <Mural>
            <BackgroundGaviao />
          </Mural>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
