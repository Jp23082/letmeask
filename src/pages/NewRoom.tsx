//Responsavel pela navegação React-Router-DOM
import { Link, useHistory } from 'react-router-dom'

//Biblioteca utilizada para não gerar o refresh
import { FormEvent, useState } from 'react'

//Importando as imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

//Importando o hook de authentication
import { useAuth } from '../hooks/userAuth'

import '../styles/auth.scss';
import { database } from '../services/firebase'

//Criando um componente
export function NewRoom() {
    //Recuperando informações de um contexto - Dados do usuário logado
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] =  useState('');

    //Criando uma nova sala
    async function handleCreateRoom(event: FormEvent){
        //Não gera refresh da pagina no onclick do button
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }
        
        //Trata-se da categoria do registro inserido no banco
        const roomRef = database.ref('rooms');

        //Inserindo as informações no firebase dentro da categoria rooms
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id  
        })

        //Redirecionando o usuário para sala criada
        history.push(`/rooms/${firebaseRoom.key}`)
    }   
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
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)} //Evento resposavel por capturar o valor digitado pelo usuário
                            value={newRoom}
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