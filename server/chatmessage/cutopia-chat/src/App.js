import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Friendlist from './Friendlist';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('7a5558b8ac809922c20b', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className = "app_header">

      </div>
       <div className="app_body">
       <Friendlist />
       <Chat messages={messages} />
       </div>
       <div className =  "app_footer">
         
       </div>
    </div>
  );
}

export default App;
