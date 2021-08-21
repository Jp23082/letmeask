//Biblioteca responsavel por armazenar os parametros passados na rota da pagina
import { useHistory, useParams } from 'react-router-dom';

//image
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';


//Componentes
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/userAuth';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';
import { database } from '../services/firebase';

type RoomParams ={
    id: string;
}

export function AdminRoom(){
    // const {user} = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    // Utilizamoso hook useRoom para reaproveitar funções
    const { title, questions } = useRoom(roomId)

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        history.push('/');
    }

   async function handleDeleteQuestion(questionId: string){
        if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask"/>
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>{title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                {questions.map(question =>{
                    return(
                        <Question
                            key={question.id}
                            content = {question.content}
                            author = {question.author}
                        >
                            <button
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Remover pergunta"/>
                            </button>
                        </Question>   
                    );
                })}
                </div>
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

    //Pesquisar o algoritmo de reconciliação
  */