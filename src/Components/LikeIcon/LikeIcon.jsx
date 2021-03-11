import React, { useEffect, useState } from "react";
import { Avatar, Paper, withStyles } from "@material-ui/core";
import style from "./like.style";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const LikeIcon = (props) => {
  const { likePost, classes, noOfLikes } = props;
  
  return (
    <span className={classes.main}>
      {noOfLikes || ""}
      <FavoriteTwoToneIcon
        className={classes.heartIcon}
        style={{ color: `${noOfLikes ? "red" : ""}` }}
        onClick={likePost}
      />
    </span>
  );
};

export default withStyles(style)(LikeIcon);
