import React from 'react';
import { 
  Box, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel, 
  Select, 
  MenuItem, 
  Slider, 
  Switch, 
  Typography 
} from '@mui/material';

function Sidebar({ selectedFunction, setSelectedFunction, settings, setSettings }) {
  const functions = ['Database', 'Document', 'Confluence', 'Generate Code/Testcase', 'API'];

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  return (
    <Box sx={{ width: 300, p: 2, borderRight: '1px solid #e0e0e0' }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Functionality</FormLabel>
        <RadioGroup value={selectedFunction} onChange={(e) => setSelectedFunction(e.target.value)}>
          {functions.map(func => (
            <FormControlLabel key={func} value={func} control={<Radio />} label={func} />
          ))}
        </RadioGroup>
      </FormControl>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Settings</Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <FormLabel>Application</FormLabel>
          <Select
            value={settings.application}
            onChange={(e) => handleSettingChange('application', e.target.value)}
          >
            <MenuItem value="Vidya">Vidya</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <FormLabel>GPT Workflow</FormLabel>
          <Select
            value={settings.gptWorkflow}
            onChange={(e) => handleSettingChange('gptWorkflow', e.target.value)}
          >
            <MenuItem value="Chat with advance LLM">Chat with advance LLM</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <FormLabel>GPT Model</FormLabel>
          <Select
            value={settings.gptModel}
            onChange={(e) => handleSettingChange('gptModel', e.target.value)}
          >
            <MenuItem value="Innovative (gpt-35-turbo-16k)">Innovative (gpt-35-turbo-16k)</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Creativity</Typography>
          <Slider
            value={settings.creativity}
            onChange={(_, value) => handleSettingChange('creativity', value)}
            step={0.1}
            marks
            min={0}
            max={1}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={settings.contextConnection}
                onChange={(e) => handleSettingChange('contextConnection', e.target.checked)}
              />
            }
            label="Context Connection"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;