import { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import Chat from './Components/Chat';

function App() {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    

    const hub = async () => {
      try {
        const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7198/hub")
        .configureLogging(LogLevel.Information)
        .build();

        connection.on("ReceivedMessage", (messageModel) => {
          console.log('Message received: ', messageModel)

          setMessages((messages) => [...messages, messageModel])
        });
      } 
      catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
      <Chat connection={connection}/>
      <div>
        <h2>Mensagem recebidas: </h2>
        <ul>
          {messages.map(())}
        </ul>
      </div>
    </div>
  )
}

export default App
