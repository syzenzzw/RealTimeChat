import { useState, useEffect } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import Chat from './Components/Chat';

function App() {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    
    useEffect(() => {
      const hub = async () => {
        try {
          const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7198/hub")
            .configureLogging(LogLevel.Information)
            .build();

          connection.on("ReceivedMessage", (message) => {
            console.log('Message received: ', message);

            setMessages((messages) => [...messages, message]);
          });

          await connection.start();
          setConnection(connection);  
          setIsConnected(true);
          console.log("Conexão concluída com sucesso", connection);
        } catch (error) {
          console.log(error);
        }
      };
      hub();
    }, []);
    

  return (
    <div>
      <Chat connection={connection} isConnected={isConnected} /> 
      <div>
        <h2>Mensagem recebidas: </h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
                <strong>{message.name}</strong>: {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
