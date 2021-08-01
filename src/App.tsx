import { Button } from "./components/Button"

function App() {
  return (
    <div>
    {/* <Button text="Botão 1"/> prop text */}
    {/* <Button>Clique aqui</Button> prop children */}
    <Button/>
    <Button/>
    <Button/>
    <Button/>
    </div>
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
 * Configurar Firebase
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
 * -> 
 */