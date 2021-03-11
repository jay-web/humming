import React, {useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // display: "flex",
  //   // flexWrap: "wrap",
  //   position: "absolute",
  //   bottom: "0px",
  //   left: "15%",
  //   width: "80%",
  //   color: "#fff",
  //   // right: "5%"
  // },
  // postButton:{
  //   position: "absolute",
  //   bottom: "20px",
  //   right: "15%",
  // },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  form:{
    display: "flex",
    width: "80%",
    alignItems: "center",
    position: "absolute",
    bottom: "0px",
    // background: "grey",
    zIndex: "2000"
  }
}));

function HummingPostForm(props) {
  const classes = useStyles();
  const [post, setPost] = useState("")
  const { onSubmit } = props;

  const handleEnter = (event) => {
    console.log(event.target.value);
    setPost(event.target.value);
    if (event.charCode === 13) {
      if (event.target.value) {
        onSubmit(event.target.value);
      }
      event.target.value = "";
      setPost("");
    }
  };

  const handleSubmit = () => {
    console.log("clicked", post);
    if(post){
      onSubmit(post);
    }
    
    setPost("");
  }

  return (
    <div className={classes.form}>
      <TextField
        label="Share your thoughts"
        id="outlined-start-adornment"
        className={clsx(classes.margin, classes.textField, classes.root)}
        onChange={handleEnter}
        onKeyPress={handleEnter}
        variant="outlined"
        value={post}
        fullWidth
      />
      <Button variant="contained" style={{background: "#08375b", color:"#fff" }} className={classes.postButton} onClick={handleSubmit}>Post</Button>
    </div>
  );
}

export default HummingPostForm;
