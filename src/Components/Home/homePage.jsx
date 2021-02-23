import React from "react";
import {connect} from "react-redux";
import HummingAppBar from "../HummingAppBar/hummingAppBar";
import axios from "axios";

class HomePage extends React.Component {

    fetchPosts = async () => {
        let url = "http://localhost:5000/api/v1/post";
    
        let posts = await axios({
          method: "GET",
          url:url,
          headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzBmZWQ3NmNhMDQ4MTBmNzgwMmRjYiIsIm5hbWUiOiJodW1taW5nIiwiaWF0IjoxNjE0MDcxMDQxLCJleHAiOjE2MTQ2NzU4NDF9.z5ESak98cxXpDh9pm-lzCu_9SGLZct0otQ3nYYPG4T8'}
        });
    
        
      }


    render(){
        const {user} = this.props;
        // console.log(user.username)
        return (
            <div>
                <HummingAppBar />
                <h1>HOMEPAGE</h1>
                <span>{user}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    if(state.auth){
        return { user: state.auth.username}
    }
    return {}
}


export default connect(mapStateToProps)(HomePage);