import React, { useEffect, useState } from "react";
import { Avatar, Paper, withStyles } from "@material-ui/core";

import styles from "./postBox.style";
// import { AnimatedSwitch } from "react-router-transition";
import DeleteDialog from "../HummingDialog/deleteDialog";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import LikeIcon from "../LikeIcon/LikeIcon";
import RetweetIcon from "../Retweet/retweet";
import { connect } from "react-redux";
import postActions from "../../Redux/actions/postActions";

const PostBox = (props) => {
  const { post, classes, deletePosts, likePost, removeClass } = props;

  const reTweetPost = () => {
    console.log("Retweeting", post._id);
  };

  const deletePostById = () => {
    deletePosts(post._id, post.postBy.id);
  };

  const likePostClicked = (e) => {
    
    likePost(post._id, post.postBy.id);
  };
  return (
    // <AnimatedSwitch
    //   atEnter={{ opacity: 0 }}
    //   atLeave={{ opacity: 0 }}
    //   atActive={{ opacity: 1 }}
    //   className="switch-wrapper"
    // >
    <Paper className={classes.root} elevation={1}>
      <span className={classes.leftSpan}>
        <Avatar alt="Remy Sharp" src={`${post.postBy.photo[0]}`} />
        <span>
          <h4>{post.content}</h4>
          <h6>postedAt: need to set</h6>
        </span>
      </span>
      <span className={classes.rightSpan}>
        <RetweetIcon onClick={reTweetPost} />
        <span>
          <LikeIcon likePost={likePostClicked} noOfLikes={post.likes.length} />
        </span>

        <DeleteDialog handleClick={deletePostById} removeClass={removeClass}/>
      </span>
    </Paper>
    // </AnimatedSwitch>
  );
};

let postBox = connect(null, { ...postActions })(PostBox);

export default withStyles(styles)(postBox);
