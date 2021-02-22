import React from "react";
import {connect} from "react-redux";
import HummingAppBar from "../HummingAppBar/hummingAppBar";

class HomePage extends React.Component {
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