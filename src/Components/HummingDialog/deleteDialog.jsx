import React from 'react';
import {Button, withStyles } from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Loader from "react-loader-spinner";
import CircularIntegration from "../Spinner/spinner";

const style = {
  icon:{
    cursor: "pointer",
    "&:hover":{
      transform: "scale(1.3)",
      transition: "all .4s ease"
    }
  },
  box:{
    borderRadius: "15px"
  }
}

function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const {handleClick, classes, removeClass } = props;
  const [showLoader, setshowLoader] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePostRequest = () => {
    // setshowLoader(true);
    handleClick();
    handleClose();
    // setshowLoader(false);
  }

  return (
    <div>
      
      <DeleteForeverIcon onClick={handleClickOpen} className={classes.icon} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick={true}
        className={classes.box}
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to cancel this post ?"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Do you want to cancel this post ?
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button onClick={deletePostRequest} color="secondary" autoFocus variant="contained" className={removeClass}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* { showLoader ? <CircularIntegration /> : null } */}
    </div>
  );
}


export default withStyles(style)(DeleteDialog);