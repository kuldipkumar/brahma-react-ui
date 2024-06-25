import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import Sidebar from './components/Sidebar';
import Header from './components/Header'
import ChatArea from './components/ChatArea';
import MessageInput from './components/MessageInput';
import Theme from './theme'

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

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Mock AI response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { 
        text: "This is a mock AI response. In a real application, this would come from your backend API.", 
        sender: 'ai' 
      }]);
    }, 1000);
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