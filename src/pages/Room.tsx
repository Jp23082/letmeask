//Biblioteca responsavel por armazenar os parametros passados na rota da pagina
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//image
import logoImg from '../assets/images/logo.svg';

//Componentes
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';

import '../styles/room.scss';

type FirebaseQuestion = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>

type Question = {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}

type RoomParams ={
    id: string;
}

export function Room(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');


    const roomId = params.id;

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room =>{
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestion = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) =>{
                return{
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
    }, [roomId]);

    async function handleSendQuestion(event: FormEvent){
        //Faz com que a pagina não seja recarregada
        event.preventDefault();

        //Verifica se a pergunta não está vazia
        if(newQuestion.trim() === ''){
            return;
        }

        //Verifica se o usuário está autenticado
        if(!user) {
            throw new Error('You must be logged in');
        }

        //Criando o objeto pergunta
        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        };

        //Salvando a pergunta criada no banco
        await database.ref(`rooms/${roomId}/questions`).push(question);

        //Apagar o conteúdo da textbox
        setNewQuestion('');
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask"/>
                    <RoomCode code={roomId}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <form onSubmit={handleSendQuestion}> 
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value = {newQuestion}
                    />

                    <div className="form-footer">
                        { user? (
                            <div className ="user-info">
                                <img src={user.avatar} alt={user.name}/>
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        )}
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>


            </main>
        </div>
    );
}

 /*
  Entries: Converte um objeto JSON em um array de objetos.
        -> Ex: const obj = {
            "name":"Ana Maria"
            "idade": 120
        }  

    Ao executar o entries em cima deste objeto será retornado a seguinte saida.
    Object.entries(obj) => [["name","Ana Maria"],["idade",120]]
  */