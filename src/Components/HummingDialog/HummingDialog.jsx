import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import {connect } from "react-redux";

import HummingTextField from "../Form/hummingTextField";




const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  root:{
    margin: "0px 1rem"
  }
}));

 function HummingDialog(props) {
  const [open, setOpen] = React.useState(false);
  
  const {text, signup, onSubmit} = props;
  const classes = useStyles();

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
   
  };

  const handleSubmit = async () => {
    setOpen(false);
    const {name, username, email, password, passwordConfirm } = props.formvalues;

    onSubmit(username, password, passwordConfirm, name, email);
  }

  return (
    
    <div className={classes.root}>
      <Button variant="contained"  onClick={handleClickOpen}>
        {text}
      </Button>
     
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.title}> Please fill up credentials </DialogTitle>
        <DialogContent>
        {/* <form > */}
        <HummingTextField  signup={signup} />
        {/* </form> */}
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
          {signup ? "Signup" : "Login"}
          </Button>
        </DialogActions>
      </Dialog>
      
      
    </div>
    
  );
}

function mapStateToProps (state){
    // console.log(state.form.signUpForm.values)
    // state.form.signUpForm.values
    if(state.form.signUpForm){
      return {formvalues : state.form.signUpForm.values};
    }else{
      return {}
    }
 
}


export default connect(mapStateToProps)(HummingDialog);