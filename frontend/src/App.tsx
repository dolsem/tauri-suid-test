import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Divider from '@suid/material/Divider';
import Modal from '@suid/material/Modal';
import Paper from '@suid/material/Paper';
import TextField from '@suid/material/TextField';
import Typography from '@suid/material/Typography';
import { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Modal open>
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 350,
            maxWidth: 800,
            width: '50%',
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Test
          </Typography>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
            <TextField
              fullWidth
              variant="filled"
              inputProps={{ style: { 'padding-top': '8px' } }}
              sx={{ mr: 1 }}
            />
          </Box>
          <Button sx={{ mt: 2 }}>OK</Button>
        </Paper>
      </Modal>
    </div>
  );
};

export default App;
