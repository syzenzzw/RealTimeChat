import { useState, useEffect } from 'react'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import Chat from './Components/Chat';

function App() {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [messages, setMessages] = useState([]);
    
      
      
      useEffect(() => {
        function connectionSignal(){

          if(connection) return;
          try {
  
            const connection = new HubConnectionBuilder()
              .withUrl("https://localhost:7198/hub")
              .configureLogging(LogLevel.Information)
              .build();
     
            connection.on("ReceivedMessage", (message) => {
              console.log('Message received: ', message);
              setMessages((messages) => [...messages, message]);
            });
     
            connection.start();
            
            setConnection(connection); 
     
            console.log("Conexão concluída com sucesso", connection);
     
          } catch (error) {
            console.log(error);
          }
        }
        connectionSignal();
      }, [connection])

  
      
  return (
    <div>
      <Chat connection={connection}/> 
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