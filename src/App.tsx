import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

//Importando contextos
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    //Criando as rotas da aplicação com React-Router-DOM
    <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

/**
 * -> Pilares do ReactJS - MUITO IMPORTANTE !!!
 * Componentes: Funções que retornam HTML e quando juntos estruturam a interface da aplicação
 * 
 * Propriedade: Trata-se de parametros passados para o componente (function) que determinam a 
 * forma como o mesmo será renderizado ao usuário.
 * 
 * Estado: Refere-se ao evento do componente. Por exemplo ao clicar no botão mostrar um count ++ 
 * ao usuário
 * 
 * -> Conectando a aplicacação com um Baas(BackEnd as a Service) - FIREBASE
 * O Firebase nos permite utilizar recursos do BackEnd da aplicação, como Authentication, DataBase
 * que são separados em Firestore Database(Banco Relacional) e RealTime Database(NoSql)
 * 
 * Configurar Firebase - Aula 01
 * -> Criar um projeto no link: https://console.firebase.google.com
 * -> Remover Google Analytics
 * -> Authentication: Selecionar opção de autenticação(Google)
 *      -> Inserir email de suporte e nome publico do projeto
 * -> Database(RealTime Database):  Criar banco de dados, Iniciar no modo bloqueado
 * -> Integrar projeto com ReactJS: Visão Geral do projeto, Selecionar opção Web, Apelido do app, 
 * Continuar no console. 
 * Ao ir em visão geral do projeto novamente, selecionar a opção cofiguration que retornará um 
 * codigo responsavel por integrar a aplicação ao Firebase. Esta integração acontecerá dentro de 
 * services. 
 * -> Instalar dependecias no projeto: yarn add firebase
 * 
 * Roteamento e navegação - Aula 02
 * -> Para realizar o roteamento e a navegação entre as paginas do projeto, utilizamos uma biblioteca
 * do React chamada: React-Router-DOM.
 * -> Para instalar: yarn add react-router-dom, yarn add @types/react-router-dom -D
 * 
 * Contextos - Aula 02
 * -> Formas de compartilhar informações e/ou funções entre 2 ou mais componetes. Como por exemplo 
 * informações do usuário logado ou se o mesmo está logado.
 */