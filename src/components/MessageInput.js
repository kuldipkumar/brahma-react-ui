import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, backgroundColor: 'background.paper' }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        InputProps={{
          endAdornment: (
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          ),
        }}
      />
    </Box>
  );
}

export default MessageInput;