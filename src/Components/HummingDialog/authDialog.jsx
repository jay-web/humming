import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import {connect } from "react-redux";
import {signUp, login } from "../../Redux/actions/authActions";

import HummingTextField from "../Form/hummingTextField";
import {withRouter } from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';



const useStyles = makeStyles((theme) => ({
  root:{
    background: "blue",
    
  },
  title: {
    textAlign: "center",
    fontFamily: 'Akaya Telivigala, cursive ',
  },
  root:{
    margin: "0px 1rem"
  }
}));

 function HummingDialog(props) {
  const [open, setOpen] = React.useState(false);
  
  const {text, signUpForm, history, signUp, login, handleSubmit, icon} = props;
  const classes = useStyles();

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
   
  };

  const handleFormSubmit = async () => {
    setOpen(false);
    const {name, username, email, password, passwordConfirm } = props.formvalues;

    signUpForm ? signUp(username, password, passwordConfirm, name, email, history)
          : login(username, password, history)
  }

  return (
    
    <div className={classes.root}>
      <Button variant="contained"  onClick={handleClickOpen} startIcon={<AccountBoxIcon />}>
        {text}
      </Button>
     
      <Dialog open={open}  onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.title}> Please fill up credentials </DialogTitle>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
        
        <HummingTextField  signup={signUpForm} />
       
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
          {signUpForm ? "Signup" : "Login"}
          </Button>
        </DialogActions>
        </form>
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

const hummingDialog = withRouter(HummingDialog)


export default connect(mapStateToProps, { signUp, login} )(hummingDialog);