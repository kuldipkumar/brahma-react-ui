import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import Sidebar from './components/Sidebar';
import Header from './components/Header'
import ChatArea from './components/ChatArea';
import MessageInput from './components/MessageInput';
import Theme from './theme'
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState('Database');
  const [settings, setSettings] = useState({
    application: 'Vidya',
    gptWorkflow: 'Chat with advance LLM',
    gptModel: 'Innovative (gpt-35-turbo-16k)',
    creativity: 0.5,
    contextConnection: false,
  });

  let finalData = '';

  const fetchData = async (messages) => {
    const serverReply =  await axios ('https://667c2acd3c30891b865b9b12.mockapi.io/randomstring/TestData/1')

    finalData = serverReply.data.Lifeisgood
    console.log(finalData)

    return finalData
   }

  const handleSendMessage = (message) => {
    setMessages(  (message) => [...messages, { text: message, sender: 'user' }]);

    console.log(messages)

    const response = fetchData(messages)
  console.log(finalData);
    setMessages([...messages, {text: response, sender: 'ai'  }])
    console.log(messages);
  };

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
          <Sidebar 
            selectedFunction={selectedFunction} 
            setSelectedFunction={setSelectedFunction}
            settings={settings}
            setSettings={setSettings}
          />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <ChatArea messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
