import React from "react";
import { connect } from "react-redux";
import HummingAppBar from "../HummingAppBar/hummingAppBar";
import axios from "axios";
import HummingPostForm from "../HummingPostForm/postForm";
import postActions from "../../Redux/actions/postActions";
import { fetchUser } from "../../Redux/actions/userActions";
import { withStyles, Avatar, Divider } from "@material-ui/core";
import styles from "./homePage.style";
import PostBox from "../PostBox/postBox";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animation.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchPosts, fetchUser } = this.props;
    fetchUser();
    fetchPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;

    if (posts.length > 0) {
      return posts.map((post, idx) => {
        // let isPostLiked = post.likes.includes(this.props.user.id);

        return (
          <CSSTransition key={idx} timeout={500} classNames="item">
            <PostBox key={idx} post={post} removeClass="remove-btn" />
          </CSSTransition>
        );
      });
    }
  };

  onCreatePost = (value) => {
    const { createPosts } = this.props;
    createPosts({ content: value });
    // this.props.fetchPosts();
  };

  // onDeletePost = (postId, userId) => {
  //   const { deletePosts, fetchPosts } = this.props;

  //   deletePosts(postId, userId);
  //   fetchPosts();
  // };

  // onLikePost = (postId, userId) => {
  //   const { likePost, fetchPosts } = this.props;

  //   likePost(postId, userId);
  //   fetchPosts();
  // };

  render() {
    const { user, classes } = this.props;
    // console.log(user.username)

    return (
      <div className={classes.homePage}>
        <HummingAppBar />
        {!user ? (
          "Loading"
        ) : (
          <div className={classes.root}>
            <span className={classes.sidebar}>
              <span className={classes.title}>
                <Avatar src={user.photo[0]} />
                <div style={{ marginLeft: "1rem" }}>
                  <h3 style={{ marginBottom: "-1rem" }}> {user.username} </h3>
                  <h6>{user.email}</h6>
                </div>
                {/* <HummingPostForm onSubmit={this.onCreatePost} className={classes.form}/> */}
              </span>
            </span>
            <span className={classes.mainbar}>
              <HummingPostForm
                onSubmit={this.onCreatePost}
                className={classes.form}
              />

              {/* <span className={classes.posts}> */}
                <TransitionGroup className="todo-list">
                  {this.renderPosts()}
                </TransitionGroup>
              {/* </span> */}
            </span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user, posts: state.post.posts };
};

const homePage = withStyles(styles)(HomePage);

export default connect(mapStateToProps, { ...postActions, fetchUser })(
  homePage
);
