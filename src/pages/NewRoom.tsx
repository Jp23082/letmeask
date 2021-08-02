//Responsavel pela navegação React-Router-DOM
import { Link } from 'react-router-dom'

//Importando as imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

//Importando o hook de authentication
// import { useAuth } from '../hooks/userAuth'

import '../styles/auth.scss';

//Criando um componente
export function NewRoom() {
    //Recuperando informações de um contexto - Dados do usuário logado
    // const { user } = useAuth();
 
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respotas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}