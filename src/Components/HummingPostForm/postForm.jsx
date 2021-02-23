import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    // width: '25ch',
  },
}));

 function HummingPostForm() {
  const classes = useStyles();
  const [post, setPost] = React.useState("");

  const handleChange = (prop) => (event) => {
    // setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    // setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEnter = (event) => {
    // event.preventDefault();
    if(event.charCode === 13){
      setPost(event.target.value)
      console.log(post);
      console.log("submit", event.target.value)
    }
  }

  return (
    <div className={classes.root}>
      <div>
      
      <TextField
          label="Share your thoughts"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          // InputProps={{
          //   startAdornment: <InputAdornment position="start"></InputAdornment>,
          // }}
          // onChange={handleEnter}
          onKeyPress={handleEnter}
          variant="outlined"
          fullWidth
        />
    
      </div>
    </div>
  );
}


export default HummingPostForm;