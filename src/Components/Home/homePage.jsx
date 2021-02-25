import React from "react";
import { connect } from "react-redux";
import HummingAppBar from "../HummingAppBar/hummingAppBar";
import axios from "axios";
import HummingPostForm from "../HummingPostForm/postForm";
import { fetchPosts, createPosts, deletePosts } from "../../Redux/actions/postActions";
import { withStyles, Avatar, Divider } from "@material-ui/core";
import styles from "./homePage.style";
import PostBox from "../PostBox/postBox";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.setState({ posts: this.props.posts });
  }

  renderPosts = () => {
    const { posts} = this.props;
  
    if (posts.length > 0) {
      return posts.map((post, idx) => {
        return <PostBox key={idx} post={post} deletePosts={this.onDeletePost} />;
      });
    }
  };

  onCreatePost = (value) => {
    this.props.createPosts({ content: value });
    // this.props.fetchPosts();
  };

  onDeletePost = (postId, userId) => {
    const { deletePosts } = this.props;

    deletePosts(postId, userId);
    this.props.fetchPosts();

  }

  render() {
    const { user, classes } = this.props;
    // console.log(user.username)

    return (
      <div>
        <HummingAppBar />
        <div className={classes.root}>
          <span className={classes.sidebar}></span>
          <span className={classes.mainbar}>
            <span className={classes.title}>
              <Avatar src={user.photo[0]} />
              <div style={{marginLeft: "1rem"}}>
                <h3 style={{ marginBottom:"-1rem"}}> {user.username} </h3>
                <h6>{user.email}</h6>
              </div>
              <HummingPostForm onSubmit={this.onCreatePost} className={classes.form}/>
            </span>
            <Divider />
            <span className={classes.posts}>{this.renderPosts()}</span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user, posts: state.post.posts };
};

const homePage = withStyles(styles)(HomePage);
export default connect(mapStateToProps, { fetchPosts, createPosts, deletePosts })(homePage);
