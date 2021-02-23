import React from "react";
import { connect } from "react-redux";
import HummingAppBar from "../HummingAppBar/hummingAppBar";
import axios from "axios";
import HummingPostForm from "../HummingPostForm/postForm";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  fetchPosts = async () => {
    let url = "http://localhost:5000/api/v1/post";

    let response = await axios({
      method: "GET",
      url: url,
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzBmZWQ3NmNhMDQ4MTBmNzgwMmRjYiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MDcxMDQxLCJleHAiOjE2MTQ2NzU4NDF9.z5ESak98cxXpDh9pm-lzCu_9SGLZct0otQ3nYYPG4T8",
      },
    });
    let posts = response.data.data.posts;
    this.setState({ ...posts, posts });
  };


  componentDidMount() {
    this.fetchPosts();
  }

  renderPosts = () => {
      return this.state.posts.map((post, idx) => {
          return <h4 key={idx}>{post.content}</h4>
      })
  }

  render() {
    const { user } = this.props;
    // console.log(user.username)
    console.log(this.state.posts);
    return (
      <div>
        <HummingAppBar />
        <h1>HOMEPAGE</h1>
        <span>{user.username}</span>
        {this.renderPosts()}
        <HummingPostForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
};

export default connect(mapStateToProps)(HomePage);
