//Import responsavel pela navegação da aplicação - React-Router-DOM
import { useHistory } from 'react-router-dom'

//Importando as imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

//Importando o hook de authentication
import { useAuth } from '../hooks/userAuth'

import '../styles/auth.scss';

//Criando um componente
export function Home() {
    //Utilizando um hook para fazer a navegação - Somente dentro do componente
    const history = useHistory();
    
    //Recuperando informações de um contexto
    const {user, signInWithGoogle} = useAuth()

    //Função responsavel por navegar para outra pagina NewRoom 
    async function handleCreateRoom(){
        //Se o usuário não estiver logado
        if(!user){
            await signInWithGoogle()
        }

        //Redirecionando a outra pagina
        history.push('/rooms/new')
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respotas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                {/* <h1>{value}</h1> */}
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google"></img>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}