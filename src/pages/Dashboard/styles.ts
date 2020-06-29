import styled, { css } from 'styled-components';
import MuralBackgroundImg from '../../assets/mural.jpg';
import GaviaoBackgroundImg from '../../assets/rda_3381.jpg';
import GemeosBackgroundImg from '../../assets/osgemeos-3.jpg';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background: #ffcc00;
`;

export const Menu = styled.div`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 18px;
  color: #000;
  padding-bottom: 5px;
  border-bottom: 5px solid black;
  a {
    text-decoration: none;
    color: black;
  }
  span {
    font-size: 25px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    li {
      display: inline;
      margin-left: 30px;
    }

    li:first-child {
      padding: 5px;
      border-radius: 40%;
      border: 1px solid black;
    }

    li:nth-child(5n) {
      margin-left: 60px;
    }
  }
`;

export const Icones = styled.div`
  max-width: 10px;
  border: 0px solid red;
`;

export const Mural = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  height: 400px;

  border: 0px solid black;
`;

export const BackgroundMural = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  background: url(${MuralBackgroundImg}) no-repeat center;
  background-size: contain;
`;

export const BackgroundGaviao = styled.div`
  flex: 1;
  height: 100%;
  background: url(${GaviaoBackgroundImg}) no-repeat center;
  background-size: contain;
`;

export const BackgroundGemeos = styled.div`
  flex: 1;
  height: 100%;
  background: url(${GemeosBackgroundImg}) no-repeat center;
  background-size: contain;
`;

export const TabelaNumeros = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 200px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 2px;
    height: 42px;
    width: 42px;
    border: 1px solid black;
  }
`;

export const DuasColunas = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div {
    font-family: AktivBold;
    width: 425px;
    padding: 10px;
    text-align: justify;
    font-family: ;
  }
`;

export const Titulo = styled.h2`
  margin-top: 15px;
  margin-top: 20px;
  height: 30px;
  border-bottom: 3px solid black;
  font-family: AktivBold;
`;
