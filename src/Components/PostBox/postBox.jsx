import React from "react";
import { Avatar, Paper, withStyles } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from "./postBox.style";

const PostBox = (props) => {
  const { post, classes, deletePosts } = props;

  const deletePostById = () => {
    
    deletePosts(post._id, post.postBy.id)
  }
  return (
    <Paper className={classes.root} elevation={1}>
      <span className={classes.leftSpan}>
      <Avatar alt="Remy Sharp" src={`${post.postBy.photo[0]}`} />
      <span>
      <h4>{post.content}</h4>
      <h6>postedAt: {post.date}</h6>
      </span>
      </span>
     
      <DeleteForeverIcon onClick={deletePostById} className={classes.delete}/>

    </Paper>
  );
};

export default withStyles(styles)(PostBox);
