import { useState } from "react";
import App from "../App";

function Chat({connection}){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        const messageProps = {
            Name: name,
            Message: message
        };

        try {
            await connection.send("SendMessage", messageProps);
            setMessage('');
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <div>
        <label htmlFor="name">Insira seu nome: </label>
        <input
         type="text" 
         id="name" 
         placeholder="Insira seu nome aqui"
         onChange={(e) => setName(e.target.value)}
         />

        <br />
        <br />

        <label htmlFor="message">Insira sua mensagem aqui: </label>
        <input 
        type="text" 
        id="message" 
        placeholder="Insira a mensagem aqui"
        onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar mensagem</button>
    </div>
    );
}

export default Chat;