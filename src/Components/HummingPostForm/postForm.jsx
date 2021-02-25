import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    position: "absolute",
    bottom: "0px",
    left: "15%",
    width: "80%",
    color: "#fff",
    // right: "5%"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
  
  },
}));

function HummingPostForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;

  const handleEnter = (event) => {
    if (event.charCode === 13) {
      if (event.target.value) {
        onSubmit(event.target.value);
      }
      event.target.value = "";
    }
  };

  return (
    <div className={classes.form}>
      <TextField
        label="Share your thoughts"
        id="outlined-start-adornment"
        className={clsx(classes.margin, classes.textField, classes.root)}
        onKeyPress={handleEnter}
        variant="outlined"
        fullWidth
        
      />
    </div>
  );
}

export default HummingPostForm;
