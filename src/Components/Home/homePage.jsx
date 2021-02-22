import React from "react";
import {connect} from "react-redux";

class HomePage extends React.Component {
    render(){
        const {user} = this.props;
        // console.log(user.username)
        return (
            <div>
                <h1>HOMEPAGE</h1>
                <span>{user.username}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    if(state.auth){
        return { user: state.auth.data}
    }
    return {}
}


export default connect(mapStateToProps)(HomePage);