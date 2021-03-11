import React from "react";
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import {withStyles} from "@material-ui/core";
import style from "./retweet.style";

const RetweetIcon = (props) => {
    const {classes, onClick } = props;
    return (
        <RepeatOneIcon className={classes.retweetIcon } onClick={onClick} />
    )
}

export default withStyles(style)(RetweetIcon);
