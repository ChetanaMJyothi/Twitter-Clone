import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    props.onOpen();
  };
  

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Replying to @ {props.value}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tweet your reply"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Reply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}