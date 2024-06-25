import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

function ChatArea({ messages }) {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
      {messages.map((message, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            maxWidth: '70%',
            ml: message.sender === 'ai' ? 0 : 'auto',
            mr: message.sender === 'ai' ? 'auto' : 0,
            backgroundColor: message.sender === 'ai' ? '#e3f2fd' : '#e8f5e9',
          }}
        >
          <Typography>{message.text}</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default ChatArea;