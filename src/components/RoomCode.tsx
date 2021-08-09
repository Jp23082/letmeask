import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

//Propriedades - props da RoomCode
type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    //Function para copiar o codigo da sala dentro da textbox
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
            <img src={copyImg} alt="Copy room code"/>
        </div>
        <span>Sala #={props.code}</span> 
        </button>
    )
}